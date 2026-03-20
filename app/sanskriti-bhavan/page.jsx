"use client";

import { useRouter } from "next/navigation";

export default function SanskritiBhavanPage() {

  const router = useRouter();

  return (
    <main className="bg-white text-gray-800 min-h-screen">

      {/* INTRO */}
      <section className="py-24 px-6 text-center bg-[#FFF7ED]">

        <h1 className="text-4xl md:text-5xl font-semibold text-orange-700 mb-6">
          Sanskriti Bhavan
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Sanskriti Bhavan is envisioned as a dedicated community hall
          within Shri Chandreshwar Dham where cultural programs,
          spiritual discussions, and educational activities can take place.
        </p>

      </section>


      {/* PURPOSE CARDS */}
      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-orange-50 p-8 rounded-xl text-center">
            🎭
            <h3 className="font-semibold text-lg mt-4 mb-2">
              Cultural Programs
            </h3>
            <p className="text-gray-600 text-sm">
              Traditional performances, festivals, and cultural celebrations.
            </p>
          </div>

          <div className="bg-orange-50 p-8 rounded-xl text-center">
            📚
            <h3 className="font-semibold text-lg mt-4 mb-2">
              Educational Activities
            </h3>
            <p className="text-gray-600 text-sm">
              Workshops, seminars, and knowledge-sharing events.
            </p>
          </div>

          <div className="bg-orange-50 p-8 rounded-xl text-center">
            🙏
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
      <section className="py-20 px-6 bg-orange-50">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-2xl font-semibold text-orange-700 mb-4">
              Proposed Plan
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              The Sanskriti Bhavan will be developed as a modern and
              spacious community hall designed to host a variety of
              spiritual and cultural events.
            </p>

            <p className="text-gray-600 leading-relaxed">
              The facility will include a stage, seating arrangement,
              and flexible space to accommodate cultural performances,
              spiritual gatherings, and community programs.
            </p>

          </div>

          <img
            src="/images/communityHall.jpg"
            alt="Community Hall"
            className="rounded-xl shadow-lg"
          />

        </div>

      </section>


      {/* ACTIVITIES GRID */}
      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-center text-orange-700 mb-12">
            Activities at Sanskriti Bhavan
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            <div className="bg-white border p-6 rounded-lg">
              🎤 Bhajan & Kirtan
            </div>

            <div className="bg-white border p-6 rounded-lg">
              🎭 Cultural Performances
            </div>

            <div className="bg-white border p-6 rounded-lg">
              📚 Workshops
            </div>

            <div className="bg-white border p-6 rounded-lg">
              🎉 Festival Celebrations
            </div>

          </div>

        </div>

      </section>


      {/* DONATION */}
      <section className="py-24 text-center bg-gradient-to-r from-orange-600 to-orange-500 text-white">

        <h3 className="text-3xl font-semibold mb-4">
          Support Sanskriti Bhavan
        </h3>

        <p className="max-w-2xl mx-auto mb-8">
          Your contribution will help build a vibrant community
          space dedicated to culture, spirituality, and learning.
        </p>

        <button
          onClick={() => router.push("/donate")}
          className="px-10 py-3 bg-white text-orange-600 rounded-full font-semibold hover:scale-105 transition"
        >
          Donate
        </button>

      </section>

    </main>
  );
}