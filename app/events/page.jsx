"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function FestivalJourney() {
  const router = useRouter();

  const festivals = [
    {
      month: "Oct – Nov",
      name: "Diwali Mahotsav",
      desc: "Temple illuminated with diyas and divine festive rituals.",
      img: "/images/diwali.jpg",
    },
    {
      month: "April",
      name: "Hanuman Jayanti",
      desc: "Devotees gather for Hanuman Chalisa, aarti and blessings.",
      img: "/images/hanuman.jpg",
    },
    {
      month: "Sept – Oct",
      name: "Navratri Celebrations",
      desc: "Nine days of devotion to Maa Durga, bhajans and rituals.",
      img: "/images/navratri.jpg",
    },
   
     {
      month: "March",
      name: "Holi",
      desc: "Sacred havan offering prayers for peace and prosperity.",
      img: "/images/Holi.jpg",
    },
    {
  month: "February",
  name: "Saraswati Puja",
  desc: "Devotion to Goddess Saraswati seeking blessings for knowledge, wisdom, and creativity.",
  img: "/images/Saraswati.jpg",
},
{
  month: "August",
  name: "Janmashtami",
  desc: "Celebration of Lord Krishna’s birth with bhajans, fasting, and divine joy.",
  img: "/images/janmashtmi.jpg",
},
{
  month: "February / March",
  name: "Maha Shivratri",
  desc: "A holy night dedicated to Lord Shiva with fasting, meditation, and sacred rituals.",
  img: "/images/shivratri.jpg",
},
{
  month: "October",
  name: "Dussehra",
  desc: "Festival symbolizing the victory of good over evil, celebrated with devotion and cultural events.",
  img: "/images/Ram.jpg",
},
{
  month: "September",
  name: "Vishwakarma Puja",
  desc: "Worship of Lord Vishwakarma, the divine architect, seeking blessings for tools, machines, and craftsmanship.",
  img: "/images/vishwakarma.jpg",
},
  ];

  return (
    <section className="bg-[#faf7ff] min-h-screen pb-20 text-gray-800">

      {/* BACK BUTTON (FIXED) */}
      <button
        onClick={() => router.push("/")}     // ← FIXED
        className="
          absolute top-6 left-6
          px-5 py-2 bg-white border border-gray-300 rounded-full
          text-gray-700 shadow-sm
          hover:bg-gray-100 transition-all
        "
      >
        ← Back
      </button>

      {/* HEADING */}
      <div className="text-center pt-24 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-purple-800"
        >
          Temple Festivals & Rituals
        </motion.h1>

        <p className="mt-3 text-gray-600 max-w-xl mx-auto text-base">
          Discover the divine celebrations held throughout the year.
        </p>
      </div>

      {/* FESTIVALS SECTION */}
      <div className="max-w-6xl mx-auto px-6 space-y-20">

        {festivals.map((fest, index) => (
          <motion.div
            key={fest.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="w-full md:w-1/2">
              <img
                src={fest.img}
                alt={fest.name}
                className="w-full h-72 md:h-80 object-cover rounded-2xl shadow-md"
              />
            </div>

            {/* TEXT CONTENT */}
            <div className="md:w-1/2">
              <p className="text-xs uppercase tracking-wider text-purple-600 font-semibold">
                {fest.month}
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-1">
                {fest.name}
              </h2>

              <p className="text-gray-700 mt-3 leading-relaxed">
                {fest.desc}
              </p>

              <button
                className="mt-4 text-purple-700 font-medium hover:underline"
              >
                Learn More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA SECTION */}
      <div className="text-center mt-20">
        <p className="text-gray-700 text-sm">
          Wish to contribute towards events & festivals?
        </p>

        <button
          onClick={() => router.push("/donation")}
          className="mt-4 px-10 py-3 bg-purple-600 text-white font-semibold 
                     rounded-full hover:bg-purple-700 transition-all shadow-md"
        >
          Support with Donation 🙏
        </button>
      </div>
    </section>
  );
}
