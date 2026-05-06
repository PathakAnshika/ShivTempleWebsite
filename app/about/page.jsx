"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

export default function AboutPage() {
  const router = useRouter();
  const [persons, setPersons] = useState([
  {
    id: 1,
    name: "Akhoury Ravindra Prasad",
    role: "Founder & Spiritual Visionary",
    image: "/images/person1.jpg",
    description:
      "Akhoury Ravindra Prasad Ji is the revered founder of Shri Chandreshwar Dham. With deep devotion toward Sanatan Dharma and unwavering faith in Mahadev, he established the temple as a sacred spiritual space for devotees and community welfare.",
  },

  {
    id: 2,
    name: "Dr. A.K Raghvan",
    role: "Managing Trustee & Cultural Guide",
    image: "/images/person2.jpg",
    description:
      "Dr. A.K Raghvan, son of the founder, continues the spiritual legacy of Shri Chandreshwar Dham through his leadership, devotion, and dedication toward preserving temple traditions and community service initiatives.",
  },

  {
    id: 3,
    name: "Dr. Nidhi Bharti",
    role: "Youth & Community Development Head",
    image: "/images/person3.jpg",
    description:
      "Dr. Nidhi Bharti actively contributes toward the spiritual and social growth initiatives of the temple through youth engagement, educational programs, and community development activities.",
  },
]);

  return (
    <main className="text-gray-800">

      {/* ===== HERO ===== */}
      <section className="relative bg-gradient-to-r from-purple-50 via-white to-purple-100 border-b">
        <button
          onClick={() => router.back()}
          className="absolute left-6 top-6 px-5 py-2 bg-white/70 rounded-full border shadow-md hover:bg-white transition"
        >
          ← Back
        </button>

        <div className="max-w-6xl mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900">
            About Shri Chandreshwar Dham
          </h1>
          <div className="w-24 h-1 bg-purple-300 mt-6 mb-8"></div>

          <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
            A sacred abode of Lord Shiva, dedicated to devotion,
            cultural preservation, and community upliftment.
          </p>
        </div>
      </section>

      {/* ===== TEMPLE HISTORY ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-purple-900 mb-8">
            Temple History
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              Shri Chandreshwar Dham was established with a divine vision
              to create a spiritual sanctuary where devotees can experience
              peace, devotion, and inner awakening. Over the years, the temple
              has evolved into a center of faith, drawing devotees from
              surrounding regions and beyond.
            </p>

            <p>
              The temple stands as a symbol of unwavering devotion to Lord
              Shiva and has become a sacred destination for spiritual
              gatherings, rituals, and major Hindu festivals.
            </p>

            <p>
              With continuous efforts from temple management and devotees,
              Shri Chandreshwar Dham has expanded its role beyond worship,
              embracing social and cultural initiatives for the betterment
              of society.
            </p>
          </div>
        </div>
      </section>

      {/* ===== VISION / MISSION / BELIEF (NEW LAYOUT) ===== */}
      <section className="bg-purple-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-purple-900 text-center mb-16">
            Vision • Mission • Belief
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">
                Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To build a spiritually vibrant community where faith,
                harmony, and devotion flourish across generations.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">
                Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To preserve sacred traditions, conduct rituals with purity,
                promote spiritual education, and support society through
                meaningful initiatives.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">
                Belief
              </h3>
              <p className="text-gray-700 leading-relaxed">
                True devotion lies in compassion, service, humility,
                and inner discipline. All paths guided by sincerity
                lead to the divine.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== EMINENT PERSONALITIES SECTION ===== */}

<section className="py-24 px-6 bg-gradient-to-b from-orange-50 via-white to-orange-50">

  {/* Heading */}
  <div className="text-center mb-16">

    <p className="text-orange-600 font-semibold tracking-[4px] uppercase mb-3">
      Spiritual Leadership
    </p>

    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
      Eminent <span className="text-orange-600">Personalities</span>
    </h2>

    <div className="w-28 h-1 bg-orange-500 mx-auto rounded-full mt-5"></div>

    <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8 text-lg">
      Meet the respected personalities behind Shri Chandreshwar Dham
      who continue to inspire devotees through spirituality,
      service, and cultural values.
    </p>

  </div>

  {/* Cards */}
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

    {/* ===== PERSON 1 ===== */}
    <div
      className="
        group bg-white rounded-[30px]
        overflow-hidden border border-orange-100
        shadow-md hover:shadow-2xl
        transition-all duration-500
        hover:-translate-y-3
      "
    >

      {/* Image */}
      <div className="relative h-[380px] overflow-hidden">

        <img
          src="/images/person1.jpg"
          alt="Akhoury Ravindra Prasad"
          className="
            w-full h-full object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />

        <div className="
          absolute inset-0
          bg-gradient-to-t
          from-black/60 via-black/10 to-transparent
        "></div>

        {/* Role Badge */}
        <div className="
          absolute bottom-5 left-5
          bg-white/90 backdrop-blur-md
          px-4 py-2 rounded-full
          text-sm font-semibold text-orange-700
          shadow-md
        ">
          Founder & Spiritual Visionary
        </div>

      </div>

      {/* Content */}
      <div className="p-7">

        <h3 className="text-2xl font-bold text-gray-800">
          Akhoury Ravindra Prasad
        </h3>

        <p className="text-orange-600 font-medium mt-2">
          Founder of Shri Chandreshwar Dham
        </p>

        <p className="text-gray-600 text-sm leading-7 mt-5">
          Akhoury Ravindra Prasad Ji is the revered founder of
          Shri Chandreshwar Dham. With deep devotion toward
          Sanatan Dharma and unwavering faith in Mahadev,
          he established the temple as a sacred spiritual space
          for devotees and community welfare.
        </p>

      </div>
    </div>

    {/* ===== PERSON 2 ===== */}
    <div
      className="
        group bg-white rounded-[30px]
        overflow-hidden border border-orange-100
        shadow-md hover:shadow-2xl
        transition-all duration-500
        hover:-translate-y-3
      "
    >

      {/* Image */}
      <div className="relative h-[380px] overflow-hidden">

        <img
          src="/images/person2.jpg"
          alt="Dr. A.K Raghvan"
          className="
            w-full h-full object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />

        <div className="
          absolute inset-0
          bg-gradient-to-t
          from-black/60 via-black/10 to-transparent
        "></div>

        {/* Role Badge */}
        <div className="
          absolute bottom-5 left-5
          bg-white/90 backdrop-blur-md
          px-4 py-2 rounded-full
          text-sm font-semibold text-orange-700
          shadow-md
        ">
          Managing Trustee & Cultural Guide
        </div>

      </div>

      {/* Content */}
      <div className="p-7">

        <h3 className="text-2xl font-bold text-gray-800">
          Dr. A.K Raghvan
        </h3>

        <p className="text-orange-600 font-medium mt-2">
          Managing Trustee
        </p>

        <p className="text-gray-600 text-sm leading-7 mt-5">
          Dr. A.K Raghvan, son of the founder, continues the
          spiritual legacy of Shri Chandreshwar Dham through
          his leadership, devotion, and dedication toward
          preserving temple traditions, religious programs,
          and community service initiatives.
        </p>

      </div>
    </div>

    {/* ===== PERSON 3 ===== */}
    <div
      className="
        group bg-white rounded-[30px]
        overflow-hidden border border-orange-100
        shadow-md hover:shadow-2xl
        transition-all duration-500
        hover:-translate-y-3
      "
    >

      {/* Image */}
      <div className="relative h-[380px] overflow-hidden">

        <img
          src="/images/person3.jpg"
          alt="Dr. Nidhi Bharti"
          className="
            w-full h-full object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />

        <div className="
          absolute inset-0
          bg-gradient-to-t
          from-black/60 via-black/10 to-transparent
        "></div>

        {/* Role Badge */}
        <div className="
          absolute bottom-5 left-5
          bg-white/90 backdrop-blur-md
          px-4 py-2 rounded-full
          text-sm font-semibold text-orange-700
          shadow-md
        ">
          Youth & Community Development Head
        </div>

      </div>

      {/* Content */}
      <div className="p-7">

        <h3 className="text-2xl font-bold text-gray-800">
          Dr. Nidhi Bharti
        </h3>

        <p className="text-orange-600 font-medium mt-2">
          Community Development Head
        </p>

        <p className="text-gray-600 text-sm leading-7 mt-5">
          Dr. Nidhi Bharti actively contributes toward the
          spiritual and social growth initiatives of the temple.
          Her compassionate leadership supports youth engagement,
          educational programs, women empowerment, and stronger
          community connections through seva and cultural values.
        </p>

      </div>
    </div>

  </div>

</section>
      {/* ===== FOUNDER MESSAGE ===== */}
<section className="bg-gradient-to-r from-purple-50 via-white to-purple-100 py-24">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-semibold text-purple-900 text-center mb-16">
      Founder’s Message
    </h2>

    <div className="grid md:grid-cols-2 gap-14 items-center">

      {/* LEFT SIDE – FOUNDER IMAGE */}
      <div className="flex justify-center">
        <div className="relative">
           <img
      src="/images/Founder'sImage.jpeg"
      alt="Founder"
      className="
        w-[600px]
        h-[420px] 
        object-cover 
        rounded-3xl 
        shadow-2xl 
        border-4 border-white
      "
    />

          {/* soft glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-purple-200/10 blur-xl"></div>
        </div>
      </div>

      {/* RIGHT SIDE – MESSAGE */}
      <div className="text-gray-700 leading-relaxed text-lg space-y-6">
        <p>
          Shri Chandreshwar Dham was established with a sacred vision —
          to create a divine space where devotion, discipline, and
          spirituality guide every soul toward inner peace.
        </p>

        <p>
          The temple is not merely a place of worship, but a spiritual
          center for cultural preservation, social upliftment, and
          community harmony. Every initiative taken under this sacred
          roof is dedicated to service, faith, and divine purpose.
        </p>

        <p className="text-purple-900 font-semibold text-xl pt-4">
          —  Shri Akhoury Ravindra Prasad
        </p>

        <p className="text-sm text-gray-500">
          Founder, Shri Chandreshwar Dham
        </p>
      </div>

    </div>
  </div>
</section>


    {/* ===== FOOTER (SAME AS YOURS) ===== */} <footer className="bg-[#0A1A2F] py-10 mt-16 text-white"> <div className="max-w-6xl mx-auto px-4"> <div className="flex flex-col md:flex-row items-center justify-between gap-5"> <div> <h3 className="text-xl font-bold text-center md:text-left"> Sri Chandreshwar Dham Mandir </h3> <p className="text-white/70 text-sm mt-1 text-center md:text-left"> Govind Nagar, Vrindavan, Uttar Pradesh 281121, India </p> </div> <div className="flex gap-4 text-white/80"> {[FaFacebook, FaInstagram, FaYoutube, FaTwitter].map((Icon, i) => ( <a key={i} href="#" className="hover:text-white transition"> <Icon className="text-xl" /> </a> ))} </div> </div> <div className="border-t border-white/20 mt-6 mb-4"></div> <div className="flex flex-col md:flex-row justify-between text-sm text-white/70 gap-3"> <p>© {new Date().getFullYear()} All rights reserved.</p> <div className="flex gap-6"> <a href="#" className="hover:text-white transition"> Privacy Policy </a> <a href="#" className="hover:text-white transition"> Terms & Conditions </a> <a href="#" className="hover:text-white transition"> Contact </a> </div> </div> </div> </footer>

    </main>
  );
}
