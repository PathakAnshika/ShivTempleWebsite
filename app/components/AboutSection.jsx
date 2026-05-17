"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function AboutSection() {
  const router = useRouter();

  return (
    <section className="py-24 bg-[#f8f5ef] overflow-hidden">

      <div className="
        max-w-7xl mx-auto
        px-6
        grid lg:grid-cols-2
        gap-16
        items-center
      ">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >

          {/* Small Label */}
          <p className="
            uppercase tracking-[5px]
            text-orange-600
            text-sm font-semibold
            mb-5
          ">
            About The Temple
          </p>

          {/* Heading */}
          <h2 className="
            text-4xl md:text-6xl
            font-bold
            text-gray-900
            leading-tight
            mb-8
          ">
            A Place Where
            <span className="block text-orange-600">
              Faith Finds Peace
            </span>
          </h2>

          {/* Paragraph */}
          <p className="
            text-gray-600
            text-lg
            leading-9
            max-w-xl
            mb-10
          ">
            Shri Chandreshwar Dham welcomes devotees
            into a divine atmosphere of spirituality,
            devotion and inner peace — preserving
            Sanatan traditions while inspiring
            humanity through faith, culture and service.
          </p>

          {/* Features */}
          <div className="
            flex flex-wrap
            gap-4
            mb-10
          ">

            <div className="
              bg-white
              px-5 py-3
              rounded-full
              shadow-md
              border border-orange-100
              text-gray-700
              font-medium
            ">
              🕉️ Spirituality
            </div>

            <div className="
              bg-white
              px-5 py-3
              rounded-full
              shadow-md
              border border-orange-100
              text-gray-700
              font-medium
            ">
              🌸 Devotion
            </div>

            <div className="
              bg-white
              px-5 py-3
              rounded-full
              shadow-md
              border border-orange-100
              text-gray-700
              font-medium
            ">
              🔱 Culture
            </div>

          </div>

          {/* Button */}
          <button
            onClick={() => router.push("/about")}
            className="
              px-8 py-4
              bg-orange-500
              text-white
              rounded-full
              shadow-xl
              hover:bg-orange-600
              hover:scale-105
              transition-all duration-300
              font-semibold
            "
          >
            Discover Our Journey →
          </button>

        </motion.div>

        {/* RIGHT IMAGES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative h-[650px]"
        >

          {/* Main Image */}
          <div className="
            absolute top-0 right-0
            w-[85%]
            h-[500px]
            rounded-[35px]
            overflow-hidden
            shadow-2xl
          ">

            <img
              src="/images/bells.jpg"
              alt="Temple"
              className="
                w-full h-full
                object-cover
              "
            />

          </div>

          {/* Small Floating Image */}
          <div className="
            absolute bottom-0 left-0
            w-[55%]
            h-[260px]
            rounded-[30px]
            overflow-hidden
            shadow-2xl
            border-[10px] border-[#f8f5ef]
          ">

            <img
              src="/images/Rudraksh.jpg"
              alt="Mahadev"
              className="
                w-full h-full
                object-cover
              "
            />

          </div>

          {/* Floating Card */}
          <div className="
            absolute top-10 left-0
            bg-white
            rounded-3xl
            shadow-xl
            px-8 py-6
            border border-orange-100
          ">

            <p className="
              text-orange-600
              uppercase
              tracking-[3px]
              text-xs
              font-semibold
              mb-2
            ">
              Sacred Legacy
            </p>

            <h3 className="
              text-2xl
              font-bold
              text-gray-800
              mb-2
            ">
              Shri Chandreshwar Dham
            </h3>

            <p className="
              text-sm
              text-gray-600
              leading-6
            ">
              Established with devotion,
              service and spiritual awakening.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}