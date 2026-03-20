"use client";

import { useRouter } from "next/navigation";

export default function SamvaadPage() {
  const router = useRouter();

  const posts = [
    {
      title: "दीप से दीप जलते रहें",
      type: "Poem",
      author: "Vidha Winner",
      excerpt:
        "भक्ति का प्रकाश जब हृदय में जगता है, तब जीवन का अंधकार स्वयं दूर हो जाता है।",
    },
    {
      title: "धर्म और आधुनिक जीवन",
      type: "Essay",
      author: "Guest Contributor",
      excerpt:
        "आधुनिक जीवन की भागदौड़ में धर्म हमें संतुलन, शांति और सही मार्ग प्रदान करता है।",
    },
    {
      title: "युवा पीढ़ी के लिए संदेश",
      type: "Thought",
      author: "Temple Committee",
      excerpt:
        "संस्कार, सेवा और सत्य के मार्ग पर चलकर युवा समाज का उज्ज्वल भविष्य बना सकते हैं।",
    },
  ];

  return (
    <main className="bg-[#f6f3ee] text-gray-800 min-h-screen">

      {/* Back */}
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <button
          onClick={() => router.back()}
          className="text-sm text-gray-600 hover:text-black"
        >
          ← Back
        </button>
      </div>

      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center px-6 py-16">
        <h1 className="text-4xl font-semibold text-[#c59d45]">
          Samvaad
        </h1>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Samvaad is a cultural and spiritual expression platform that
          preserves devotional creativity and meaningful reflections.
          Devotees, students, scholars, and well-wishers contribute
          poems, essays, thoughts, and spiritual messages.
        </p>
      </section>

      {/* CONTENT CATEGORIES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-center mb-12">
          Content Categories
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {["Poems", "Essays", "Thoughts", "Video Messages"].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg py-6 shadow-sm"
            >
              <h3 className="font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED EXPRESSIONS */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-semibold text-center mb-12">
            Featured Expressions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <div key={i} className="border rounded-lg p-6 bg-white shadow-sm">
                <p className="text-sm text-gray-500">{post.type}</p>

                <h3 className="font-semibold text-lg mt-1">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <p className="text-gray-500 text-xs mt-4">
                  — {post.author}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

     {/* WINNERS SECTION */}
<section className="py-20 px-6 bg-[#f0ece6]">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-2xl font-semibold mb-4 text-[#c59d45]">
      Vidha Competition Winners
    </h2>

    <p className="text-gray-700 max-w-2xl mx-auto mb-12">
      Selected essays and poems from Vidha Competition winners are
      published to honor creativity, devotion, and cultural excellence.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Winner 1 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <p className="text-xs text-[#c59d45] font-semibold uppercase">
          Essay Writing • 2025
        </p>
        <h3 className="font-semibold text-lg mt-2">
          धर्म और जीवन का संतुलन
        </h3>
        <p className="text-gray-500 text-sm mt-3">
          by Ananya Sharma
        </p>
      </div>

      {/* Winner 2 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <p className="text-xs text-[#c59d45] font-semibold uppercase">
          Poetry • 2025
        </p>
        <h3 className="font-semibold text-lg mt-2">
          भक्ति की ज्योति
        </h3>
        <p className="text-gray-500 text-sm mt-3">
          by Rahul Verma
        </p>
      </div>

      {/* Winner 3 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <p className="text-xs text-[#c59d45] font-semibold uppercase">
          Art & Expression • 2025
        </p>
        <h3 className="font-semibold text-lg mt-2">
          दिव्यता का अनुभव
        </h3>
        <p className="text-gray-500 text-sm mt-3">
          by Meera Gupta
        </p>
      </div>

    </div>

  </div>
</section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h3 className="text-2xl font-semibold mb-4">
          Share Your Expression
        </h3>

        <p className="text-gray-700 mb-8 max-w-xl mx-auto">
          Devotees, students, and well-wishers are welcome to contribute
          poems, essays, thoughts, and devotional messages.
        </p>

        <button
          onClick={() => router.push("/samvaad-submit")}
          className="px-8 py-3 bg-[#c59d45] text-white rounded-full hover:scale-105 transition"
        >
          Submit Contribution
        </button>
      </section>

    </main>
  );
}