"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoginWithMobile() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      const data = await res.json();

      if (data.success) {
        alert("OTP sent successfully!");
        router.push(`/DevoteeCorner/verify-otp?phone=${phone}`);
      } else {
        alert(data.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error(err);
      alert("Server error!");
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
          📱 Login Using OTP
        </h2>

        <form onSubmit={handleSendOtp} className="space-y-5">
          <div>
            <label className="block text-purple-700 mb-2 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              required
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Enter phone number"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending OTP..." : "Send OTP"}
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
