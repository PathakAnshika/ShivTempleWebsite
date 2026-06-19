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
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendNotification = async () => {
    if (!form.title || !form.message) {
      alert("Title & Message required");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "/api/admin/notifications/send",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            ...form,
            user_id:
              form.user_id || null,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        setSuccess(
          "✅ Notification sent!"
        );

        setForm({
          title: "",
          message: "",
          type: "general",
          user_id: "",
        });

        setTimeout(
          () => setSuccess(""),
          3000
        );
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

  const typeColor = {
    general:
      "bg-gray-100 text-gray-700",
    event:
      "bg-blue-100 text-blue-700",
    donation:
      "bg-green-100 text-green-700",
    membership:
      "bg-purple-100 text-purple-700",
    alert:
      "bg-red-100 text-red-700",
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-5 md:space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700">
          🔔 Notification Center
        </h1>

        <p className="text-sm md:text-base text-gray-600 mt-1">
          Create and send
          notifications to users
        </p>
      </div>

      {/* Success */}
      {success && (
        <div className="bg-green-100 text-green-700 text-sm md:text-base p-3 rounded-lg text-center">
          {success}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
        {/* FORM */}
        <div className="bg-white rounded-2xl shadow-lg p-5 md:p-6 space-y-4">
          <h2 className="text-lg md:text-xl font-semibold text-purple-700">
            Create Notification
          </h2>

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Notification Title"
            className="
              w-full
              border border-gray-300
              px-4 py-3
              rounded-xl
              text-sm md:text-base
              focus:outline-none
              focus:ring-2
              focus:ring-purple-500
            "
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Notification Message"
            rows={5}
            className="
              w-full
              border border-gray-300
              px-4 py-3
              rounded-xl
              text-sm md:text-base
              resize-none
              focus:outline-none
              focus:ring-2
              focus:ring-purple-500
            "
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="
              w-full
              border border-gray-300
              px-4 py-3
              rounded-xl
              text-sm md:text-base
              bg-white
              focus:outline-none
              focus:ring-2
              focus:ring-purple-500
            "
          >
            <option value="general">
              General
            </option>
            <option value="event">
              Event
            </option>
            <option value="donation">
              Donation
            </option>
            <option value="membership">
              Membership
            </option>
            <option value="alert">
              Alert
            </option>
          </select>

          <input
            name="user_id"
            value={form.user_id}
            onChange={handleChange}
            placeholder="User ID (optional)"
            className="
              w-full
              border border-gray-300
              px-4 py-3
              rounded-xl
              text-sm md:text-base
              focus:outline-none
              focus:ring-2
              focus:ring-purple-500
            "
          />

          <button
            onClick={sendNotification}
            disabled={loading}
            className="
              w-full
              bg-purple-600
              text-white
              py-3
              rounded-xl
              font-semibold
              text-sm md:text-base
              hover:bg-purple-700
              transition
              disabled:opacity-50
            "
          >
            {loading
              ? "Sending..."
              : "Send Notification"}
          </button>
        </div>

        {/* PREVIEW */}
        <div className="bg-white rounded-2xl shadow-lg p-5 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold text-purple-700 mb-4">
            👀 Live Preview
          </h2>

          <div className="border p-4 rounded-xl shadow-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <h3 className="font-semibold text-purple-700 break-words">
                {form.title ||
                  "Notification Title"}
              </h3>

              <span
                className={`text-xs px-2 py-1 rounded w-fit ${typeColor[form.type]}`}
              >
                {form.type}
              </span>
            </div>

            <p className="text-gray-600 mt-3 text-sm md:text-base break-words">
              {form.message ||
                "Your message will appear here..."}
            </p>

            <p className="text-xs text-gray-400 mt-4">
              Just now
            </p>
          </div>

          {/* Mobile Preview Note */}
          <div className="mt-4 bg-gray-50 rounded-xl p-3 text-xs md:text-sm text-gray-500">
            This is how the notification
            will appear to users.
          </div>
        </div>
      </div>
    </div>
  );
}