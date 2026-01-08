"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const router = useRouter(); // ✅ router yahin

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <img
        src="/images/shiv.jpeg"
        alt="Shiv Mandir"
        className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-5 max-w-4xl"
      >
        <p className="text-xs sm:text-sm tracking-widest uppercase text-gray-200 mb-3">
          ॐ नमः शिवाय
        </p>

        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4">
          Divine Presence of <span className="text-yellow-400">Mahadev</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-8">
          Experience peace, devotion, and spiritual awakening at our sacred
          Shiv Mandir — a place where faith and divine energy unite.
        </p>

        {/* Buttons with PATH */}
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center items-center mt-8">

  {/* Darshan Timings Button */}
  <button
    onClick={() =>
      document
        .getElementById("darshan-timings")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    className="
      group w-full sm:w-auto
      px-10 py-4
      bg-gradient-to-r from-yellow-300 to-yellow-500
      text-purple-900 font-bold text-lg
      rounded-full shadow-xl
      hover:shadow-yellow-400/40 hover:scale-105
      active:scale-95 transition-all
      flex items-center justify-center gap-2
    "
  >
    Darshan Timings
    <span className="transition-transform group-hover:translate-x-1">→</span>
  </button>

  {/* Membership Button */}
  <button
    onClick={() =>
      document
        .getElementById("membership")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    className="
      group w-full sm:w-auto
      px-10 py-4
      bg-white/10 backdrop-blur-md
      border border-white/30
      text-white font-bold text-lg
      rounded-full shadow-xl
      hover:bg-white hover:text-purple-900
      hover:scale-105 active:scale-95
      transition-all
      flex items-center justify-center gap-2
    "
  >
    Become a Family Member
    <span className="transition-transform group-hover:translate-x-1">→</span>
  </button>

</div>

      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
