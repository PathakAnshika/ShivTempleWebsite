"use client";
import { useRouter } from "next/navigation";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

export default function AboutPage() {
  const router = useRouter();

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

    "use client";
import { useState } from "react";

export default function EminentPersonsSection() {

  // ✅ Separate data for each person
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: "Mahant Rajesh Giri",
      role: "Temple Head",
      image: "/images/person1.jpg",
      description:
        "Leading the spiritual vision and temple activities with devotion.",
    },

    {
      id: 2,
      name: "Pandit Sharma",
      role: "Spiritual Guide",
      image: "/images/person2.jpg",
      description:
        "Guiding devotees through sacred rituals and teachings.",
    },

    {
      id: 3,
      name: "Trustee Verma",
      role: "Trust Member",
      image: "/images/person3.jpg",
      description:
        "Managing temple welfare and community development initiatives.",
    },
  ]);

  // ✅ Update specific person
  const handleChange = (id, field, value) => {
    setPersons((prev) =>
      prev.map((person) =>
        person.id === id
          ? { ...person, [field]: value }
          : person
      )
    );
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-orange-50 to-white">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-orange-700">
          Eminent Personalities
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Meet the respected spiritual leaders and trustees guiding
          our temple community with devotion and dedication.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {persons.map((person) => (
          <div
            key={person.id}
            className="
              bg-white rounded-3xl overflow-hidden
              shadow-lg border border-orange-100
              hover:shadow-2xl hover:-translate-y-2
              transition-all duration-300
            "
          >

            {/* Image */}
            <div className="relative h-72 overflow-hidden">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="p-6">

              {/* Name */}
              <input
                type="text"
                value={person.name}
                onChange={(e) =>
                  handleChange(
                    person.id,
                    "name",
                    e.target.value
                  )
                }
                className="
                  w-full text-2xl font-bold
                  text-gray-800 bg-transparent
                  border-b border-gray-200
                  focus:outline-none focus:border-orange-500
                  mb-3
                "
              />

              {/* Role */}
              <input
                type="text"
                value={person.role}
                onChange={(e) =>
                  handleChange(
                    person.id,
                    "role",
                    e.target.value
                  )
                }
                className="
                  w-full text-orange-600 font-medium
                  bg-transparent
                  border-b border-gray-200
                  focus:outline-none focus:border-orange-500
                  mb-4
                "
              />

              {/* Description */}
              <textarea
                rows={4}
                value={person.description}
                onChange={(e) =>
                  handleChange(
                    person.id,
                    "description",
                    e.target.value
                  )
                }
                className="
                  w-full text-gray-600 text-sm leading-6
                  bg-transparent
                  border border-gray-200 rounded-xl
                  p-3
                  focus:outline-none focus:border-orange-500
                  resize-none
                "
              />

            </div>
          </div>
        ))}

      </div>
    </section>
  );
  
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
