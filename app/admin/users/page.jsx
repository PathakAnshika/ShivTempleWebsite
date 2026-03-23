"use client";
import { useEffect, useState } from "react";

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  /* -----------------------------------------
      FETCH USERS
  ------------------------------------------- */
  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/admin/users");
      const data = await res.json();

      if (data.success) {
        setUsers(data.users);
      }
    } catch (err) {
      console.error("Fetch users failed:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  /* -----------------------------------------
      BLOCK / UNBLOCK USER
  ------------------------------------------- */
  const toggleStatus = async (userId, currentStatus) => {
    try {
      const newStatus =
        (currentStatus || "active") === "active"
          ? "blocked"
          : "active";

      const res = await fetch("/api/admin/users/status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          status: newStatus,
        }),
      });

      const data = await res.json();

      if (data.success) {
        // UI update
        setUsers((prev) =>
          prev.map((u) =>
            u.id === userId ? { ...u, status: newStatus } : u
          )
        );

        // modal update
        if (selectedUser?.id === userId) {
          setSelectedUser((prev) => ({
            ...prev,
            status: newStatus,
          }));
        }
      } else {
        alert("Failed to update status");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating status");
    }
  };

  /* -----------------------------------------
      SEARCH FILTER
  ------------------------------------------- */
  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <p className="text-center mt-20 text-purple-700 animate-pulse">
        Loading users...
      </p>
    );
  }

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-purple-700">
          👥 Manage Users
        </h1>

        <input
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-400"
        />
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-purple-50 text-purple-700">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Donation</th>
              <th className="px-6 py-4">Joined</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-10 text-gray-500">
                  No users found
                </td>
              </tr>
            )}

            {filteredUsers.map((u) => (
              <tr key={u.id} className="border-t hover:bg-purple-50 transition">

                <td className="px-6 py-4 font-medium">{u.name}</td>

                <td className="px-6 py-4 text-gray-600">{u.email}</td>

                <td className="px-6 py-4 text-center">
                  <span className="px-3 py-1 rounded-full text-sm bg-gray-100">
                    {u.role}
                  </span>
                </td>

                {/* STATUS */}
                <td className="px-6 py-4 text-center">
                  <span
                    className={`font-semibold ${
                      (u.status || "active") === "active"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {u.status || "active"}
                  </span>
                </td>

                {/* DONATION */}
                <td className="px-6 py-4 text-center font-semibold text-purple-700">
                  ₹{u.total_donation || 0}
                </td>

                {/* JOINED */}
                <td className="px-6 py-4 text-center text-gray-500">
                  {u.created_at}
                </td>

                {/* ACTION */}
                <td className="px-6 py-4 text-center space-x-3">

                  <button
                    onClick={() => {
                      setSelectedUser(u);
                      setShowModal(true);
                    }}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </button>

                  <button
                    onClick={() => toggleStatus(u.id, u.status)}
                    className={`font-semibold hover:underline ${
                      (u.status || "active") === "active"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {(u.status || "active") === "active"
                      ? "Block"
                      : "Unblock"}
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && selectedUser && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative">

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-gray-500 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold text-purple-700 mb-4 text-center">
              👤 User Details
            </h2>

            <div className="space-y-3 text-sm">

              <div className="flex justify-between">
                <span>Name</span>
                <span>{selectedUser.name}</span>
              </div>

              <div className="flex justify-between">
                <span>Email</span>
                <span>{selectedUser.email}</span>
              </div>

              <div className="flex justify-between">
                <span>Phone</span>
                <span>{selectedUser.phone || "-"}</span>
              </div>

              <div className="flex justify-between">
                <span>Status</span>
                <span
                  className={`font-semibold ${
                    (selectedUser.status || "active") === "active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {selectedUser.status || "active"}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Role</span>
                <span>{selectedUser.role}</span>
              </div>

              <div className="flex justify-between">
                <span>Joined</span>
                <span>{selectedUser.created_at}</span>
              </div>

              <div className="flex justify-between">
                <span>Total Donation</span>
                <span className="font-semibold text-purple-700">
                  ₹{selectedUser.total_donation || 0}
                </span>
              </div>

            </div>

            <button
              onClick={() => {
                toggleStatus(selectedUser.id, selectedUser.status);
              }}
              className="mt-6 w-full bg-purple-600 text-white py-2 rounded-lg"
            >
              {(selectedUser.status || "active") === "active"
                ? "Block User"
                : "Unblock User"}
            </button>

          </div>
        </div>
      )}
    </div>
  );
}