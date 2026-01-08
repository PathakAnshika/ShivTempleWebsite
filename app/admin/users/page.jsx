"use client";
import { useEffect, useState } from "react";

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  /* -----------------------------------------
      FETCH USERS FROM BACKEND
  ------------------------------------------- */
  useEffect(() => {
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

    fetchUsers();
  }, []);

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
              <th className="px-6 py-4">Joined</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-10 text-gray-500">
                  No users found
                </td>
              </tr>
            )}

            {filteredUsers.map((u) => (
              <tr
                key={u.id}
                className="border-t hover:bg-purple-50 transition"
              >
                <td className="px-6 py-4 font-medium">{u.name}</td>
                <td className="px-6 py-4 text-gray-600">{u.email}</td>

                <td className="px-6 py-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-sm
                      ${
                        u.role === "admin"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                  >
                    {u.role}
                  </span>
                </td>

                <td className="px-6 py-4 text-center">
                  <span
                    className={`font-semibold ${
                      u.status === "active"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {u.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-center text-gray-500">
                  {u.created_at}
                </td>

                <td className="px-6 py-4 text-center space-x-3">
                  <button className="text-blue-600 hover:underline">
                    View
                  </button>

                  {u.status === "active" ? (
                    <button className="text-red-600 hover:underline">
                      Block
                    </button>
                  ) : (
                    <button className="text-green-600 hover:underline">
                      Unblock
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
