"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaGoogle, FaMobileAlt, FaEnvelope } from "react-icons/fa";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200/40 via-purple-50 to-white relative overflow-hidden">

      {/* Soft Background Blurs */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-purple-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-300/30 blur-3xl rounded-full"></div>

      {/* Sign Up Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/60 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-md border border-white/20 z-10"
      >
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-8 tracking-wide">
          Create Your Account 🙏
        </h2>

        <div className="space-y-5">

          {/* SIGN UP WITH MOBILE */}
          <button
            onClick={() => router.push("/DevoteeCorner/register-mobile")}
            className="w-full flex items-center justify-center gap-3 border border-purple-400 text-purple-700 py-3 rounded-xl bg-white/70 hover:bg-purple-100 transition-all shadow-sm hover:shadow-lg"
          >
            <FaMobileAlt className="text-lg" />
            Sign Up with Mobile (OTP)
          </button>

          {/* SIGN UP WITH GOOGLE */}
          <button
            onClick={() => alert("➡ Google SignUp implement karenge")}
            className="w-full flex items-center justify-center gap-3 border border-purple-400 text-purple-700 py-3 rounded-xl bg-white/70 hover:bg-purple-100 transition-all shadow-sm hover:shadow-lg"
          >
            <FaGoogle className="text-lg" />
            Continue with Google
          </button>

          {/* SIGN UP WITH EMAIL / PASSWORD */}
          <button
            onClick={() => router.push("/DevoteeCorner/register-email")}
            className="w-full flex items-center justify-center gap-3 border border-purple-400 text-purple-700 py-3 rounded-xl bg-white/70 hover:bg-purple-100 transition-all shadow-sm hover:shadow-lg"
          >
            <FaEnvelope className="text-lg" />
            Sign Up with Email & Password
          </button>
        </div>

        {/* Already account */}
        <p className="text-center text-gray-700 mt-6">
          Already have an account?{" "}
          <button
            onClick={() => router.push("/DevoteeCorner/login")}
            className="text-purple-700 font-semibold hover:underline"
          >
            Login
          </button>
        </p>

        {/* Back */}
        <button
          onClick={() => router.push("/")}
          className="mt-4 w-full text-purple-700 hover:underline font-medium"
        >
          ← Back to Website
        </button>
      </motion.div>
    </section>
  );
}
