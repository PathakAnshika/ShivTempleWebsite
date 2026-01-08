"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HomeDonationSection() {
  const router = useRouter();

  // Safe redirect function (Fix for Turbopack)
  // const goToDonatePage = () => {
  //   setTimeout(() => {
  //     router.push("/donation");
  //   }, 50);
  // };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f6e7ff] via-[#fff0f9] to-white py-28">

      {/* Background Grid */}
      <div className="absolute inset-0 flex justify-center items-center opacity-60 pointer-events-none">
        <div className="grid grid-cols-6 md:grid-cols-10 gap-4 md:gap-6">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className={`w-10 h-10 md:w-14 md:h-14 rounded-[35%] ${
                i % 3 === 0
                  ? "bg-[#8750a6]"
                  : i % 2 === 0
                  ? "bg-gray-100"
                  : "bg-[#d8bfd8]"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl px-8 md:px-16 py-12 md:py-16 max-w-3xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold text-[#3b0064]"
          >
            Join Thousands of Happy Donors
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-5 text-lg md:text-xl text-[#5b507a]"
          >
            Be part of our growing community of kind-hearted supporters whose generosity
            keeps the divine seva alive.
          </motion.p>

          {/* BUTTON — Redirect to Donate Page */}
       <motion.button
  onClick={() => {
    console.log("Redirecting to donate page...");
    router.push("/donation");
  }}
  className="mt-8 px-8 py-3 bg-purple-700 text-white rounded-full"
>
  Become a Donor
</motion.button>

        </motion.div>
      </div>
    </section>
  );
}
