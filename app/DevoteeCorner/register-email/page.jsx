"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function RegisterEmail() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/register-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Registration successful!");
        router.push("/DevoteeCorner/login");
      } else {
        alert(data.message || "Registration failed!");
      }
    } catch (err) {
      console.error(err);
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200/40 via-purple-50 to-white relative overflow-hidden">
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-300/30 blur-3xl rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/60 backdrop-blur-xl p-10 rounded-3xl shadow-xl w-full max-w-md border border-white/20 z-20"
      >
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-8">
          Sign Up with Email 📧
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-400"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-400"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-400"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-800 transition-all"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <button
          onClick={() => router.push("/DevoteeCorner/register")}
          className="w-full text-purple-700 hover:underline mt-4 text-sm"
        >
          ← Back to Signup Options
        </button>
      </motion.div>
    </section>
  );
}
