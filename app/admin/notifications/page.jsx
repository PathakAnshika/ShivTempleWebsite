"use client";
import { useState } from "react";

export default function AdminNotifications() {
  const [form, setForm] = useState({
    title: "",
    message: "",
    type: "general",
    user_id: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendNotification = async () => {
    if (!form.title || !form.message) {
      alert("Title & Message required");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/admin/notifications/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          user_id: form.user_id || null,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Notification sent successfully");
        setForm({
          title: "",
          message: "",
          type: "general",
          user_id: "",
        });
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-purple-700">
        🔔 Send Notification
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">

        {/* Title */}
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Notification Title"
          className="w-full border p-3 rounded-lg"
        />

        {/* Message */}
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Notification Message"
          rows={4}
          className="w-full border p-3 rounded-lg"
        />

        {/* Type */}
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        >
          <option value="general">General</option>
          <option value="event">Event</option>
          <option value="donation">Donation</option>
          <option value="membership">Membership</option>
          <option value="alert">Alert</option>
        </select>

        {/* User Target */}
        <input
          name="user_id"
          value={form.user_id}
          onChange={handleChange}
          placeholder="User ID (leave empty for all users)"
          className="w-full border p-3 rounded-lg"
        />

        {/* Button */}
        <button
          onClick={sendNotification}
          disabled={loading}
          className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
        >
          {loading ? "Sending..." : "Send Notification"}
        </button>
      </div>
    </div>
  );
}
