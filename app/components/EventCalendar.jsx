"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function EventCalendar() {
  const router = useRouter();

  // 👉 FRONT PAGE EVENTS
  const events = [
    {
      title: "Diwali Mahotsav",
      date: "8th November 2026",
      description:
        "Temple filled with diyas, mantras and divine festive energy.",
      image: "/images/diwali.jpg",   // 👈 PHOTO PATH
    },
    {
      title: "Hanuman Jayanti",
      date: "2nd April 2026",
      description:
        "Experience powerful Hanuman Chalisa chanting and grand aarti.",
      image: "/images/Hanuman.jpg",
    },
    {
      title: "Navratri Celebrations",
      date: "11 oct – 20 Oct 2026",
      description:
        "Nine days of devotion, dance and blessings of Maa Durga.",
      image: "/images/Navratri.jpg",
    },
    {
      title: "Holi",
      date: "1st March 2026",
      description:
        "Sacred havan bringing peace, prosperity and light.",
      image: "/images/Holi.jpg",
    },
  ];

  return (
   <section
  id="events"
  className="relative py-24 px-6 bg-gradient-to-b from-[#1a1a1d] via-[#221e27] to-[#1a1a1d] text-white"
>


      {/* Heading */}
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold tracking-wide text-[#e8c27d]"
        >
          Temple Festivals & Events 🪔
        </motion.h2>

        <p className="text-gray-300 mt-3 max-w-xl mx-auto text-base">
          Witness the divine celebrations filled with rituals, devotion and blessings.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden bg-[#2a2630] border border-[#3c3445] shadow-lg"
          >

            {/* IMAGE */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-[#e8c27d] mb-2">
                {event.title}
              </h3>

              <p className="text-sm text-purple-300 mb-3">
                {event.date}
              </p>

              <p className="text-gray-300 text-sm">
                {event.description}
              </p>
            </div>

          </motion.div>
        ))}
      </div>

      {/* View All Events Button */}
      <div className="text-center mt-14">
        <motion.button
          onClick={() => router.push("/events")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-3 bg-[#e8c27d] text-[#1a1a1d] font-semibold rounded-full"
        >
          View All Events →
        </motion.button>
      </div>

    </section>
  );
}
