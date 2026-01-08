"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function AboutSection() {
  const router = useRouter();

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-50 via-white to-purple-100 overflow-hidden">
      
      <div className="
        max-w-6xl mx-auto
        grid grid-cols-1 md:grid-cols-2
        gap-12 md:gap-10
        items-center
        px-5 sm:px-6
      ">

        {/* LEFT: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-5 sm:space-y-6 text-center md:text-left"
        >
          <h2 className="
            text-2xl sm:text-3xl md:text-5xl
            font-bold text-purple-900 leading-tight
          ">
            Discover The Divine <br />
            <span className="text-purple-600">
              Shiv Mandir Experience
            </span>
          </h2>

          <p className="
            text-gray-700
            text-sm sm:text-base md:text-lg
            leading-relaxed
          ">
            A sacred place where spirituality meets peace.
            Our temple stands as a symbol of devotion, positive energy and
            divine blessings of Lord Shiva.
          </p>

          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => router.push("/about")}
              className="
                mt-3
                px-8 py-3
                bg-purple-700 text-white
                rounded-full
                shadow-lg
                hover:bg-purple-800
                hover:scale-105
                active:scale-95
                transition-all
              "
            >
              Read Full Story →
            </button>
          </div>
        </motion.div>

        {/* RIGHT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center md:justify-end"
        >
          <img
            src="/images/havankund.jpg"
            alt="Temple"
            className="
              rounded-3xl shadow-2xl
              w-full sm:w-[85%] md:w-[90%]
              h-[260px] sm:h-[320px] md:h-[380px]
              object-cover
              border-4 border-white
              group-hover:scale-105
              transition-all duration-700
            "
          />

          {/* Soft glow */}
          <div className="absolute inset-0 rounded-3xl bg-purple-200/10 blur-xl"></div>
        </motion.div>

      </div>
    </section>
  );
}
