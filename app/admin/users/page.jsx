"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

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

  const testDB = async () => {
    const { data, error } = await supabase
      .from("devotees")
      .select("*");

    console.log("DATA:", data);
    console.log("ERROR:", error);
  };

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
        setUsers((prev) =>
          prev.map((u) =>
            u.id === userId
              ? { ...u, status: newStatus }
              : u
          )
        );
      } else {
        alert("Failed to update status");
      }
    } catch (err) {
      console.error(err);
      alert("Error");
    }
  };

  /* -----------------------------------------
      CHANGE ROLE
  ------------------------------------------- */
  const changeRole = async (id, role) => {
    try {
      const res = await fetch("/api/admin/update-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: id,
          role: role === "admin" ? "user" : "admin",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setUsers((prev) =>
          prev.map((u) =>
            u.id === id
              ? {
                  ...u,
                  role:
                    role === "admin"
                      ? "user"
                      : "admin",
                }
              : u
          )
        );
      }
    } catch (err) {
      console.error("Role update failed:", err);
    }
  };

  /* -----------------------------------------
      SEARCH FILTER
  ------------------------------------------- */
  const filteredUsers = users.filter(
    (u) =>
      u.full_name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      u.email
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );
if (loading) {
  return (
    <div className="flex justify-center items-center min-h-[40vh]">
      <p className="text-sm md:text-base text-purple-700 animate-pulse">
        Loading users...
      </p>
    </div>
  );
}

return (
 <div className="space-y-5 md:space-y-6 w-full">
    {/* HEADER */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

      <h1 className="text-2xl md:text-3xl font-bold text-purple-700">
        👥 Manage Users
      </h1>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full md:w-80
          border
          px-4 py-3
          rounded-xl
          focus:ring-2
          focus:ring-purple-400
          outline-none
        "
      />
    </div>
{/* MOBILE USERS CARDS */}
<div className="md:hidden space-y-4">
  {filteredUsers.length === 0 ? (
    <div className="bg-white rounded-xl p-5 shadow text-center text-gray-500">
      No users found
    </div>
  ) : (
    filteredUsers.map((u) => (
      <div
        key={u.id}
        className="bg-white rounded-xl p-4 shadow border border-gray-100"
      >
        {/* Header */}
        <div className="flex justify-between items-start gap-3">
          <div>
            <h3 className="font-semibold text-gray-800">
              {u.full_name || "-"}
            </h3>

            <p className="text-sm text-gray-500 break-all">
              {u.email || "-"}
            </p>
          </div>

          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              u.role === "admin"
                ? "bg-purple-100 text-purple-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {u.role || "user"}
          </span>
        </div>

        {/* Details */}
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Status</span>

            <span
              className={`font-medium ${
                u.status === "blocked"
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              {u.status || "active"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Donation</span>

            <span className="font-medium text-purple-700">
              ₹{u.total_donation || 0}
            </span>
          </div>

          <div className="flex justify-between gap-3">
            <span className="text-gray-500">
              Joined
            </span>

            <span className="text-right text-xs">
              {u.created_at || "-"}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => {
              setSelectedUser(u);
              setShowModal(true);
            }}
            className="
              flex-1
              py-2
              rounded-lg
              bg-blue-50
              text-blue-600
              font-medium
            "
          >
            View
          </button>

          <button
            onClick={() =>
              toggleStatus(u.id, u.status)
            }
            className="
              flex-1
              py-2
              rounded-lg
              bg-red-50
              text-red-600
              font-medium
            "
          >
            {u.status === "blocked"
              ? "Unblock"
              : "Block"}
          </button>
        </div>
      </div>
    ))
  )}
</div>
    {/* TABLE */}
    
 <div className="hidden md:block">
  <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
    <table className="w-full">
        <thead className="bg-purple-50 text-purple-700">
          <tr>
           <th className="px-6 py-4 text-left">Name</th>
            <th className="px-6 py-4 text-left">Email</th>
            <th className="px-6 py-4">Role</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Joined</th>
            <th className="px-6 py-4">Donation</th>
            <th className="px-6 py-4 text-center">Action</th>
      
          </tr>
        </thead>

        <tbody>
          {filteredUsers.length === 0 && (
            <tr>
              <td
                colSpan="7"
                className="text-center py-10 text-gray-500"
              >
                No users found
              </td>
            </tr>
          )}

          {filteredUsers.map((u) => (
            <tr
              key={u.id}
              className="
                border-t
                border-gray-200
                hover:bg-purple-50
                transition
              "
            >
              <td className="px-4 py-4">
                <p className="font-semibold text-gray-800">
                  {u.full_name || "-"}
                </p>
              </td>

              <td className="px-4 py-4 text-gray-700">
                <span className="break-all">
                  {u.email || "-"}
                </span>
              </td>

              <td className="px-4 py-4 text-center">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    u.role === "admin"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {u.role || "user"}
                </span>
              </td>

              <td className="px-4 py-4 text-center">
                <span
                  className={`font-semibold ${
                    u.status === "blocked"
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {u.status || "active"}
                </span>
              </td>

              <td className="px-4 py-4 text-center whitespace-nowrap">
                {u.created_at || "-"}
              </td>

              <td className="px-4 py-4 text-center font-semibold text-purple-700 whitespace-nowrap">
                ₹{u.total_donation || 0}
              </td>

              <td className="px-4 py-4">
                <div className="flex justify-center gap-3 whitespace-nowrap">
                  <button
                    onClick={() => {
                      setSelectedUser(u);
                      setShowModal(true);
                    }}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View
                  </button>

                  <button
                    onClick={() =>
                      toggleStatus(u.id, u.status)
                    }
                    className="text-red-600 hover:underline font-medium"
                  >
                    {u.status === "blocked"
                      ? "Unblock"
                      : "Block"}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
      {showModal && selectedUser && (
  <div
    className="
      fixed inset-0
      bg-black/40
      backdrop-blur-sm
      flex items-center justify-center
      z-50
      p-4
    "
  >
    <div
      className="
        bg-white
        w-full
        max-w-md
        max-h-[90vh]
        overflow-y-auto
        rounded-2xl
        shadow-2xl
        p-5 md:p-6
        relative
      "
    >
      {/* Close */}
      <button
        onClick={() => setShowModal(false)}
        className="
          absolute
          top-3 right-4
          text-gray-500
          text-xl
          hover:text-black
        "
      >
        ✕
      </button>

      {/* Header */}
      <div className="text-center mb-6">
        <div
          className="
            w-16 h-16
            mx-auto
            rounded-full
            bg-purple-100
            flex items-center justify-center
            text-2xl
          "
        >
          👤
        </div>

        <h2
          className="
            text-lg md:text-xl
            font-bold
            text-purple-700
            mt-2
            break-words
          "
        >
          {selectedUser.full_name}
        </h2>

        <p className="text-sm text-gray-500 break-all">
          {selectedUser.email}
        </p>

        <p className="mt-2 font-medium text-purple-700">
          Total Donation: ₹
          {selectedUser.total_donation || 0}
        </p>
      </div>

      {/* Details */}
      <div className="space-y-4 text-sm">

        <div className="flex justify-between gap-3">
          <span className="text-gray-500 font-medium">
            Phone
          </span>

          <span className="text-gray-800 font-semibold text-right break-all">
            {selectedUser.phone || "-"}
          </span>
        </div>

        <div className="flex justify-between gap-3">
          <span className="text-gray-500 font-medium">
            Role
          </span>

          <span className="text-gray-800 font-semibold capitalize">
            {selectedUser.role || "user"}
          </span>
        </div>

        <div className="flex justify-between gap-3">
          <span className="text-gray-500 font-medium">
            Status
          </span>

          <span
            className={`font-semibold ${
              selectedUser.status === "blocked"
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {selectedUser.status || "active"}
          </span>
        </div>

        <div className="flex justify-between gap-3">
          <span className="text-gray-500 font-medium">
            Joined
          </span>

          <span className="text-gray-800 font-semibold text-right">
            {selectedUser.created_at || "-"}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6">
        <button
          onClick={() => {
            toggleStatus(
              selectedUser.id,
              selectedUser.status
            );
            setShowModal(false);
          }}
          className={`
            w-full
            py-3
            rounded-xl
            text-white
            font-medium
            transition

            ${
              selectedUser.status === "blocked"
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700"
            }
          `}
        >
          {selectedUser.status === "blocked"
            ? "Unblock User"
            : "Block User"}
        </button>
      </div>
    </div>
  </div>
)}
</div>
);

}