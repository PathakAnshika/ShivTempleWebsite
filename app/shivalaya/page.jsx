"use client";

import { useRouter } from "next/navigation";

export default function ShivalayaPage() {
  const router = useRouter();

  return (
   
    <main className="min-h-screen bg-[#f9fafb] text-gray-800">
  {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="fixed top-6 left-6 bg-black/10 px-5 py-2 rounded-full border border-black/20 hover:bg-white/20 transition"
      >
        ← Back
      </button>
      {/* HERO */}
      <section className="py-24 px-6 bg-gradient-to-r from-orange-50 via-amber-100 to-orange-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl font-semibold text-purple-700 leading-tight">
              Shivalaya
            </h1>

            <p className="mt-6 text-lg text-gray-700">
              The proposed Shivalaya at Shri Chandreshwar Dham is envisioned as a sacred
              architectural space dedicated to devotion, meditation, and spiritual upliftment.
              It will provide a peaceful environment where devotees can connect with divine
              energy and experience spiritual harmony.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl h-56 flex items-center justify-center text-5xl">
            🛕
          </div>

        </div>
      </section>

      {/* VISION */}
      <section className="py-16 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            A Spiritual Vision for the Future
          </h2>

          <p className="text-gray-600 leading-relaxed">
            The Shivalaya is designed to become a divine center for worship,
            meditation, and spiritual learning. It aims to nurture faith,
            promote cultural values, and strengthen community harmony while
            preserving sacred traditions for future generations.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-2xl font-semibold text-purple-700 mb-6">
      Proposed Temple Layout
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
      The architectural layout of the Shivalaya combines traditional temple
      design principles with modern structural planning to create a peaceful,
      spiritually uplifting, and accessible environment for all devotees.
    </p>

    {/* IMAGE */}
    <div className="bg-white rounded-xl shadow-md p-6 mb-10">
      <img
        src="/temple-layout.jpg"
        alt="Temple Layout"
        className="rounded-lg mx-auto"
      />
    </div>

    {/* FEATURES */}
    <div className="grid md:grid-cols-2 gap-6 text-left">

      <div className="bg-orange-50 p-5 rounded-lg">
        🛕 Main sanctum designed for sacred worship and rituals
      </div>

      <div className="bg-orange-50 p-5 rounded-lg">
        🧎 Spacious prayer hall for devotees and gatherings
      </div>

      <div className="bg-orange-50 p-5 rounded-lg">
        🧘 Meditation areas for peace and spiritual reflection
      </div>

      <div className="bg-orange-50 p-5 rounded-lg">
        📚 Space for spiritual learning and community programs
      </div>

      <div className="bg-orange-50 p-5 rounded-lg">
        🚶 Easy accessibility and organized movement flow
      </div>

      <div className="bg-orange-50 p-5 rounded-lg">
        🌿 Peaceful surroundings enhancing spiritual experience
      </div>

    </div>

  </div>
</section>

      {/* FLOOR PLAN */}
      <section className="py-20 bg-orange-50 px-6">
        <h2 className="text-2xl font-semibold text-center mb-12 text-purple-700">
          Floor Plan Overview
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg text-purple-700 mb-3">
              Ground Floor
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              The ground floor will house the main prayer hall and Shivling
              sanctum, providing space for daily worship, rituals, and
              religious ceremonies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg text-purple-700 mb-3">
              First Floor
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              The first floor will include a meditation hall and space for
              spiritual discourses, allowing devotees to engage in reflection,
              prayer, and devotional gatherings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg text-purple-700 mb-3">
              Second Floor
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              The second floor is proposed to include a spiritual library and
              study area dedicated to scriptural learning and knowledge sharing.
            </p>
          </div>

        </div>
      </section>

     <section className="py-20 px-6 bg-white">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-2xl font-semibold text-purple-700 mb-6">
      Sacred Purpose
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
      The Shivalaya is envisioned as more than a place of worship. It is designed
      to serve as a spiritual sanctuary that nurtures devotion, promotes cultural
      values, encourages learning, and strengthens community harmony.
    </p>

    <div className="grid md:grid-cols-2 gap-8 text-left">

      <div className="bg-orange-50 p-6 rounded-xl">
        <h3 className="font-semibold text-purple-700 mb-2">
          🪔 Daily Worship & Rituals
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Provide a serene and sacred environment for daily prayers, rituals,
          and religious ceremonies, allowing devotees to connect with divine
          energy and spiritual peace.
        </p>
      </div>

      <div className="bg-orange-50 p-6 rounded-xl">
        <h3 className="font-semibold text-purple-700 mb-2">
          🧘 Meditation & Spiritual Growth
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Offer a peaceful space for meditation, reflection, and spiritual
          practices that help individuals attain inner calm and mental clarity.
        </p>
      </div>

      <div className="bg-orange-50 p-6 rounded-xl">
        <h3 className="font-semibold text-purple-700 mb-2">
          📚 Spiritual Education & Learning
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Promote spiritual education through scriptures, teachings, and
          knowledge-sharing to inspire moral values and cultural awareness.
        </p>
      </div>

      <div className="bg-orange-50 p-6 rounded-xl">
        <h3 className="font-semibold text-purple-700 mb-2">
          👥 Community & Cultural Harmony
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Foster unity by hosting cultural programs, spiritual gatherings,
          and community activities that strengthen social harmony and shared values.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* DONATION */}
     <section className="py-24 text-center bg-gradient-to-r from-[#FFE8CC] to-[#FFF4E6] text-gray-800">
        <h3 className="text-3xl font-semibold mb-4">
          Be a Part of the Sacred Journey
        </h3>

        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Your generous support will help in building the Shivalaya and
          creating a spiritual sanctuary for devotees and future generations.
        </p>

        <button
          onClick={() => router.push("/donate")}
          className="px-12 py-3 bg-white text-purple-600 font-semibold rounded-full hover:scale-105 transition"
        >
          Donate Now
        </button>
      </section>

    </main>
  );
}