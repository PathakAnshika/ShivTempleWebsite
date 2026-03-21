"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ScholarshipPage() {
  const router = useRouter();

  return (
    <main className="bg-gradient-to-b from-purple-50 via-white to-purple-100 text-gray-800">
    
{/* Back Button */}
<button
  onClick={() => router.back()}
  className="
    fixed top-6 left-6 z-50
    px-5 py-2
    bg-white/80 backdrop-blur-md
    text-purple-900
    rounded-full
    shadow-md
    border border-purple-100
    hover:bg-white
    hover:shadow-lg
    transition
  "
>
  ← Back
</button>

   {/* HERO SECTION */}
<section className="py-24 px-6 max-w-6xl mx-auto">
  <div className="grid md:grid-cols-2 gap-14 items-center">

    {/* LEFT CONTENT */}
    <div>
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-purple-900"
      >
        Medha Scholarship Program 🎓
      </motion.h1>

      <div className="w-24 h-1 bg-purple-300 mt-6 mb-8"></div>

      <p className="text-lg text-gray-700 leading-relaxed">
        Shri Chandreshwar Dham proudly supports academic excellence through the
        <span className="font-semibold text-purple-800"> Medha Scholarship Program</span>.
        This initiative empowers deserving students to pursue education
        confidently with structured academic support.
      </p>
    </div>

    {/* RIGHT IMAGE */}
   {/* RIGHT IMAGE */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  className="flex justify-center"
>
  <img
    src="/images/student3-removebg-preview.png"
    alt="Scholarship Students"
    className="w-[280px] md:w-[500px] drop-shadow-2xl"
  />
</motion.div>


  </div>
</section>


      {/* ABOUT SCHOLARSHIP */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-3xl shadow-xl p-10 border border-purple-100">

          <h2 className="text-2xl font-semibold text-purple-900 mb-6">
            About The Program
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The Medha Scholarship reflects the temple’s commitment towards
            education, growth, and social upliftment. It recognizes hardworking
            students and provides them with opportunities to continue their
            academic journey without financial obstacles.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Scholarships are offered twice every year through a structured
            evaluation process that ensures fairness, transparency, and merit-based selection.
          </p>

        </div>
      </section>

      {/* CATEGORIES */}
      <section className="pb-24 px-6">
        <h2 className="text-3xl font-semibold text-purple-900 text-center mb-14">
          Scholarship Categories
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {/* Card */}
          {[
            {
              title: "Junior School",
              desc: "For students studying in Classes 8th to 10th. This category aims to support young learners during their foundational academic years."
            },
            {
              title: "Senior School",
              desc: "Designed for students of Classes 11th and 12th, helping them focus on higher education and career preparation."
            },
            {
              title: "Undergraduate",
              desc: "Available for students pursuing B.A., B.Sc., or B.Com programs, encouraging continued academic excellence."
            },
          ].map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100"
            >
              <h3 className="text-xl font-semibold text-purple-800 mb-3">
                {cat.title}
              </h3>

              <p className="text-gray-700 leading-relaxed">
                {cat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CYCLE + TEST */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold text-purple-900 text-center mb-14">
            Scholarship Cycle & Examination
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Cycle */}
            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">
                Scholarship Cycle
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li>📘 <strong>April – September Cycle</strong></li>
                <li>➡ Test conducted in <strong>February (First Week)</strong></li>

                <li className="pt-4">📗 <strong>October – March Cycle</strong></li>
                <li>➡ Test conducted in <strong>August (First Week)</strong></li>
              </ul>
            </div>

            {/* Test Mode */}
            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">
                Examination Mode
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Students will be evaluated through an objective-type questionnaire
                designed to assess academic understanding and aptitude.
              </p>

              <ul className="space-y-2 text-gray-700">
                <li>✅ Online Examination Option</li>
                <li>✅ Onsite Examination Option</li>
                <li>✅ Merit-Based Selection</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6 bg-gradient-to-r from-purple-500 to-purple-300">
        <h2 className="text-3xl font-semibold text-purple-900 mb-6">
          Begin Your Scholarship Journey
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-10">
          Eligible students are encouraged to apply and take the next step toward
          a brighter academic future with the blessings of Shri Chandreshwar Dham.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/scholarship/apply")} // future page
          className="px-10 py-4 bg-purple-700 text-white rounded-full shadow-lg hover:bg-purple-800 transition"
        >
          Apply for Scholarship →
        </motion.button>
      </section>

    </main>
  );
}
