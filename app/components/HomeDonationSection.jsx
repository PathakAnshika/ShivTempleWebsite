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
  <section className="relative overflow-hidden bg-gradient-to-br from-[#f6e7ff] via-[#fff0f9] to-white py-20 sm:py-24 md:py-28">
      {/* Background Grid */}
      <div className="absolute inset-0 flex justify-center items-center opacity-60 pointer-events-none">
       <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 gap-2 sm:gap-4 md:gap-6">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className={`w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-[35%] ${
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
       className="
  bg-white
  rounded-3xl
  shadow-2xl
  px-5 sm:px-8 md:px-16
  py-8 sm:py-10 md:py-16
  w-full
  max-w-md
  mx-auto
"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
           className="
  text-2xl
  sm:text-3xl
  md:text-5xl
  font-semibold
  text-[#3b0064]
  leading-tight
"
          >
            Join Thousands of Happy Donors
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
           className="
  mt-4
  text-sm
  sm:text-base
  md:text-xl
  text-[#5b507a]
  leading-8
  max-w-[280px]
  sm:max-w-none
  mx-auto
"
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
 className="
  mt-6
  w-full
  max-w-[260px]
  mx-auto
  py-3
  text-sm
  sm:text-base
  bg-purple-700
  text-white
  rounded-full
  font-medium
"
>
  Become a Donor
</motion.button>

        </motion.div>
      </div>
    </section>
  );
}
