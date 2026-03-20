"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import FestivalCountdown from "../components/FestivalCountdown";

export default function EventsPage() {
  const router = useRouter();

<section className="bg-gradient-to-b from-[#1a1a1d] via-[#221e27] to-[#1a1a1d] text-white">

  <FestivalCountdown />

</section>
  // ===== FESTIVAL CALENDAR 2026 =====
  const festivals = [
  { name: "Makar Sankranti", date: "14 January 2026" },
  { name: "Basant Panchami", date: "23 January 2026" },
  { name: "Maha Shivratri", date: "15 February 2026" },
  { name: "Holika Dahan", date: "2 March 2026" },
  { name: "Holi", date: "3 March 2026" },
  { name: "Chaitra Navratri Begins", date: "19 March 2026" },
  { name: "Ram Navami", date: "27 March 2026" },
  { name: "Hanuman Jayanti", date: "2 April 2026" },
  { name: "Buddha Purnima", date: "1 May 2026" },
  { name: "Ganga Dussehra", date: "28 May 2026" },
  { name: "Janmashtami", date: "10 August 2026" },
  { name: "Swatantrata Diwas", date: "15 August 2026" },
  { name: "Haritaalika Vrat", date: "6 September 2026" },
  { name: "Jeevitputrika Vrat", date: "17 September 2026" },
  { name: "Sharadiya Navratri Begins", date: "9 October 2026" },
  { name: "Durga Ashtami", date: "16 October 2026" },
  { name: "Durga Navami", date: "17 October 2026" },
  { name: "Vijayadashami (Dussehra)", date: "18 October 2026" },
  { name: "Vishwakarma Puja", date: "17 September 2026" },
  { name: "Deepawali", date: "8 November 2026" },
  { name: "Govardhan Puja", date: "9 November 2026" },
  { name: "Chitragupta Puja", date: "10 November 2026" },
  { name: "Chhath Puja", date: "12 November 2026" },
  { name: "Dev Deepavali", date: "15 November 2026" },
  { name: "Vivaah Panchami", date: "5 December 2026" },
  { name: "Tulsi Jayanti", date: "25 December 2026" },
  { name: "Geeta Jayanti", date: "25 December 2026" },
];


  return (
    <main className="bg-[#111015] text-white min-h-screen">

      {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="fixed top-6 left-6 bg-white/10 px-5 py-2 rounded-full border border-white/20 hover:bg-white/20 transition"
      >
        ← Back
      </button>

      {/* HERO */}
      <section className="py-24 text-center max-w-5xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-[#e8c27d]"
        >
          Festivals & Cultural Events 🪔
        </motion.h1>

        <div className="w-24 h-1 bg-[#e8c27d] mx-auto mt-6 mb-8"></div>

        <p className="text-gray-300 text-lg leading-relaxed">
          Shri Chandreshwar Dham celebrates sacred festivals and cultural
          traditions that preserve devotion, heritage, and spiritual harmony.
        </p>
      </section>

      {/* FESTIVAL CALENDAR */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-semibold text-center text-[#e8c27d] mb-12">
          Festival Calendar 2026
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
         {festivals.map((festival, i) => (
  <motion.div
    key={i}
    whileHover={{ scale: 1.05 }}
    className="bg-[#1e1b24] border border-[#2c2735] rounded-xl p-5 text-center shadow-lg"
  >
    <p className="text-[#e8c27d] font-semibold">
      {festival.name}
    </p>

    <p className="text-gray-400 text-sm mt-1">
      {festival.date}
    </p>
  </motion.div>
))}

        </div>
      </section>

      {/* CULTURAL COMPETITIONS */}
      <section className="bg-[#18161d] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-semibold text-[#e8c27d] mb-10">
            Vidha Competitions 🎨
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mb-14">
            Shri Chandreshwar Dham organizes cultural competitions to
            encourage creativity, devotion, and spiritual expression
            among children and youth.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Essay Writing",
                desc: "Express spiritual thoughts and values through meaningful writing.",
              },
              {
                title: "Art & Drawing",
                desc: "Show devotion and creativity through sacred art and illustrations.",
              },
              {
                title: "Poetry",
                desc: "Compose devotional poems expressing faith and spirituality.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-[#1e1b24] p-8 rounded-2xl border border-[#2c2735]"
              >
                <h3 className="text-xl font-semibold text-[#e8c27d] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-400 mt-12 text-sm">
            Competitions are organized during major festivals including
            Ram Navami, Hanuman Jayanti, Tulsi Jayanti, Vishwakarma Puja,
            and Geeta Jayanti.
          </p>
<button
  onClick={() => router.push("/vidha")}
  className="mt-10 px-10 py-3 bg-[#e8c27d] text-[#111015] rounded-full font-semibold hover:scale-105 transition"
>
  View Full Vidha Program
</button>
        </div>
      </section>

      {/* CTA
      <section className="py-24 text-center px-6">
        <h2 className="text-3xl font-semibold text-[#e8c27d] mb-6">
          Experience Divine Celebrations
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Join temple festivals and cultural programs to experience
          devotion, community spirit, and spiritual joy.
        </p>

        <button
          onClick={() => router.push("/")}
          className="px-10 py-4 bg-[#e8c27d] text-[#111015] rounded-full font-semibold hover:scale-105 transition"
        >
          Back to Home
        </button>
      </section> */}
<section className="bg-[#f6f3ee] py-24 px-6 text-gray-800 border-t border-gray-200">
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-16">
      <h2 className="text-3xl font-semibold text-[#c59d45] mb-4">
        Cultural Expression – Samvaad
      </h2>
      <div className="w-20 h-[2px] bg-[#c59d45] mx-auto mb-6 opacity-70"></div>
      <p className="text-gray-700 max-w-2xl mx-auto">
        Samvaad is a platform for spiritual reflection and cultural
        expression where devotees share meaningful writings,
        thoughts, and devotional messages.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Samvaad preserves devotional poetry, thoughtful essays,
          inspirational messages, and spiritual reflections
          contributed by individuals from across the world.
        </p>

        <p>
          Selected essays and poems from Vidha competitions are also
          published here, celebrating creativity and devotion.
        </p>

        <button  onClick={() => router.push("/Samvaad")}className="mt-4 px-8 py-3 bg-[#c59d45] text-white rounded-full font-semibold hover:scale-105 transition">
          Explore Samvaad
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
        <p className="text-[#c59d45] text-sm uppercase tracking-widest mb-3">
          Featured Expression
        </p>

        <p className="italic text-gray-700 leading-relaxed">
          “True devotion is not only expressed through rituals,
          but through words that inspire, thoughts that uplift,
          and actions that serve humanity.”
        </p>

        <p className="text-gray-500 text-sm mt-4">
          — Shri Chandreshwar Dham
        </p>
      </div>

    </div>

  </div>
</section>   </main>
  );
}
