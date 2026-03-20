"use client";

import { useRouter } from "next/navigation";

export default function VidhaPage() {
  const router = useRouter();

  return (
    <main className="bg-white text-gray-800 min-h-screen">

      {/* BACK BUTTON */}
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <button
          onClick={() => router.back()}
          className="text-sm text-gray-600 hover:text-black"
        >
          ← Back
        </button>
      </div>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-semibold text-gray-900">
          Vidha Competitions
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          Shri Chandreshwar Dham organizes Vidha Competitions to encourage
          creativity, spiritual awareness, and cultural understanding among
          children and youth. These competitions provide a platform to express
          devotion through writing, art, and poetry while strengthening moral
          and cultural values.
        </p>
      </section>

      {/* OBJECTIVE */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">
            Objective of the Program
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>• Encourage spiritual and moral values among youth</li>
            <li>• Promote creativity and self-expression</li>
            <li>• Preserve Indian culture and traditions</li>
            <li>• Develop ethical thinking and cultural awareness</li>
          </ul>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-center mb-12">
          Competition Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="font-semibold text-lg mb-2">Essay Writing</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Participants express spiritual thoughts, ethical values, and
              cultural understanding through meaningful essays.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Art & Drawing</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Devotional artwork inspired by temple traditions, divine symbols,
              and Indian cultural heritage is encouraged.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Poetry</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Participants compose devotional poems expressing faith,
              spirituality, and cultural pride.
            </p>
          </div>

        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">
            Eligibility
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Participation is open to school and college students. Age categories
            may be defined depending on the competition requirements. Both boys
            and girls are encouraged to participate.
          </p>
        </div>
      </section>

      {/* FESTIVALS */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-4">
          Competitions Conducted During
        </h2>

        <p className="text-gray-700 leading-relaxed">
          The Vidha Competitions are organized during major religious and
          cultural occasions including Ram Navami, Hanuman Jayanti,
          Swatantrata Diwas, Tulsi Jayanti, Vishwakarma Puja, and Geeta Jayanti.
        </p>
      </section>

      {/* GUIDELINES */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">
            Submission Guidelines
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>• Entries must be original work.</li>
            <li>• Plagiarism is strictly prohibited.</li>
            <li>• Languages accepted: Hindi, English, Sanskrit.</li>
            <li>• Essay length: 500–800 words.</li>
            <li>• Poetry: up to 30 lines.</li>
            <li>• Drawing: A4 sheet format.</li>
          </ul>
        </div>
      </section>

      {/* PARTICIPATION PROCESS */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-4">
          Participation Process
        </h2>

        <ol className="space-y-2 text-gray-700">
          <li>1. Register online or at the temple office.</li>
          <li>2. Submit your entry before the specified deadline.</li>
          <li>3. Entries are evaluated by an expert panel.</li>
          <li>4. Winners are announced during festival celebrations.</li>
        </ol>
      </section>

      {/* AWARDS */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">
            Awards & Recognition
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>• Certificates and awards for winners</li>
            <li>• Recognition during festival celebrations</li>
            <li>• Winning entries published in the Samvaad section</li>
            <li>• Appreciation and recognition on official platforms</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h3 className="text-2xl font-semibold mb-4">
          Express Your Creativity & Devotion
        </h3>

        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Participate in Vidha Competitions and contribute to the preservation
          of our spiritual and cultural heritage.
        </p>

        <button onClick={() => router.push("/participate")}className="px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-black">
          Participate Now
        </button>
      </section>

    </main>
  );
}