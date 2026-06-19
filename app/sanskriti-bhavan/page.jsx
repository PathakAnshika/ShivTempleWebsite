"use client";

import { useRouter } from "next/navigation";

export default function SanskritiBhavanPage() {
  const router = useRouter();

  return (
    <main className="bg-white text-gray-800 min-h-screen">
      {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="
          fixed top-3 left-3 md:top-6 md:left-6
          bg-white/90 backdrop-blur-md
          px-3 py-2 md:px-5 md:py-2
          text-sm md:text-base
          rounded-full
          border border-black/10
          shadow-md
          hover:bg-white
          transition
          z-50
        "
      >
        ← Back
      </button>

      {/* INTRO */}
      <section className="py-16 md:py-24 px-4 md:px-6 text-center bg-[#FFF7ED]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-700 mb-5 md:mb-6">
          Sanskriti Bhavan
        </h1>

        <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-700 leading-relaxed">
          Sanskriti Bhavan is envisioned as a dedicated community hall within
          Shri Chandreshwar Dham where cultural programs, spiritual discussions,
          and educational activities can take place.
        </p>
      </section>

      {/* PURPOSE CARDS */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-purple-50 p-6 md:p-8 rounded-xl text-center shadow-sm">
            <div className="text-4xl">🎭</div>

            <h3 className="font-semibold text-lg mt-4 mb-2">
              Cultural Programs
            </h3>

            <p className="text-gray-600 text-sm">
              Traditional performances, festivals, and cultural celebrations.
            </p>
          </div>

          <div className="bg-purple-50 p-6 md:p-8 rounded-xl text-center shadow-sm">
            <div className="text-4xl">📚</div>

            <h3 className="font-semibold text-lg mt-4 mb-2">
              Educational Activities
            </h3>

            <p className="text-gray-600 text-sm">
              Workshops, seminars, and knowledge-sharing events.
            </p>
          </div>

          <div className="bg-purple-50 p-6 md:p-8 rounded-xl text-center shadow-sm">
            <div className="text-4xl">🙏</div>

            <h3 className="font-semibold text-lg mt-4 mb-2">
              Spiritual Gatherings
            </h3>

            <p className="text-gray-600 text-sm">
              Discourses, satsang, and devotional music programs.
            </p>
          </div>
        </div>
      </section>

      {/* PROPOSED PLAN */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-orange-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-4">
              Proposed Plan
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
              The Sanskriti Bhavan will be developed as a modern and spacious
              community hall designed to host a variety of spiritual and
              cultural events.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              The facility will include a stage, seating arrangement, and
              flexible space to accommodate cultural performances, spiritual
              gatherings, and community programs.
            </p>
          </div>

          <img
            src="/images/communityHall.jpg"
            alt="Community Hall"
            className="order-1 md:order-2 w-full rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-purple-700 mb-8 md:mb-12">
            Activities at Sanskriti Bhavan
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            <div className="bg-white border p-4 md:p-6 rounded-lg shadow-sm text-sm md:text-base">
              🎤 Bhajan & Kirtan
            </div>

            <div className="bg-white border p-4 md:p-6 rounded-lg shadow-sm text-sm md:text-base">
              🎭 Cultural Performances
            </div>

            <div className="bg-white border p-4 md:p-6 rounded-lg shadow-sm text-sm md:text-base">
              📚 Workshops
            </div>

            <div className="bg-white border p-4 md:p-6 rounded-lg shadow-sm text-sm md:text-base">
              🎉 Festival Celebrations
            </div>
          </div>
        </div>
      </section>

      {/* DONATION */}
      <section className="py-16 md:py-24 px-4 text-center bg-gradient-to-r from-purple-600 to-purple-300 text-white">
        <h3 className="text-2xl md:text-4xl font-semibold mb-4">
          Support Sanskriti Bhavan
        </h3>

        <p className="max-w-2xl mx-auto mb-8 text-sm md:text-lg leading-relaxed">
          Your contribution will help build a vibrant community space dedicated
          to culture, spirituality, and learning.
        </p>

        <button
          onClick={() => router.push("/donate")}
          className="
            px-6 py-3 md:px-10
            bg-white text-orange-600
            rounded-full font-semibold
            hover:scale-105 transition
          "
        >
          Donate
        </button>
      </section>
    </main>
  );
}