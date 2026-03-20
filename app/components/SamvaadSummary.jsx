"use client";

import { useRouter } from "next/navigation";

export default function SamvaadSummary() {
  const router = useRouter();

  const highlights = [
    {
      title: "The Light of Devotion",
      type: "Poem",
    },
    {
      title: "Dharma in Modern Life",
      type: "Essay",
    },
    {
      title: "Message for Youth",
      type: "Thought",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">

      <div className="max-w-6xl mx-auto text-center">

        {/* heading */}
        <h2 className="text-3xl font-semibold mb-4">
          Samvaad
        </h2>

        {/* summary */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Samvaad is a cultural and spiritual expression platform where
          devotees, scholars, and youth share poems, essays, thoughts,
          and devotional messages that inspire society.
        </p>

        {/* highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="border rounded-lg p-6 bg-white hover:shadow-sm transition"
            >
              <p className="text-sm text-gray-500">{item.type}</p>
              <h3 className="font-semibold mt-1">{item.title}</h3>
            </div>
          ))}
        </div>

        {/* button */}
        <button
          onClick={() => router.push("/samvaad")}
          className="px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-black transition"
        >
          Explore Samvaad
        </button>

      </div>
    </section>
  );
}