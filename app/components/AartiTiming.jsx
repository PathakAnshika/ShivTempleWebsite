"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaFire, FaSun, FaMoon } from "react-icons/fa";

export function AartiTiming() {
  return (
   <section
  id="darshan-timings"
  className="relative py-24 bg-gradient-to-b from-[#faf5ff] via-[#f6f0ff] to-[#fff] overflow-hidden"
>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* 🕯 Aarti Timings */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-purple-100"
        >
          <h2 className="text-4xl font-bold text-purple-800 mb-6 font-[Satisfy] text-center">
            🕯 Aarti Timings
          </h2>

          <ul className="space-y-6 text-lg text-gray-700 font-[Patrick_Hand]">
            <li className="flex items-center justify-between border-b pb-2 border-purple-100">
              <div className="flex items-center gap-3">
                <FaSun className="text-orange-500 text-2xl animate-pulse" />
                <span>Morning Aarti</span>
              </div>
              <span className="font-semibold text-purple-700">6:30 AM</span>
            </li>
            <li className="flex items-center justify-between border-b pb-2 border-purple-100">
              <div className="flex items-center gap-3">
                <FaMoon className="text-indigo-500 text-2xl animate-pulse" />
                <span>Evening Aarti</span>
              </div>
              <span className="font-semibold text-purple-700">7:00 PM</span>
            </li>
            <li className="flex items-center justify-between border-b pb-2 border-purple-100">
              <div className="flex items-center gap-3">
                <FaFire className="text-red-500 text-2xl animate-pulse" />
                <span>Special Aarti (Every Monday)</span>
              </div>
              <span className="font-semibold text-purple-700">8:30 PM</span>
            </li>
          </ul>
        </motion.div>

        {/* 🛕 Temple Darshan Timings */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-purple-100"
        >
          <h2 className="text-4xl font-bold text-purple-800 mb-6 font-[Satisfy] text-center">
            🕉 Temple Darshan Timings
          </h2>

          <div className="text-lg text-gray-700 space-y-4 font-[Patrick_Hand]">
            <div className="flex justify-between border-b pb-2 border-purple-100">
              <span>Temple Opens At</span>
              <span className="font-semibold text-purple-700">6 : 00 AM</span>
            </div>
            <div className="flex justify-between border-b pb-2 border-purple-100">
              <span>Afternoon Break</span>
              <span className="font-semibold text-purple-700">12:00 PM – 3:00 PM</span>
            </div>
            <div className="flex justify-between border-b pb-2 border-purple-100">
              <span>Temple Closes At</span>
              <span className="font-semibold text-purple-700">9:00 PM</span>
            </div>
          </div>

          {/* Floating clock icon */}
          <FaClock className="absolute -top-4 -right-4 text-purple-600 text-6xl animate-pulse opacity-20" />
        </motion.div>
      </div>

      {/* 🌅 Background Image */}
      <img
        src="/images/12.jpeg"
        alt="Temple Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 -z-10"
      />
    </section>
  );
}

