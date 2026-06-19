"use client";

import { useRouter } from "next/navigation";

export default function AnnapoornaPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-100 text-gray-800">
      
      {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="
          fixed top-3 left-3 md:top-6 md:left-6
          bg-white/90 backdrop-blur-md
          px-3 py-2 md:px-4 md:py-2
          text-sm md:text-base
          rounded-full shadow-md
          hover:bg-gray-50 transition
          z-50
        "
      >
        ← Back
      </button>

      {/* HERO */}
      <section className="py-16 md:py-24 px-4 md:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-700">
          Annapoorna Rasoi 🍛
        </h1>

        <p className="mt-5 md:mt-6 max-w-2xl mx-auto text-sm md:text-lg text-gray-600 leading-relaxed">
          A sacred initiative of Shri Chandreshwar Dham dedicated to serving
          free, hygienic, and nutritious meals to devotees, visitors, and
          those in need. Inspired by the blessings of Maa Annapoorna, the
          Rasoi ensures that no one leaves the temple hungry.
        </p>
      </section>

      {/* HIGHLIGHT CARDS */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-14 md:mb-20">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-lg font-semibold text-purple-600">
            Daily Seva
          </h3>

          <p className="text-sm text-gray-600 mt-2">
            Fresh meals served to devotees visiting the temple.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-lg font-semibold text-purple-600">
            Community Service
          </h3>

          <p className="text-sm text-gray-600 mt-2">
            Food distribution to underprivileged and needy people.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-lg font-semibold text-purple-600">
            Festival Bhoj
          </h3>

          <p className="text-sm text-gray-600 mt-2">
            Special meals during festivals and religious events.
          </p>
        </div>
      </section>

      {/* PROPOSED PLAN */}
      <section className="bg-white py-14 md:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-6">
            Proposed Plan
          </h2>

          <ul className="space-y-3 text-sm md:text-base text-gray-600 leading-relaxed">
            <li>• Establish a fully equipped hygienic kitchen facility</li>
            <li>• Daily meal service for devotees and visitors</li>
            <li>• Expand outreach to serve nearby communities</li>
            <li>• Sustainable food management and waste reduction</li>
          </ul>
        </div>
      </section>

      {/* ONGOING ACTIVITIES */}
      <section className="py-14 md:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-6">
            Ongoing Activities
          </h2>

          <ul className="space-y-3 text-sm md:text-base text-gray-600 leading-relaxed">
            <li>• Regular food distribution at temple premises</li>
            <li>• Festival-based mass food seva (Bhandara)</li>
            <li>• Volunteer participation in cooking and serving</li>
            <li>• Donation-based meal sponsorship programs</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 md:px-6 text-center bg-gradient-to-r from-purple-600 to-purple-300 text-white">
        <h2 className="text-2xl md:text-4xl font-semibold mb-5 md:mb-6">
          Support Annapoorna Seva 🙏
        </h2>

        <p className="max-w-xl mx-auto mb-8 md:mb-10 text-sm md:text-lg text-white/90 leading-relaxed">
          Your contribution helps us serve food to hundreds of devotees and
          people in need. Be a part of this divine service.
        </p>

        <button
          onClick={() => router.push("/donation")}
          className="
            px-6 py-3 md:px-10 md:py-4
            bg-white text-orange-600
            font-semibold rounded-full
            hover:scale-105 transition
          "
        >
          Donate for Rasoi
        </button>
      </section>
    </main>
  );
}