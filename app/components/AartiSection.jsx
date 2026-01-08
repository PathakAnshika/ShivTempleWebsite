"use client";
import { motion } from "framer-motion";

export function AartiSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-purple-50 via-purple-100/40 to-white overflow-hidden">

      {/* Background Mandala */}
      <div className="absolute inset-0 flex justify-center items-center opacity-20">
        <img
          src="/images/mandala.png"
          alt="mandala"
          className="w-[520px] animate-spin-slow"
        />
      </div>

      {/* Floating Diyas */}
      {/* <div className="absolute top-10 left-14 animate-float-slow opacity-80">
        <img src="/images/diya.png" alt="diya" className="w-20" />
      </div>
      <div className="absolute bottom-10 right-14 animate-float-slow opacity-70">
        <img src="/images/diya.png" alt="diya" className="w-24" />
      </div> */}

      {/* MAIN CONTENT */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-6">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-purple-900"
        >
          🌼 शिव आरती 🌼
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-gray-700 text-lg"
        >
          हमारी मंदिर में रोज की यह आरती शांति, शक्ति और कृपा का अनुभव कराती है।
        </motion.p>


        {/* AARTI BOX */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mt-12 bg-white/70 backdrop-blur-xl border border-purple-200 
                     rounded-3xl shadow-2xl px-8 py-10 relative overflow-hidden"
        >
          {/* Golden Top Border */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-t-3xl"></div>

          <h3 className="text-2xl font-bold text-purple-800 mb-6">
            🔱 शिव जी की आरती 🔱
          </h3>

          {/* Aarti Lyrics (YOUR TEMPLE AARTI HERE) */}
          <div className="text-purple-900 text-lg leading-relaxed whitespace-pre-line">

{`ॐ जय शिव ओमकारा, स्वामी जय शिव ओमकारा।
ब्रह्मा, विष्णु, सदाशिव, अर्द्धांग धारा॥

एकानन चतुरानन पंचानन राजे।
छः मुख अष्टदलों से, वीराजे॥

नंदि ब्रह्मा गणनाथा, संग बैठे सदा।
शीतल गंगाधारा, सुंदर छवि लता॥

भस्म लेपन अंग में, नाग राज भूषन।
डमरू बाजत भीषण, नृत्य करत भूषण॥

व्याघ्र चर्म अम्बर डारा, त्रिनेत्र धारी।
कारज सकल विपत्ति हरन, शिव जग हितकारी॥

ॐ जय शिव ओमकारा…`}

          </div>

          {/* Bottom golden line */}
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-b-3xl"></div>
        </motion.div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 35s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>

    </section>
  );
}
