"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function RegisterMobile() {
  const router = useRouter();
  const [form, setForm] = useState({ phone: "" });
  const [loading, setLoading] = useState(false);

  const sendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-otp-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("OTP Sent!");
        router.push(`/DevoteeCorner/register-otp?phone=${form.phone}`);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Server Error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200/40 via-purple-50 to-white relative overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/60 backdrop-blur-xl p-10 rounded-3xl shadow-xl w-full max-w-md border border-white/20"
      >
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-6">
          Sign Up with Mobile 📱
        </h2>

        <form onSubmit={sendOTP} className="space-y-5">
          <input
            type="tel"
            maxLength={10}
            placeholder="Enter Mobile Number"
            className="w-full p-3 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-400"
            value={form.phone}
            onChange={(e) => setForm({ phone: e.target.value })}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-800 transition-all"
          >
            {loading ? "Sending OTP..." : "Send OTP"}
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
