"use client";

import { useRouter } from "next/navigation";

export default function AnnapoornaPage() {

  const router = useRouter();

  return (

    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 text-gray-800">

      {/* BACK */}
      <button
        onClick={() => router.back()}
        className="fixed top-6 left-6 bg-white px-4 py-2 rounded-full shadow hover:bg-gray-50"
      >
        ← Back
      </button>


      {/* HERO */}
      <section className="py-24 text-center px-6">

        <h1 className="text-4xl md:text-5xl font-bold text-orange-700">
          Annapoorna Rasoi 🍛
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-600 leading-relaxed">
          A sacred initiative of Shri Chandreshwar Dham dedicated to serving
          free, hygienic, and nutritious meals to devotees, visitors, and
          those in need. Inspired by the blessings of Maa Annapoorna,
          the Rasoi ensures that no one leaves the temple hungry.
        </p>

      </section>


      {/* HIGHLIGHT CARDS */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-20">

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-lg font-semibold text-orange-600">Daily Seva</h3>
          <p className="text-sm text-gray-600 mt-2">
            Fresh meals served to devotees visiting the temple.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-lg font-semibold text-orange-600">Community Service</h3>
          <p className="text-sm text-gray-600 mt-2">
            Food distribution to underprivileged and needy people.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-lg font-semibold text-orange-600">Festival Bhoj</h3>
          <p className="text-sm text-gray-600 mt-2">
            Special meals during festivals and religious events.
          </p>
        </div>

      </section>


      {/* PROPOSED PLAN */}
      <section className="bg-white py-20 px-6">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-semibold text-orange-700 mb-6">
            Proposed Plan
          </h2>

          <ul className="space-y-3 text-gray-600 leading-relaxed">
            <li>• Establish a fully equipped hygienic kitchen facility</li>
            <li>• Daily meal service for devotees and visitors</li>
            <li>• Expand outreach to serve nearby communities</li>
            <li>• Sustainable food management and waste reduction</li>
          </ul>

        </div>

      </section>


      {/* ONGOING ACTIVITIES */}
      <section className="py-20 px-6">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-semibold text-orange-700 mb-6">
            Ongoing Activities
          </h2>

          <ul className="space-y-3 text-gray-600 leading-relaxed">
            <li>• Regular food distribution at temple premises</li>
            <li>• Festival-based mass food seva (Bhandara)</li>
            <li>• Volunteer participation in cooking and serving</li>
            <li>• Donation-based meal sponsorship programs</li>
          </ul>

        </div>

      </section>


      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6">

        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Support Annapoorna Seva 🙏
        </h2>

        <p className="max-w-xl mx-auto mb-10 text-white/90">
          Your contribution helps us serve food to hundreds of devotees and
          people in need. Be a part of this divine service.
        </p>

        <button
          onClick={() => router.push("/donation")}
          className="px-10 py-4 bg-white text-orange-600 font-semibold rounded-full hover:scale-105 transition"
        >
          Donate for Rasoi
        </button>

      </section>

    </main>
  );
}