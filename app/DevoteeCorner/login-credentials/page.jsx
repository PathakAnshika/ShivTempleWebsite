"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoginWithCredentials() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/login-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        // ✅ user ko localStorage me store
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Login successful!");
        router.push("/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-lavender-50 to-white relative overflow-hidden">
      <div className="absolute top-10 left-10 w-48 h-48 bg-purple-200/40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-300/40 blur-3xl rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-xl w-full max-w-md z-10"
      >
        <h2 className="text-2xl font-bold text-center text-purple-900 mb-6">
          Login with Email
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-purple-700 mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-purple-700 mb-2 font-medium">
              Password
            </label>
            <input
              type="password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <button
          onClick={() => router.push("/DevoteeCorner/login")}
          className="text-purple-700 font-medium hover:underline block text-center mt-4"
        >
          ← Back
        </button>
      </motion.div>
    </section>
  );
}
