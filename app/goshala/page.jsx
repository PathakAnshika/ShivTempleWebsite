"use client";

import { useRouter } from "next/navigation";

export default function GoshalaPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#f9fafb] text-gray-800">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="
          fixed top-3 left-3 md:top-6 md:left-6
          bg-white/80 backdrop-blur-md
          text-purple-700 font-semibold
          px-3 py-2 md:px-5 md:py-2
          text-sm md:text-base
          rounded-full
          shadow-md hover:bg-purple-100
          transition z-50
        "
      >
        ⬅️ Back
      </button>

      {/* HERO */}
    <section className="relative h-[80vh] md:h-[570px]">

  {/* Desktop Image */}
  <img
    src="/images/GoshalaHome.jpg"
    alt="Goshala"
    className="hidden md:block absolute inset-0 w-full h-full object-cover"
  />

  {/* Mobile Image */}
  <img
    src="/images/cowhero.jpg"
    alt="Goshala"
    className="block md:hidden absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
    <div className="text-center text-white max-w-3xl px-4 md:px-6">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold mb-4 md:mb-6">
        Goshala
      </h1>

      <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 leading-relaxed">
        The proposed Goshala at Shri Chandreshwar Dham is a sacred initiative
        dedicated to the protection, care, and wellbeing of cows.
      </p>

      <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs sm:text-sm mb-6 md:mb-8">
        <span>🐄 Cow Protection</span>
        <span>🌿 Eco-Friendly Shelter</span>
        <span>🙏 Gau Seva</span>
      </div>

      <button className="px-5 py-2 md:px-8 md:py-3 bg-purple-500 hover:bg-orange-600 rounded-full text-white font-medium">
        Support Gau Seva
      </button>
    </div>
  </div>

</section>
      {/* ABOUT */}
      <section className="py-12 md:py-16 px-4 md:px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-orange-700 mb-4">
            A Sacred Initiative
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            The proposed Goshala aims to provide shelter, care, and protection
            to cows while promoting compassion, sustainability, and spiritual
            values.
          </p>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-orange-50">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-8 md:mb-10 text-orange-700">
          Goshala Vision
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <img
            src="/images/cow1.jpg"
            alt="Cow 1"
            className="w-full h-64 object-cover rounded-xl shadow-md"
          />

          <img
            src="/images/cow2.jpg"
            alt="Cow 2"
            className="w-full h-64 object-cover rounded-xl shadow-md"
          />

          <img
            src="/images/cow3.jpg"
            alt="Cow 3"
            className="w-full h-64 object-cover rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* PLAN */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <img
            src="/images/ProposedPlan.jpg"
            alt="Proposed Goshala Plan"
            className="w-full rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-orange-700 mb-4">
              Proposed Goshala Plan
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              The Goshala will include spacious shelters, proper feeding
              facilities, veterinary care, and eco-friendly management systems
              to ensure the wellbeing of cows.
            </p>
          </div>
        </div>
      </section>

      {/* DONATION */}
      <section className="py-16 md:py-24 px-4 text-center bg-gradient-to-r from-purple-600 to-purple-300 text-white">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Support Gau Seva
        </h3>

        <p className="mb-8 text-base md:text-lg max-w-2xl mx-auto">
          Your contribution will help provide shelter, food, and medical care
          for cows.
        </p>

        <button
          onClick={() => router.push("/donation")}
          className="px-6 py-3 md:px-12 bg-white text-orange-600 font-semibold rounded-full hover:scale-105 transition"
        >
          Donate for Goshala
        </button>
      </section>
    </main>
  );
}