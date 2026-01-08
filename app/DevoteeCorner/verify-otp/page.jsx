"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

/* ---------------- OTP CONTENT ---------------- */
function VerifyOtpContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const phone = searchParams.get("phone") || "";
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, otp }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("OTP verified, login successful!");
        router.push("/dashboard");
      } else {
        alert(data.message || "Invalid OTP");
      }
    } catch (err) {
      console.error(err);
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
          🔐 Verify OTP
        </h2>

        <p className="text-center text-gray-600 mb-4">
          OTP sent to <span className="font-semibold">{phone}</span>
        </p>

        <form onSubmit={handleVerify} className="space-y-5">
          <input
            type="text"
            required
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-purple-200
                       focus:ring-2 focus:ring-purple-400 outline-none
                       tracking-widest text-center"
            placeholder="● ● ● ● ● ●"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-purple-600 to-purple-700
                        text-white py-3 rounded-lg font-semibold shadow-lg
                        hover:shadow-xl transition
                        ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {loading ? "Verifying..." : "Verify & Continue"}
          </button>
        </form>

        <button
          onClick={() => router.push("/DevoteeCorner/login-mobile")}
          className="text-purple-700 font-medium hover:underline block text-center mt-4"
        >
          ← Change Number
        </button>
      </motion.div>
    </section>
  );
}

/* ---------------- PAGE EXPORT ---------------- */
export default function VerifyOtpPage() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading OTP…</p>}>
      <VerifyOtpContent />
    </Suspense>
  );
}
