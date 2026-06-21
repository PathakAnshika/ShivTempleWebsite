"use client";

import { useRouter } from "next/navigation";
import {
  Clock,
  Sun,
  Moon,
  Bell,
  ArrowLeft,
} from "lucide-react";

export default function DarshanTimingsPage() {
  const router = useRouter();

  const darshanTimings = [
    {
      title: "Morning Darshan",
      time: "4:00 AM - 10:45 PM",
      icon: <Sun className="w-8 h-8 text-yellow-500" />,
      desc: "Begin your day with divine blessings and peaceful spiritual energy.",
    },

    {
      title: "Temple Break",
      time: "11:00 PM - 4:00 PM",
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      desc: "Temple remains closed for bhog rituals and maintenance.",
    },

    {
      title: "Evening Darshan",
      time: "7:00 PM - 11:00 PM",
      icon: <Moon className="w-8 h-8 text-purple-500" />,
      desc: "Experience the divine aura of evening prayers and aarti.",
    },
  ];

  const aartiSchedule = [
    {
      name: "Mangla Aarti",
      time: "4:00 AM – 6:00 AM",
      desc: "Early morning aarti filled with divine positivity.",
    },

    {
      name: "Dadyodak Aarti",
      time: "7:00 AM – 7:45 AM",
      desc: "Sacred Ball Bhog offering and morning rituals.",
    },

    {
      name: "Bhog Aarti",
      time: "10:00 AM – 10:45 AM",
      desc: "Midday bhog offering with devotional prayers.",
    },

    {
      name: "Sandhya Aarti",
      time: "7:00 PM – 7:45 PM",
      desc: "Evening aarti creating a peaceful spiritual atmosphere.",
    },

    {
      name: "Shayan Aarti",
      time: "10:30 PM – 11:00 PM",
      desc: "Night aarti before temple rest rituals.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-purple-50 overflow-hidden">

      {/* ===== HERO ===== */}
    {/* ===== HERO ===== */}
<section className="relative overflow-hidden">

  <button
    onClick={() => router.back()}
    className="
      fixed top-3 left-3 md:top-6 md:left-6
      z-50
      bg-white
      text-gray-800
      border border-gray-200
      px-3 md:px-5
      py-2
      rounded-full
      shadow-lg
      hover:scale-105
      transition-all
      flex items-center gap-2
      text-sm md:text-base
    "
  >
    <ArrowLeft className="w-4 h-4" />
    Back
  </button>

  <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">

    <div
      className="
        inline-flex items-center gap-2
        bg-orange-100 text-orange-700
        px-4 md:px-5 py-2
        rounded-full
        text-xs md:text-sm
        font-semibold
        mb-6
      "
    >
      <Bell className="w-4 h-4" />
      Temple Darshan Schedule
    </div>

    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
      Darshan <span className="text-orange-600">Timings</span>
    </h1>

    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mt-5 leading-7">
      Plan your spiritual visit to Shri Chandreshwar Dham
      and immerse yourself in divine peace, devotion,
      and sacred rituals.
    </p>

    {/* Premium Chips */}
    <div className="mt-8 flex flex-wrap justify-center gap-3">

      <div className="bg-white shadow-md px-4 py-2 rounded-full text-sm">
        🕉 Daily Darshan
      </div>

      <div className="bg-white shadow-md px-4 py-2 rounded-full text-sm">
        🔔 5 Aartis Daily
      </div>

      <div className="bg-white shadow-md px-4 py-2 rounded-full text-sm">
        🙏 Divine Blessings
      </div>

    </div>

  </div>
</section>

{/* ===== DARSHAN TIMINGS ===== */}
<section className="pb-20 md:pb-24 px-4 sm:px-6">

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">

    {darshanTimings.map((item, index) => (
      <div
        key={index}
        className="
          bg-white
          rounded-3xl
          p-5 md:p-8
          border border-orange-100
          shadow-lg
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all duration-500
          group
        "
      >

        <div
          className="
            w-14 h-14 md:w-16 md:h-16
            rounded-2xl
            bg-orange-50
            flex items-center justify-center
            mb-5
            group-hover:scale-110
            transition
          "
        >
          {item.icon}
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
          {item.title}
        </h2>

        <div
          className="
            inline-block
            bg-orange-100
            text-orange-700
            px-4 py-2
            rounded-full
            text-xs md:text-sm
            font-semibold
            mb-4
          "
        >
          {item.time}
        </div>

        <p className="text-gray-600 leading-7 text-sm md:text-base">
          {item.desc}
        </p>

      </div>
    ))}

  </div>

</section>

    

   {/* ===== AARTI SECTION ===== */}
<section className="pb-20 md:pb-24 px-4 sm:px-6">

  <div
    className="
      max-w-6xl mx-auto
      bg-gradient-to-r
      from-orange-500
      via-orange-600
      to-purple-700
      rounded-[24px] md:rounded-[40px]
      p-5 sm:p-8 md:p-16
      text-white
      shadow-2xl
      relative overflow-hidden
    "
  >

    {/* Glow */}
    <div
      className="
        absolute
        -top-24
        -right-24
        w-80 h-80
        rounded-full
        bg-white/10
        blur-3xl
      "
    />

    <div className="relative z-10">

      {/* Heading */}
      <div className="text-center mb-10 md:mb-14">

        <p className="uppercase tracking-[3px] text-orange-100 text-xs md:text-sm mb-3">
          Daily Rituals
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
          Aarti Schedule
        </h2>

        <p className="text-orange-100 max-w-2xl mx-auto leading-7 text-sm md:text-base">
          Participate in the sacred aartis and experience
          divine blessings throughout the day at
          Shri Chandreshwar Dham.
        </p>

      </div>

      {/* Aarti Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

        {aartiSchedule.map((aarti, index) => (
          <div
            key={index}
            className="
              bg-white/10
              backdrop-blur-md
              rounded-2xl md:rounded-3xl
              p-4 md:p-6
              border border-white/10
              hover:bg-white/20
              transition-all duration-300
            "
          >

            <p className="text-orange-100 text-xs md:text-sm mb-2">
              Temple Ritual
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-3">
              {aarti.name}
            </h3>

            <div
              className="
                inline-block
                bg-white/20
                px-4 py-2
                rounded-full
                text-xs md:text-sm
                font-semibold
              "
            >
              {aarti.time}
            </div>

            <p className="text-orange-100 text-sm mt-4 leading-6">
              {aarti.desc}
            </p>

          </div>
        ))}

      </div>

    </div>

  </div>

</section>

{/* ===== IMPORTANT NOTE ===== */}
<section className="pb-16 md:pb-20 px-4 sm:px-6">

  <div
    className="
      max-w-4xl mx-auto
      bg-white
      rounded-3xl
      shadow-lg
      border border-orange-100
      p-5 md:p-8
      text-center
    "
  >

    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
      Important Note
    </h3>

    <p className="text-gray-600 text-sm md:text-base leading-7 md:leading-8">
      During special festivals such as Mahashivratri,{/* ===== AARTI SECTION ===== */}
<section className="pb-20 md:pb-24 px-4 sm:px-6">

  <div
    className="
      max-w-6xl mx-auto
      bg-gradient-to-r
      from-orange-500
      via-orange-600
      to-purple-700
      rounded-[24px] md:rounded-[40px]
      p-5 sm:p-8 md:p-16
      text-white
      shadow-2xl
      relative overflow-hidden
    "
  >

    {/* Glow */}
    <div
      className="
        absolute
        -top-24
        -right-24
        w-80 h-80
        rounded-full
        bg-white/10
        blur-3xl
      "
    />

    <div className="relative z-10">

      {/* Heading */}
      <div className="text-center mb-10 md:mb-14">

        <p className="uppercase tracking-[3px] text-orange-100 text-xs md:text-sm mb-3">
          Daily Rituals
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
          Aarti Schedule
        </h2>

        <p className="text-orange-100 max-w-2xl mx-auto leading-7 text-sm md:text-base">
          Participate in the sacred aartis and experience
          divine blessings throughout the day at
          Shri Chandreshwar Dham.
        </p>

      </div>

      {/* Aarti Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

        {aartiSchedule.map((aarti, index) => (
          <div
            key={index}
            className="
              bg-white/10
              backdrop-blur-md
              rounded-2xl md:rounded-3xl
              p-4 md:p-6
              border border-white/10
              hover:bg-white/20
              transition-all duration-300
            "
          >

            <p className="text-orange-100 text-xs md:text-sm mb-2">
              Temple Ritual
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-3">
              {aarti.name}
            </h3>

            <div
              className="
                inline-block
                bg-white/20
                px-4 py-2
                rounded-full
                text-xs md:text-sm
                font-semibold
              "
            >
              {aarti.time}
            </div>

            <p className="text-orange-100 text-sm mt-4 leading-6">
              {aarti.desc}
            </p>

          </div>
        ))}

      </div>

    </div>

  </div>

</section>

{/* ===== IMPORTANT NOTE ===== */}
<section className="pb-16 md:pb-20 px-4 sm:px-6">

  <div
    className="
      max-w-4xl mx-auto
      bg-white
      rounded-3xl
      shadow-lg
      border border-orange-100
      p-5 md:p-8
      text-center
    "
  >

    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
      Important Note
    </h3>

    <p className="text-gray-600 text-sm md:text-base leading-7 md:leading-8">
      During special festivals such as Mahashivratri,
      Shravan Maas, and major poojas, darshan timings
      may extend. Devotees are requested to arrive early
      and follow temple guidelines for a peaceful and
      divine experience.
    </p>

  </div>

</section>{/* ===== AARTI SECTION ===== */}
<section className="pb-20 md:pb-24 px-4 sm:px-6">

  <div
    className="
      max-w-6xl mx-auto
      bg-gradient-to-r
      from-orange-500
      via-orange-600
      to-purple-700
      rounded-[24px] md:rounded-[40px]
      p-5 sm:p-8 md:p-16
      text-white
      shadow-2xl
      relative overflow-hidden
    "
  >

    {/* Glow */}
    <div
      className="
        absolute
        -top-24
        -right-24
        w-80 h-80
        rounded-full
        bg-white/10
        blur-3xl
      "
    />

    <div className="relative z-10">

      {/* Heading */}
      <div className="text-center mb-10 md:mb-14">

        <p className="uppercase tracking-[3px] text-orange-100 text-xs md:text-sm mb-3">
          Daily Rituals
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
          Aarti Schedule
        </h2>

        <p className="text-orange-100 max-w-2xl mx-auto leading-7 text-sm md:text-base">
          Participate in the sacred aartis and experience
          divine blessings throughout the day at
          Shri Chandreshwar Dham.
        </p>

      </div>

      {/* Aarti Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

        {aartiSchedule.map((aarti, index) => (
          <div
            key={index}
            className="
              bg-white/10
              backdrop-blur-md
              rounded-2xl md:rounded-3xl
              p-4 md:p-6
              border border-white/10
              hover:bg-white/20
              transition-all duration-300
            "
          >

            <p className="text-orange-100 text-xs md:text-sm mb-2">
              Temple Ritual
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-3">
              {aarti.name}
            </h3>

            <div
              className="
                inline-block
                bg-white/20
                px-4 py-2
                rounded-full
                text-xs md:text-sm
                font-semibold
              "
            >
              {aarti.time}
            </div>

            <p className="text-orange-100 text-sm mt-4 leading-6">
              {aarti.desc}
            </p>

          </div>
        ))}

      </div>

    </div>

  </div>

</section>

{/* ===== IMPORTANT NOTE ===== */}
<section className="pb-16 md:pb-20 px-4 sm:px-6">

  <div
    className="
      max-w-4xl mx-auto
      bg-white
      rounded-3xl
      shadow-lg
      border border-orange-100
      p-5 md:p-8
      text-center
    "
  >

    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
      Important Note
    </h3>

    <p className="text-gray-600 text-sm md:text-base leading-7 md:leading-8">
      During special festivals such as Mahashivratri,
      Shravan Maas, and major poojas, darshan timings
      may extend. Devotees are requested to arrive early
      and follow temple guidelines for a peaceful and
      divine experience.
    </p>

  </div>

</section>
      Shravan Maas, and major poojas, darshan timings
      may extend. Devotees are requested to arrive early
      and follow temple guidelines for a peaceful and
      divine experience.
    </p>

  </div>

</section>
    </main>
  );
}