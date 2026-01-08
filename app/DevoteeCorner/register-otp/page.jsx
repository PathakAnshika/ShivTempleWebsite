"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RegisterOTP() {
  const router = useRouter();
  const params = useSearchParams();
  const phone = params.get("phone");

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const verifyOTP = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/verify-otp-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, otp }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Account Created Successfully!");
        localStorage.setItem("user", JSON.stringify(data.user));
        router.push("/dashboard");
      } else {
        alert(data.message || "Invalid OTP!");
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
          Verify OTP 🔐
        </h2>

        <form onSubmit={verifyOTP} className="space-y-5">

          <input
            type="text"
            maxLength={6}
            placeholder={`OTP sent to ${phone}`}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-3 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-400"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-800"
          >
            {loading ? "Verifying..." : "Verify & Create Account"}
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
