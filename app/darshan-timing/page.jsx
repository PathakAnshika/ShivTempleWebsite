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
      <section className="relative overflow-hidden">

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="
            fixed top-6 left-6 z-50
            bg-white/90 backdrop-blur-md
            border border-gray-200
            px-5 py-2 rounded-full
            shadow-lg hover:scale-105
            transition-all
            flex items-center gap-2
          "
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="max-w-6xl mx-auto px-6 py-28 text-center">

          <div
            className="
              inline-flex items-center gap-2
              bg-orange-100 text-orange-700
              px-5 py-2 rounded-full
              text-sm font-semibold mb-6
            "
          >
            <Bell className="w-4 h-4" />
            Temple Darshan Schedule
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Darshan <span className="text-orange-600">Timings</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6 leading-8">
            Plan your spiritual visit to Shri Chandreshwar Dham
            and immerse yourself in divine peace, devotion,
            and sacred rituals.
          </p>

        </div>
      </section>

      {/* ===== DARSHAN TIMINGS ===== */}
      <section className="pb-24 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {darshanTimings.map((item, index) => (
            <div
              key={index}
              className="
                bg-white rounded-[30px]
                p-8 border border-orange-100
                shadow-lg hover:shadow-2xl
                hover:-translate-y-2
                transition-all duration-500
                group
              "
            >

              {/* Icon */}
              <div
                className="
                  w-16 h-16 rounded-2xl
                  bg-orange-50
                  flex items-center justify-center
                  mb-6
                  group-hover:scale-110
                  transition
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {item.title}
              </h2>

              {/* Time */}
              <div
                className="
                  inline-block
                  bg-orange-100 text-orange-700
                  px-4 py-2 rounded-full
                  text-sm font-semibold mb-5
                "
              >
                {item.time}
              </div>

              {/* Desc */}
              <p className="text-gray-600 leading-7">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* ===== AARTI SECTION ===== */}
      <section className="pb-24 px-6">

        <div
          className="
            max-w-6xl mx-auto
            bg-gradient-to-r from-orange-500 via-orange-600 to-purple-700
            rounded-[40px]
            p-10 md:p-16
            text-white
            shadow-2xl
            relative overflow-hidden
          "
        >

          {/* Glow */}
          <div
            className="
              absolute -top-24 -right-24
              w-80 h-80 rounded-full
              bg-white/10 blur-3xl
            "
          ></div>

          <div className="relative z-10">

            {/* Heading */}
            <div className="text-center mb-14">

              <p className="uppercase tracking-[4px] text-orange-100 text-sm mb-4">
                Daily Rituals
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mb-5">
                Aarti Schedule
              </h2>

              <p className="text-orange-100 max-w-2xl mx-auto leading-8">
                Participate in the sacred aartis and experience
                divine blessings throughout the day at
                Shri Chandreshwar Dham.
              </p>

            </div>

            {/* Aarti Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {aartiSchedule.map((aarti, index) => (
                <div
                  key={index}
                  className="
                    bg-white/10 backdrop-blur-md
                    rounded-3xl p-6
                    border border-white/10
                    hover:bg-white/20
                    transition-all duration-300
                  "
                >

                  <p className="text-orange-100 text-sm mb-2">
                    Temple Ritual
                  </p>

                  <h3 className="text-2xl font-bold mb-4">
                    {aarti.name}
                  </h3>

                  <div
                    className="
                      inline-block bg-white/20
                      px-4 py-2 rounded-full
                      text-sm font-semibold
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
      <section className="pb-20 px-6">

        <div
          className="
            max-w-4xl mx-auto
            bg-white rounded-3xl
            shadow-lg border border-orange-100
            p-8 text-center
          "
        >

          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Important Note
          </h3>

          <p className="text-gray-600 leading-8">
            During special festivals such as Mahashivratri,
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