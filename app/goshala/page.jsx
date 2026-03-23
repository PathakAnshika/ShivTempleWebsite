"use client";

import { useRouter } from "next/navigation";

export default function GoshalaPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#f9fafb] text-gray-800">
  <button
  onClick={() => router.back()}
  className="
    fixed top-6 left-6
    bg-white/80 backdrop-blur-md
    text-purple-700 font-semibold
    px-5 py-2 rounded-full
    shadow-md hover:bg-purple-100
    transition
    z-50
  "
>
  ⬅️ Back
</button>
    <section className="relative h-[570px]">

  {/* <img
    src="images/GoshalaHome.jpg"
    alt="Goshala"
    className="w-full h-full object-cover"
  /> */}
 {/* blurred image */}
  <img
    src="/images/GoshalaHome.jpg"
    alt="Goshala"
     className="absolute w-full h-full"
  />

  {/* overlay */}
  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

    <div className="text-center text-white max-w-3xl px-6">

      <h1 className="text-4xl md:text-6xl font-semibold mb-6">
        Goshala
      </h1>

      <p className="text-lg mb-6 leading-relaxed">
        The proposed Goshala at Shri Chandreshwar Dham is a sacred initiative
        dedicated to the protection, care, and wellbeing of cows. It reflects
        the values of compassion, sustainability, and spiritual service.
      </p>

      {/* highlights */}
      <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
        <span>🐄 Cow Protection</span>
        <span>🌿 Eco-Friendly Shelter</span>
        <span>🙏 Gau Seva</span>
      </div>

      {/* button */}
      <button className="px-8 py-3 bg-purple-500 hover:bg-orange-600 rounded-full text-white font-medium">
        Support Gau Seva
      </button>

    </div>

  </div>

</section>


      {/* ABOUT */}
      <section className="py-16 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-orange-700 mb-4">
            A Sacred Initiative
          </h2>

          <p className="text-gray-600">
            The proposed Goshala aims to provide shelter, care, and protection
            to cows while promoting compassion, sustainability, and spiritual values.
          </p>
        </div>
      </section>


      {/* IMAGE GALLERY */}
      <section className="py-20 px-6 bg-orange-50">
        <h2 className="text-2xl font-semibold text-center mb-10 text-orange-700">
          Goshala Vision
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <img src="/images/cow1.jpg" className="rounded-xl shadow-md" />
          <img src="/images/cow2.jpg" className="rounded-xl shadow-md" />
          <img src="/images/cow3.jpg" className="rounded-xl shadow-md" />

        </div>
      </section>


      {/* PLAN */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <img
            src="/images/ProposedPlan.jpg"
            className="rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-2xl font-semibold text-orange-700 mb-4">
              Proposed Goshala Plan
            </h2>

            <p className="text-gray-600 leading-relaxed">
              The Goshala will include spacious shelters, proper feeding
              facilities, veterinary care, and eco-friendly management systems
              to ensure the wellbeing of cows.
            </p>
          </div>

        </div>
      </section>


      {/* DONATION */}
      <section className="py-24 text-center bg-gradient-to-r from-purple-600 to-purple-300 text-white">

        <h3 className="text-3xl font-semibold mb-4">
          Support Gau Seva
        </h3>

        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Your contribution will help provide shelter, food, and medical
          care for cows.
        </p>

        <button
          onClick={() => router.push("/donation")}
          className="px-12 py-3 bg-white text-orange-600 font-semibold rounded-full"
        >
          Donate for Goshala
        </button>

      </section>

    </main>
  );
}