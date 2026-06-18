"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export function StayInTouchSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#faf6ff] via-white to-[#f3ecff] text-center overflow-hidden">
      
      {/* 🔮 Soft Aura Backgrounds */}
     <div className="absolute top-10 left-4 sm:left-16 w-32 h-32 sm:w-52 sm:h-52 bg-purple-300/30 blur-3xl rounded-full"></div>
     <div className="absolute bottom-10 right-2 sm:right-10 w-40 h-40 sm:w-72 sm:h-72 bg-pink-300/20 blur-3xl rounded-full"></div>

      {/* ✨ Header */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
  text-3xl
  sm:text-4xl
  md:text-5xl
  font-extrabold
  text-purple-800
  tracking-wide
  mb-3 sm:mb-4
  drop-shadow-sm
"
      >
        Stay in Touch 💜
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="
  text-gray-700
  text-base sm:text-lg
  max-w-xl
  mx-auto
  mb-10 sm:mb-16
  leading-7 sm:leading-relaxed
  px-4
"
      >
        Connect with us online and stay updated with divine events, temple festivals, 
        and spiritual activities.
      </motion.p>

      {/* 🌐 Social Links */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-10 px-4"
      >
        {[
          { icon: <FaFacebook />, color: "text-blue-600", bg: "hover:bg-blue-100" },
          { icon: <FaInstagram />, color: "text-pink-600", bg: "hover:bg-pink-100" },
          { icon: <FaYoutube />, color: "text-red-600", bg: "hover:bg-red-100" },
          {
    icon: <FaWhatsapp />,
    color: "text-green-600",
    bg: "hover:bg-green-100",
  },
          { icon: <FaEnvelope />, color: "text-yellow-500", bg: "hover:bg-yellow-100" },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 200 }}
           className={`
  bg-white/80
  backdrop-blur-xl
  shadow-md
  hover:shadow-2xl
  p-4 sm:p-6
  rounded-2xl
  border border-purple-100
  ${item.bg}
  cursor-pointer
  transition-all
`}
          >
          <div className={`text-3xl sm:text-4xl ${item.color}`}>
  {item.icon}
</div>
          </motion.div>
        ))}
      </motion.div>

      {/* 🌺 Footer */}
     <motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.6, duration: 1 }}
  className="
    text-gray-500
    mt-10 sm:mt-16
    text-xs sm:text-sm
    px-4
    leading-6
  "
>
  © {new Date().getFullYear()} Sri Chandreshwar Dham Mandir • All Rights Reserved
</motion.p>
    </section>
  );
}
