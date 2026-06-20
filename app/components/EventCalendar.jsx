"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { festivals } from "@/data/festivals";
export function EventCalendar() {
  const router = useRouter();

 const upcomingEvents = festivals
  .filter((festival) => {
    const eventDate = new Date(festival.date);
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    return eventDate >= today;
  })
  .slice(0, 4);

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
  className="
    text-2xl
    sm:text-3xl
    md:text-4xl
    lg:text-5xl
    font-bold
    text-[#e8c27d]
    text-center
    leading-tight
    px-4
  "
>
  Upcoming Festivals & Events 🪔
</motion.h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Join upcoming spiritual celebrations and receive divine blessings.
        </p>
      </div>

      {/* Cards */}
    <div
  className="
    relative z-10
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-4
    gap-5 sm:gap-7 lg:gap-10
  "
>
       {upcomingEvents.map((event, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="
  group
  rounded-2xl sm:rounded-3xl
  overflow-hidden
  bg-[#1c1823]
  border border-[#2a2434]
  shadow-lg sm:shadow-xl
  hover:shadow-2xl
  transition
"
          >
            {/* IMAGE */}
            <div className="relative h-44 sm:h-52 overflow-hidden">
              <img
                src={event.image}
                alt={event.name}
                className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              {/* Upcoming badge */}
             <span
  className="
    absolute top-3 left-3
    bg-[#e8c27d]
    text-black
    text-[10px] sm:text-xs
    font-semibold
    px-2 py-1 sm:px-3
    rounded-full
  "
>
                Upcoming
              </span>
            </div>

            {/* CONTENT */}
           <div className="p-4 sm:p-6">
             <h3
  className="
    text-lg sm:text-xl
    font-semibold
    text-[#e8c27d]
    mb-1
  "
>
                {event.name}
              </h3>

             <p className="text-purple-400 text-xs sm:text-sm mb-2 sm:mb-3">
                {event.date}
              </p>

              <p
  className="
    text-gray-400
    text-xs sm:text-sm
    leading-6
  "
>
                {event.description}
              
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      {/* Button */}
<div className="text-center mt-10 sm:mt-16 relative z-10 px-4">
  <motion.button
    onClick={() => router.push("/events")}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="
      w-full sm:w-auto
      max-w-[340px]
      px-6 sm:px-12
      py-3 sm:py-4
      bg-[#e8c27d]
      text-black
      text-sm sm:text-base
      font-semibold
      rounded-full
      shadow-lg
      hover:shadow-yellow-400/20
      transition
    "
  >
    View Full Festival Calendar →
  </motion.button>
</div>
    </section>
  );
}
