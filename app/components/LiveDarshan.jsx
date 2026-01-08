"use client";
import { motion } from "framer-motion";

export function LiveDarshan() {
  return (
    <section className="relative bg-[#EAE4F9] py-20 overflow-hidden">

      {/* 🌊 Top Shape Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(200%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39,56.39C196.35,81.47,73,76,0,64.05V0H1200V27.35C1034.62,74.55,843.45,118.92,643.32,104.19,486.33,93.12,365.77,68.75,321.39,56.39Z"
            fill="#EAE4F9"
          ></path>
        </svg>
      </div>

      {/* 🌸 Content */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 relative z-10">
        
        {/* Left: Video */}
        <motion.div
          className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            className="w-full h-72 md:h-96 rounded-2xl"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Live Darshan"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="w-full md:w-1/2 space-y-5 text-center md:text-left"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800">🔱 Live Darshan</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            अब अपने घर बैठे ही भगवान शिव के दिव्य दर्शन करें।  
            लाइव आरती, भजन और पूजन के माध्यम से जुड़ें आध्यात्मिक ऊर्जा से।
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all">
            🌼 Join Darshan Live
          </button>
        </motion.div>

      </div>

      {/* 🌊 Bottom Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(200%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39,56.39C196.35,81.47,73,76,0,64.05V120H1200V92.65C1034.62,45.45,843.45,1.08,643.32,15.81,486.33,26.88,365.77,51.25,321.39,56.39Z"
            fill="#EAE4F9"
          ></path>
        </svg>
      </div>
    </section>
  );
}
