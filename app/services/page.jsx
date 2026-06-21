"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const router = useRouter();

const services = [
{
icon: "🕉️",
title: "Daily Darshan & Worship",
desc: "Experience divine blessings through daily darshan, prayers, and sacred rituals."
},
{
icon: "🔱",
title: "Rudrabhishek & Special Pujas",
desc: "Participate in special pujas, Rudrabhishek, and spiritual ceremonies."
},
{
icon: "🙏",
title: "Seva & Donations",
desc: "Support temple activities and community welfare through seva and donations."
},
{
icon: "🎓",
title: "Medha Scholarship",
desc: "Encouraging academic excellence through structured scholarship programs."
},
{
icon: "📖",
title: "Samvaad",
desc: "A platform for spiritual expression, devotional writings, and cultural reflections."
},
{
icon: "🏛️",
title: "Shivalaya Project",
desc: "Support the development of the proposed Shivalaya and future spiritual infrastructure."
},
{
icon: "🐄",
title: "Goshala Initiative",
desc: "Promoting cow protection, care, and Gau Seva through a dedicated Goshala."
},
{
icon: "🎉",
title: "Festivals & Events",
desc: "Celebrate sacred festivals and cultural traditions throughout the year."
},
{
icon: "👨‍👩‍👧‍👦",
title: "Devotee Membership",
desc: "Become a member and stay connected with temple activities and updates."
}
];

return ( <main className="min-h-screen bg-gradient-to-b from-[#f2e6ff] via-white to-[#f8f0ff]">

```
  {/* Back Button */}
  <button
    onClick={() => router.back()}
    className="
      fixed top-3 left-3
      sm:top-6 sm:left-6
      z-50

      bg-white/90
      backdrop-blur-md

      px-3 py-2
      sm:px-5 sm:py-2

      rounded-full
      shadow-md

      text-sm sm:text-base
      text-purple-700
      font-medium

      hover:bg-white
      transition
    "
  >
    ← Back
  </button>

  {/* Hero */}
 {/* Hero */}
<section className="pt-24 md:pt-32 pb-14 md:pb-20 px-4 text-center">

  <div className="max-w-5xl mx-auto">

    <h1
      className="
        text-3xl
        sm:text-5xl
        md:text-6xl
        font-bold
        text-purple-800
        leading-tight
      "
    >
      Our Divine Services
    </h1>

    <div className="w-20 h-1 bg-purple-400 mx-auto rounded-full mt-5 md:mt-6 mb-5 md:mb-6"></div>

    <p
      className="
        max-w-3xl
        mx-auto
        text-gray-600
        text-sm
        sm:text-base
        md:text-lg
        leading-7
      "
    >
      Serving devotees through worship, education,
      seva, culture, and community welfare at
      Shri Chandreshwar Dham.
    </p>

    {/* Chips */}
    <div className="mt-8 flex flex-wrap justify-center gap-3">

      <div className="bg-white border border-purple-100 shadow-md px-4 py-2 rounded-full text-sm font-medium text-purple-700">
        🛕 9+ Services
      </div>

      <div className="bg-white border border-purple-100 shadow-md px-4 py-2 rounded-full text-sm font-medium text-purple-700">
        🙏 Daily Seva
      </div>

      <div className="bg-white border border-purple-100 shadow-md px-4 py-2 rounded-full text-sm font-medium text-purple-700">
        🎓 Scholarship Program
      </div>

    </div>

  </div>

</section>

  {/* Services */}
  <section className="pb-20 px-4 sm:px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
      {services.map((service, index) => (
        <motion.div
  key={index}
  whileHover={{ y: -8 }}
  className="
    bg-white
    rounded-3xl
    p-5 md:p-7

    border border-purple-100

    shadow-md
    hover:shadow-2xl
    hover:border-purple-300

    transition-all
    duration-300
    group
  "
>

  {/* Icon */}
  <div
    className="
      w-16 h-16 md:w-20 md:h-20
      rounded-2xl
      bg-purple-50
      flex items-center justify-center
      text-4xl md:text-5xl
      mb-5
      group-hover:scale-110
      transition
    "
  >
    {service.icon}
  </div>

  {/* Title */}
  <h3
    className="
      text-lg md:text-xl
      font-semibold
      text-purple-800
      mb-3
      leading-snug
    "
  >
    {service.title}
  </h3>

  {/* Description */}
  <p
    className="
      text-sm md:text-base
      text-gray-600
      leading-7
    "
  >
    {service.desc}
  </p>

  {/* Bottom Line */}
  <div
    className="
      mt-5
      h-1
      w-12
      bg-purple-300
      rounded-full
      group-hover:w-20
      transition-all
    "
  />
</motion.div>
      ))}

    </div>
  </section>

  {/* CTA */}
 <section className="pb-16 md:pb-20 px-4 sm:px-6">
   <div
  className="
    max-w-5xl
    mx-auto

    rounded-[24px]
    md:rounded-[32px]

        bg-gradient-to-r
        from-purple-600
        to-purple-400

        rounded-[32px]

        p-8
        sm:p-12

        text-center
        text-white
      "
    >
      <h2 className="text-2xl md:text-4xl font-semibold mb-4 leading-tight">
        Join Us in Service & Devotion
      </h2>

      <p className="max-w-2xl mx-auto mb-8 text-white/90">
        Become part of Shri Chandreshwar Dham and help us
        spread spirituality, education, and community welfare.
      </p>

    <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => router.push("/DevoteeCorner/login")}
        className="
  w-full sm:w-auto

  bg-white
  text-purple-700

  px-8 py-3
  rounded-full

  font-semibold

  hover:scale-105
  transition
"
        >
          Become a Devotee
        </button>

        <button
          onClick={() => router.push("/donation")}
         className="
  w-full sm:w-auto

  border border-white

  px-8 py-3
  rounded-full

  font-semibold

  hover:bg-white
  hover:text-purple-700

  transition
"
        >
          Donate Now
        </button>
      </div>
    </div>
  </section>

</main>

);
}
