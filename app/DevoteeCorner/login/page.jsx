"use client";

import { FaGoogle, FaMobileAlt, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300/20 via-purple-100/40 to-white relative overflow-hidden">

      {/* Soft Floating Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300/30 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300/30 blur-[120px] rounded-full animate-pulse"></div>

      {/* LOGIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/50 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-white/30 w-full max-w-lg z-10"
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-center text-purple-900 mb-8 tracking-wide"
        >
          Welcome Back, Devotee 🙏
        </motion.h2>

        <div className="space-y-6">

          {/* LOGIN WITH MOBILE */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push("/DevoteeCorner/login-mobile")}
            className="w-full flex items-center justify-center gap-3 border border-purple-400 text-purple-700 py-3 rounded-2xl hover:bg-purple-100 transition-all shadow-sm"
          >
            <FaMobileAlt className="text-lg" />
            Login with Mobile (OTP)
          </motion.button>

          {/* LOGIN WITH GOOGLE */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => alert("Google OAuth Add karenge")}
            className="w-full flex items-center justify-center gap-3 border border-purple-400 text-purple-700 py-3 rounded-2xl hover:bg-purple-100 transition-all shadow-sm"
          >
            <FaGoogle className="text-lg" />
            Continue with Google
          </motion.button>

          {/* LOGIN WITH EMAIL/PASSWORD */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push("/DevoteeCorner/login-credentials")}
            className="w-full flex items-center justify-center gap-3 border border-purple-400 text-purple-700 py-3 rounded-2xl hover:bg-purple-100 transition-all shadow-sm"
          >
            <FaUser className="text-lg" />
            Login with Email & Password
          </motion.button>
        </div>

        {/* Sign Up */}
        <p className="text-center text-gray-700 mt-6">
          Don’t have an account?{" "}
          <Link
            href="/DevoteeCorner/register"
            className="text-purple-700 font-semibold hover:underline"
          >
            Create Account
          </Link>
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
