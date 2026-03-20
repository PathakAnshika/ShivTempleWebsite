"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function EventCalendar() {
  const router = useRouter();

  const events = [
    {
      title: "Hanuman Jayanti",
      date: "2 April 2026",
      description:
        "Experience powerful Hanuman Chalisa chanting and divine blessings.",
      image: "/images/Hanuman.jpg",
    },
    {
      title: "Ram Navami",
      date: "6 April 2026",
      description:
        "Celebrate the birth of Lord Rama with bhajans and spiritual rituals.",
      image: "/images/ram.jpg",
    },
    {
      title: "Navratri Celebrations",
      date: "11 Oct – 20 Oct 2026",
      description:
        "Nine days of devotion and blessings of Maa Durga.",
      image: "/images/Navratri.jpg",
    },
    {
      title: "Diwali Mahotsav",
      date: "8 November 2026",
      description:
        "Temple illuminated with diyas and divine festive energy.",
      image: "/images/diwali.jpg",
    },
  ];

  return (
    <section
      id="events"
      className="relative py-28 px-6 bg-gradient-to-b from-[#0f0f14] via-[#17131c] to-[#0f0f14] text-white overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-700/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full"></div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-[#e8c27d]"
        >
          Upcoming Festivals & Events 🪔
        </motion.h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Join upcoming spiritual celebrations and receive divine blessings.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {events.map((event, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="group rounded-3xl overflow-hidden bg-[#1c1823] border border-[#2a2434] shadow-xl hover:shadow-2xl transition"
          >
            {/* IMAGE */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              {/* Upcoming badge */}
              <span className="absolute top-3 left-3 bg-[#e8c27d] text-black text-xs font-semibold px-3 py-1 rounded-full">
                Upcoming
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#e8c27d] mb-1">
                {event.title}
              </h3>

              <p className="text-purple-400 text-sm mb-3">
                {event.date}
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                {event.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-16 relative z-10">
        <motion.button
          onClick={() => router.push("/events")}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 bg-[#e8c27d] text-black font-semibold rounded-full shadow-lg hover:shadow-yellow-400/20 transition"
        >
          View Full Festival Calendar →
        </motion.button>
      </div>
    </section>
  );
}
