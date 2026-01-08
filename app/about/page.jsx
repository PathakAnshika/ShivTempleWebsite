"use client";
import { useRouter } from "next/navigation";


import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function AboutPage() {
  const router = useRouter();
  return (
    <main className="text-gray-800">

      {/* ===== TOP SECTION ===== */}
      <section className="bg-gradient-to-r from-purple-50 via-white to-purple-100 border-b">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-3xl md:text-4xl font-semibold text-purple-900">
            Shri Chandreshwar Mandir
          </h1>
    <button
        onClick={() => router.back()}
        className="absolute left-6 top-6 px-5 py-2 bg-white/40 rounded-full border shadow-md hover:bg-white/60"
      >
        ← Back
      </button>

          <div className="w-20 h-1 bg-purple-200 mt-4 mb-6"></div>

          <p className="text-gray-700 max-w-3xl leading-relaxed text-base md:text-lg">
            Shri Chandreshwar Mandir is a sacred temple devoted to Lord Shiva,
            committed to preserving spiritual values, cultural traditions,
            and a life rooted in devotion, faith, and inner harmony.
          </p>
        </div>
      </section>

      {/* ===== ABOUT THE TEMPLE ===== */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-purple-900">
        About the Temple
      </h2>
      <div className="w-16 h-1 bg-purple-200 mt-3"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-14 items-center">

      {/* LEFT: TEXT */}
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Shri Chandreshwar Mandir is a sacred temple devoted to Lord Shiva,
          representing spirituality, devotion, and cultural harmony.
          Established with the vision of spreading spiritual awareness and
          inner consciousness, the temple serves as a place where devotees
          gather for prayer, rituals, and religious observances.
        </p>

        <p>
          The temple celebrates major Hindu festivals such as
          <b> Maha Shivratri</b>, <b> Shravan Maas</b>, and <b> Navratri</b>
          with traditional rituals, collective devotion, and spiritual
          discipline. These celebrations create an atmosphere filled with
          faith, reverence, and divine vibrations.
        </p>

        <p>
          Shri Chandreshwar Mandir offers a peaceful and dignified environment
          where individuals can reflect, meditate, and reconnect with their
          spiritual path.
        </p>
      </div>

      {/* RIGHT: IMAGE */}
      <div className="relative">
        <img
          src="/images/about2.jpg"
          alt="Shri Chandreshwar Mandir"
          className="rounded-3xl shadow-xl w-full h-[420px] object-cover
                     border-4 border-white"
        />

        {/* soft purple glow */}
        <div className="absolute inset-0 rounded-3xl bg-purple-200/10 blur-xl"></div>
      </div>

    </div>
  </div>
</section>


      {/* ===== VISION / MISSION / BELIEF ===== */}
      <section className="bg-gradient-to-r from-purple-50 via-white to-purple-100 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-semibold text-purple-900 mb-14">
            Vision, Mission & Belief
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-8 border border-purple-100 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To create a divine space where peace, devotion, and spiritual
                energy flourish together under the blessings of Lord Shiva,
                inspiring generations to follow the path of truth,
                compassion, and humanity.
              </p>
            </div>

            <div className="bg-white p-8 border border-purple-100 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To preserve sacred traditions, nurture faith, and guide
                individuals toward inner peace through rituals, meditation,
                community service, and spiritual education.
              </p>
            </div>

            <div className="bg-white p-8 border border-purple-100 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">
                Our Belief
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We believe that divinity exists within every being and that true
                worship lies in kindness, humility, and service. All sincere
                paths, when walked with devotion, lead to the same divine truth.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CLOSING NOTE ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Shri Chandreshwar Mandir stands as a place of faith, peace,
            and spiritual reflection, welcoming every devotee to experience
            serenity, devotion, and inner awakening.
          </p>
        </div>
      </section>

      {/* ===== FOOTER (SAME AS YOURS) ===== */}
      <footer className="bg-[#0A1A2F] py-10 mt-16 text-white">
        <div className="max-w-6xl mx-auto px-4">

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <h3 className="text-xl font-bold text-center md:text-left">
                Sri Sri Radha Govind Dev Ji Temple
              </h3>
              <p className="text-white/70 text-sm mt-1 text-center md:text-left">
                Govind Nagar, Vrindavan, Uttar Pradesh 281121, India
              </p>
            </div>

            <div className="flex gap-4 text-white/80">
              {[FaFacebook, FaInstagram, FaYoutube, FaTwitter].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-white transition">
                  <Icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-white/20 mt-6 mb-4"></div>

          <div className="flex flex-col md:flex-row justify-between text-sm text-white/70 gap-3">
            <p>© {new Date().getFullYear()} All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </div>

        </div>
      </footer>

    </main>
  );
}
