"use client";

import { useRouter } from "next/navigation";

export default function ShivalayaPage() {
  const router = useRouter();

  return (
   
    <main className="min-h-screen bg-[#f9fafb] text-gray-800">
  {/* BACK BUTTON */}
      <button
  onClick={() => router.back()}
  className="fixed top-3 left-3 sm:top-6 sm:left-6 z-50 px-3 py-2 sm:px-5 sm:py-2 text-sm sm:text-base bg-black/10 backdrop-blur-md rounded-full border border-black/20 hover:bg-black/20 transition ">
  ← Back
</button>
      {/* HERO */}
      <section className="pt-20 sm:pt-24 pb-14 sm:pb-20 px-4 sm:px-6 bg-gradient-to-r from-orange-50 via-amber-100 to-orange-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
           <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-700 leading-tight ">
  Shivalaya
</h1>

           <p className=" mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-700 leading-7 sm:leading-relaxed">
  The proposed Shivalaya at Shri Chandreshwar Dham is envisioned as a sacred
  architectural space dedicated to devotion, meditation, and spiritual upliftment.
  It will provide a peaceful environment where devotees can connect with divine
  energy and experience spiritual harmony.
</p>
          </div>

        <div className=" bg-white shadow-lg rounded-2xl h-40 sm:h-56 flex items-center justify-center text-4xl sm:text-5xl">
  🛕
</div>

        </div>
      </section>

      {/* VISION */}
     <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className=" text-xl sm:text-2xl md:text-3xl font-semibold text-purple-700 mb-3 sm:mb-4 leading-tight ">
  A Spiritual Vision for the Future
</h2>

          <p className=" text-gray-600 text-sm sm:text-base md:text-lg leading-7 sm:leading-relaxed">
  The Shivalaya is designed to become a divine center for worship,
  meditation, and spiritual learning. It aims to nurture faith,
  promote cultural values, and strengthen community harmony while
  preserving sacred traditions for future generations.
</p>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-4 sm:px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className=" text-xl sm:text-2xl md:text-3xl font-semibold text-purple-700 mb-4 sm:mb-6 leading-tight ">
  Proposed Temple Layout
</h2>

   <p className=" text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8 sm:mb-10 leading-7 sm:leading-relaxed ">
  The architectural layout of the Shivalaya combines traditional temple
  design principles with modern structural planning to create a peaceful,
  spiritually uplifting, and accessible environment for all devotees.
</p>
    {/* IMAGE */}
   <div
  className="
    bg-white
    rounded-2xl
    sm:rounded-3xl
    shadow-lg
    p-3 sm:p-6
    mb-8 sm:mb-10
    border border-orange-100
  "
>
  <img
    src="/temple-layout.jpg"
    alt="Temple Layout"
    className=" rounded-xl mx-auto w-full max-h-[500px] object-cover "/>
</div>

    {/* FEATURES */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
     <div
  className=" bg-orange-50 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-orange-100 text-sm sm:text-base text-gray-700 shadow-sm hover:shadow-md transition">
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
      <section className="py-14 sm:py-20 bg-orange-50 px-4 sm:px-6">
        <h2 className=" text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-8 sm:mb-12 text-purple-700 leading-tight ">
  Floor Plan Overview
</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 max-w-6xl mx-auto">

          <div className=" bg-white p-5 sm:p-6 rounded-2xl border border-orange-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <h3 className=" text-lg sm:text-xl font-semibold text-purple-700 mb-3 sm:mb-4 leading-tight ">
  Ground Floor
</h3>
            <p className=" text-gray-600 text-sm sm:text-base leading-7 ">
              The ground floor will house the main prayer hall and Shivling
              sanctum, providing space for daily worship, rituals, and
              religious ceremonies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
           <h3 className=" text-lg sm:text-xl font-semibold text-purple-700 mb-3 sm:mb-4 leading-tight ">
  First Floor
</h3>
             <p className=" text-gray-600 text-sm sm:text-base leading-7 ">
              The first floor will include a meditation hall and space for
              spiritual discourses, allowing devotees to engage in reflection,
              prayer, and devotional gatherings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className=" text-lg sm:text-xl font-semibold text-purple-700 mb-3 sm:mb-4 leading-tight ">
  Second Floor
</h3>
             <p className=" text-gray-600 text-sm sm:text-base leading-7 ">
              The second floor is proposed to include a spiritual library and
              study area dedicated to scriptural learning and knowledge sharing.
            </p>
          </div>

        </div>
      </section>

     <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
  <div className="max-w-5xl mx-auto text-center">

    {/* Heading */}
    <h2
      className=" text-xl sm:text-2xl md:text-3xl font-semibold text-purple-700 mb-4 sm:mb-6 ">
      Sacred Purpose
    </h2>

    {/* Divider */}
    <div className="w-16 sm:w-20 h-1 bg-purple-300 mx-auto rounded-full mb-6 sm:mb-8"></div>

    {/* Description */}
    <p
      className=" text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8 sm:mb-12 leading-7 sm:leading-relaxedpx-2"
    >
      The Shivalaya is envisioned as more than a place of worship. It is designed
      to serve as a spiritual sanctuary that nurtures devotion, promotes cultural
      values, encourages learning, and strengthens community harmony.
   </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 text-left">

  <div className="bg-orange-50 p-5 sm:p-6 rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition">
    <h3 className="text-lg sm:text-xl font-semibold text-purple-700 mb-3">
      🪔 Daily Worship & Rituals
    </h3>

    <p className="text-gray-600 text-sm sm:text-base leading-7">
      Provide a serene and sacred environment for daily prayers, rituals,
      and religious ceremonies, allowing devotees to connect with divine
      energy and spiritual peace.
    </p>
  </div>

  <div className="bg-orange-50 p-5 sm:p-6 rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition">
    <h3 className="text-lg sm:text-xl font-semibold text-purple-700 mb-3">
      🧘 Meditation & Spiritual Growth
    </h3>

    <p className="text-gray-600 text-sm sm:text-base leading-7">
      Offer a peaceful space for meditation, reflection, and spiritual
      practices that help individuals attain inner calm and mental clarity.
    </p>
  </div>

  <div className="bg-orange-50 p-5 sm:p-6 rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition">
    <h3 className="text-lg sm:text-xl font-semibold text-purple-700 mb-3">
      📚 Spiritual Education & Learning
    </h3>

    <p className="text-gray-600 text-sm sm:text-base leading-7">
      Promote spiritual education through scriptures, teachings, and
      knowledge-sharing to inspire moral values and cultural awareness.
    </p>
  </div>

  <div className="bg-orange-50 p-5 sm:p-6 rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition">
    <h3 className="text-lg sm:text-xl font-semibold text-purple-700 mb-3">
      👥 Community & Cultural Harmony
    </h3>

    <p className="text-gray-600 text-sm sm:text-base leading-7">
      Foster unity by hosting cultural programs, spiritual gatherings,
      and community activities that strengthen social harmony and shared values.
    </p>
</div>
    </div>
  </div>
</section>

      {/* DONATION */}
<section
  className="
    py-14 sm:py-20 md:py-24
    px-4 sm:px-6
    text-center
    bg-gradient-to-r
    from-purple-600
    to-purple-300
    text-gray-800
  "
>
  <div className="max-w-4xl mx-auto">

    <h3
      className="
        text-2xl
        sm:text-3xl
        md:text-4xl
        font-semibold
        mb-4 sm:mb-5
        leading-tight
      "
    >
      Be a Part of the Sacred Journey
    </h3>

    <div className="w-16 sm:w-20 h-1 bg-white/40 mx-auto rounded-full mb-5 sm:mb-6"></div>

    <p
      className="
        text-sm
        sm:text-base
        md:text-lg
        max-w-2xl
        mx-auto
        mb-6 sm:mb-8
        leading-7
        px-2
      "
    >
      Your generous support will help in building the Shivalaya and
      creating a spiritual sanctuary for devotees and future generations.
    </p>

    <button
      onClick={() => router.push("/donate")}
      className="
        px-6 sm:px-10 md:px-12
        py-2.5 sm:py-3.5

        text-sm sm:text-base

        bg-white
        text-purple-600
        font-semibold

        rounded-full

        shadow-lg
        hover:shadow-xl
        hover:scale-105
        active:scale-95

        transition-all
      "
    >
      Donate Now
    </button>

  </div>
</section>

    </main>
  );
}