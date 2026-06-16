"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function AboutSection() {
  const router = useRouter();

  return (
   <section className="py-16 md:py-24 bg-[#f8f5ef] overflow-hidden">
     <div className="
  max-w-7xl mx-auto
  px-4 sm:px-6
  grid lg:grid-cols-2
  gap-12 lg:gap-16
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
<p
  className="
    text-gray-600
    text-base sm:text-lg
    leading-7 sm:leading-9
    max-w-xl
    mb-8 sm:mb-10
  "
>
  Shri Chandreshwar Dham welcomes devotees
  into a divine atmosphere of spirituality,
  devotion and inner peace — preserving
  Sanatan traditions while inspiring
  humanity through faith, culture and service.
</p>

         {/* Features */}
<div className="flex flex-wrap gap-2 sm:gap-4 mb-8">

  <div
    className="
      bg-white
      px-3 py-2
      sm:px-5 sm:py-3
      rounded-full
      shadow-md
      border border-orange-100
      text-xs sm:text-base
      text-gray-700
      font-medium
    "
  >
    🕉️ Spirituality
  </div>

  <div
    className="
      bg-white
      px-3 py-2
      sm:px-5 sm:py-3
      rounded-full
      shadow-md
      border border-orange-100
      text-xs sm:text-base
      text-gray-700
      font-medium
    "
  >
    🌸 Devotion
  </div>

  <div
    className="
      bg-white
      px-3 py-2
      sm:px-5 sm:py-3
      rounded-full
      shadow-md
      border border-orange-100
      text-xs sm:text-base
      text-gray-700
      font-medium
    "
  >
    🔱 Culture
  </div>

</div>

      <div className="hidden lg:block">
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
</div>
 </motion.div>
        {/* RIGHT IMAGES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
         className="
  relative
  order-1 lg:order-2
  h-[420px]
  sm:h-[500px]
  lg:h-[650px]
"
        >

          {/* Main Image */}
          <div className="
            absolute top-0 right-0
           w-[85%]
w-[85%]
h-[300px]
sm:h-[385px]
lg:h-[515px]
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
         <div
  className="
    absolute bottom-0 left-0
    w-[58%]
    h-[200px]
    sm:h-[240px]
    lg:h-[260px]
    rounded-[20px]
    sm:rounded-[25px]
    lg:rounded-[30px]
    overflow-hidden
    shadow-2xl
    border-[6px]
    sm:border-[8px]
    lg:border-[10px]
    border-[#f8f5ef]
  "
>
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
         <div
  className="
    absolute
    top-3 left-2
    sm:top-6 sm:left-0
    bg-white
    rounded-2xl
    shadow-lg
    px-4 py-3
    sm:px-5 sm:py-4
    border border-orange-100
    max-w-[200px]
    sm:max-w-[260px]
  "
>

           <p
  className="
    text-orange-600
    uppercase
    tracking-[2px]
    text-[10px] sm:text-xs
    font-semibold
    mb-1
  "
>
  Sacred Legacy
</p>

<h3
  className="
    text-base sm:text-xl lg:text-2xl
    font-bold
    text-gray-800
    mb-1
    leading-tight
  "
>
  Shri Chandreshwar Dham
</h3>

<p
  className="
    text-[11px] sm:text-sm
    text-gray-600
    leading-4 sm:leading-6
  "
>
  Established with devotion,
  service and spiritual awakening.
</p>

          </div>
          

        </motion.div>
<div className="lg:hidden mt-8 flex justify-center">
  <button
    onClick={() => router.push("/about")}
    className="
      w-full max-w-sm
      px-7 py-3.5
      bg-orange-500
      text-white
      rounded-full
      shadow-xl
      hover:bg-orange-600
      transition-all duration-300
      font-semibold
    "
  >
    Discover Our Journey →
  </button>
</div>
      </div>

    </section>
  );
}