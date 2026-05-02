"use client";
import { useEffect, useState } from "react";

export default function AdminSettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [settings, setSettings] = useState({
    templeName: "",
    email: "",
    phone: "",
    donationEnabled: true,
    notificationsEnabled: true,
    darkMode: false,
    theme: "purple",
    footerText: "",
  });

  /* =====================================
     FETCH SETTINGS
  ===================================== */
  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch("/api/admin/settings");
      const data = await res.json();

      if (data.success) {
        const s = data.settings;

        setSettings({
          templeName: s.temple_name || "",
          email: s.email || "",
          phone: s.phone || "",
          donationEnabled: s.donation_enabled,
          notificationsEnabled: s.notifications_enabled,
          darkMode: s.dark_mode,
          theme: s.theme || "purple",
          footerText: s.footer_text || "",
        });
      }
    } catch (err) {
      console.error("Fetch settings failed:", err);
    } finally {
      setLoading(false);
    }
  };

  /* =====================================
     HANDLE INPUT CHANGE
  ===================================== */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  /* =====================================
     SAVE SETTINGS
  ===================================== */
  const handleSave = async () => {
  try {
    setSaving(true);

    const res = await fetch("/api/admin/settings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(settings),
    });

    const text = await res.text();

    let data = {};

    try {
      data = JSON.parse(text);
    } catch {
      console.error("Invalid JSON Response:", text);
      alert("API response invalid");
      return;
    }

    if (data.success) {
      alert("Settings Saved ✅");
    } else {
      alert(data.message || "Save failed");
    }

  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  } finally {
    setSaving(false);
  }
};
  if (loading) {
    return (
      <p className="text-purple-700 animate-pulse">
        Loading settings...
      </p>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-purple-700">
          ⚙️ Admin Settings
        </h1>

        <p className="text-gray-600 mt-1">
          Manage website settings, payments & notifications
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">

        {/* =====================================
            GENERAL SETTINGS
        ===================================== */}
        <section>
          <h2 className="text-xl font-semibold text-purple-700 mb-4">
            🏛 General Settings
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              name="templeName"
              value={settings.templeName}
              onChange={handleChange}
              placeholder="Temple Name"
              className="border border-gray-300 px-4 py-3 rounded-xl
                         text-gray-800 placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              placeholder="Admin Email"
              className="border border-gray-300 px-4 py-3 rounded-xl
                         text-gray-800 placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="text"
              name="phone"
              value={settings.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border border-gray-300 px-4 py-3 rounded-xl
                         text-gray-800 placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="text"
              name="footerText"
              value={settings.footerText}
              onChange={handleChange}
              placeholder="Footer Text"
              className="border border-gray-300 px-4 py-3 rounded-xl
                         text-gray-800 placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

          </div>
        </section>

        {/* =====================================
            FEATURE TOGGLES
        ===================================== */}
        <section>
          <h2 className="text-xl font-semibold text-purple-700 mb-4">
            🔔 Features
          </h2>

          <div className="space-y-4">

            <label className="flex justify-between items-center border border-gray-300 p-4 rounded-xl">
              <span className="text-gray-700 font-medium">
                Enable Donations
              </span>

              <input
                type="checkbox"
                name="donationEnabled"
                checked={settings.donationEnabled}
                onChange={handleChange}
                className="w-5 h-5 accent-purple-600"
              />
            </label>

            <label className="flex justify-between items-center border border-gray-300 p-4 rounded-xl">
              <span className="text-gray-700 font-medium">
                Enable Notifications
              </span>

              <input
                type="checkbox"
                name="notificationsEnabled"
                checked={settings.notificationsEnabled}
                onChange={handleChange}
                className="w-5 h-5 accent-purple-600"
              />
            </label>

            <label className="flex justify-between items-center border border-gray-300 p-4 rounded-xl">
              <span className="text-gray-700 font-medium">
                Dark Mode
              </span>

              <input
                type="checkbox"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleChange}
                className="w-5 h-5 accent-purple-600"
              />
            </label>

          </div>
        </section>

        {/* =====================================
            THEME SETTINGS
        ===================================== */}
        <section>
          <h2 className="text-xl font-semibold text-purple-700 mb-4">
            🎨 Theme Settings
          </h2>

          <select
            name="theme"
            value={settings.theme}
            onChange={handleChange}
            className="w-full md:w-1/2 border border-gray-300 px-4 py-3 rounded-xl
                       text-gray-800 bg-white
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="purple">Purple</option>
            <option value="gold">Gold</option>
            <option value="orange">Orange</option>
            <option value="blue">Blue</option>
          </select>
        </section>

        {/* =====================================
            SAVE BUTTON
        ===================================== */}
        <div>
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-gradient-to-r from-purple-600 to-fuchsia-600
                       text-white font-semibold px-8 py-3 rounded-xl
                       hover:scale-[1.02] transition disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Settings"}
          </button>
        </div>

      </div>
    </div>
  );
}