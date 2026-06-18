"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";

export function ScholarshipPreview() {
  const router = useRouter();

  return (
   <section
  id="scholarship"
  className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white via-purple-50 to-white"
>
      {/* soft glow background */}
      <div className="absolute top-[-80px] left-[-60px] w-72 h-72 bg-purple-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-80px] right-[-60px] w-80 h-80 bg-purple-300/40 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
         className="
  inline-flex items-center gap-2
  px-3 py-2
  sm:px-4
  rounded-full
  bg-purple-100
  text-purple-700
  text-xs sm:text-sm
  font-medium
"
>
          <Sparkles size={16} />
          Educational Initiative
        </motion.div>

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
  text-3xl
  sm:text-4xl
  md:text-5xl
  font-semibold
  text-purple-900
  mt-5 sm:mt-6
  leading-tight
"
        >
          Temple Scholarship Program
        </motion.h2>

        {/* accent line */}
       <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-300 to-purple-500 mx-auto mt-5 mb-8 sm:mb-10 rounded-full"></div>
        {/* description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
         className="
  text-gray-700
  text-base sm:text-lg
  leading-7 sm:leading-relaxed
  max-w-3xl
  mx-auto
"
        >
          Shri Chandreshwar Dham supports deserving and talented students through
          structured scholarship programs. This initiative reflects our commitment
          to education, spiritual growth, and community upliftment.
        </motion.p>

        {/* feature highlights */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-8 sm:mt-10 text-purple-800 font-medium">
          <span className="
  flex items-center gap-2
  bg-white
  px-3 py-2
  sm:px-4
  rounded-full
  shadow
  text-xs sm:text-base
">
            🎓 Merit-Based
          </span>
          <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
            📚 Education Support
          </span>
          <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
            🌍 Community Upliftment
          </span>
        </div>

        {/* button */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/scholarship")}
         className="
  mt-8 sm:mt-14
  w-full sm:w-auto
  max-w-[320px]
  px-6 sm:px-12
  py-3 sm:py-4
  text-sm sm:text-base
  bg-gradient-to-r from-purple-600 to-purple-800
  text-white
  font-semibold
  rounded-full
  shadow-xl
  hover:shadow-2xl
  transition
"
        >
          View Scholarship Details →
        </motion.button>

      </div>
    </section>
  );
}
