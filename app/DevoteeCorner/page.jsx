"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function DevoteeCorner() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-purple-100 via-lavender-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,160,255,0.25),transparent_70%)]"></div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-200/40 rounded-full blur-3xl"></div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-purple-800 mb-6 text-center z-10"
      >
        🌺 Devotee Corner
      </motion.h2>

      <p className="text-gray-600 text-center max-w-xl mb-10 z-10">
        Step into a divine digital experience. Join our Bhakti family, view your spiritual journey, and stay connected with live darshan updates.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 z-10 mb-10">
        {[ 
          { icon: "🕉️", title: "Darshan Access", desc: "Login to access Live Darshan and Aarti timings." },
          { icon: "📿", title: "Bhakti Community", desc: "Join other devotees, share prayers and moments." },
          { icon: "🎁", title: "Your Offerings", desc: "Track your donations and temple contributions." }
        ].map((card, i) => (
          <motion.div
            key={i}
            className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 text-center shadow-lg border border-purple-100 hover:shadow-2xl hover:scale-105 transition-all"
          >
            <div className="text-4xl mb-3">{card.icon}</div>
            <h3 className="text-lg font-semibold text-purple-800 mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-5 z-10">
        <button
          onClick={() => router.push("/DevoteeCorner/login")}
          className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          Login
        </button>
        <button
          onClick={() => router.push("/DevoteeCorner/register")}
          className="border-2 border-purple-600 text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 hover:scale-105 transition-all"
        >
          Register
        </button>
      </div>

      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-purple-200/30 to-transparent blur-2xl"></div>
    </section>
  );
}
