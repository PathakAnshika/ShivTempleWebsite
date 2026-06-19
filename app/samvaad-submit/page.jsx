"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SamvaadSubmit() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    location: "",
    category: "",
    title: "",
    description: "",
    phone: "",
    email: "",
    file: null,
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setForm({ ...form, file: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(form).forEach((key) => {
      data.append(key, form[key]);
    });

    const res = await fetch("/api/samvaad-submit", {
      method: "POST",
      body: data,
    });

    const result = await res.json();

    if (result.success) {
      setShowPopup(true);

      setForm({
        name: "",
        location: "",
        category: "",
        title: "",
        description: "",
        phone: "",
        email: "",
        file: null,
      });
    }
  };

  return (
    <main className="bg-[#f6f3ee] min-h-screen text-gray-800">
      {/* Back */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 pt-4 md:pt-6">
        <button
          onClick={() => router.back()}
          className="
            text-sm md:text-base
            text-gray-600 hover:text-black
            bg-white px-3 py-2
            rounded-full shadow-sm border
          "
        >
          ← Back
        </button>
      </div>

      {/* Header */}
      <section className="text-center py-10 md:py-14 px-4 md:px-6 max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#c59d45]">
          Submit Your Contribution
        </h1>

        <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
          Share your devotional poem, essay, thought, or spiritual message
          to inspire society through Samvaad.
        </p>
      </section>

      {/* Guidelines */}
      <section className="max-w-3xl mx-auto px-4 md:px-6 mb-8 md:mb-10">
        <div className="bg-white border rounded-xl p-5 md:p-6 shadow-sm">
          <h2 className="font-semibold mb-3 text-base md:text-lg">
            Submission Guidelines
          </h2>

          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Content must be original.</li>
            <li>• Languages accepted: Hindi, English, Sanskrit.</li>
            <li>• Avoid political or offensive content.</li>
            <li>• Selected entries may be published on Samvaad.</li>
          </ul>
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-3xl mx-auto px-4 md:px-6 pb-14 md:pb-20">
        <form
          onSubmit={handleSubmit}
          className="bg-white border rounded-xl p-5 md:p-8 space-y-5 shadow-sm"
        >
          <div>
            <label className="block mb-1 font-medium text-sm md:text-base">
              Full Name *
            </label>

            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border px-3 py-3 rounded-md text-sm md:text-base"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm md:text-base">
              City / Country
            </label>

            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full border px-3 py-3 rounded-md text-sm md:text-base"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm md:text-base">
              Category *
            </label>

            <select
              name="category"
              required
              value={form.category}
              onChange={handleChange}
              className="w-full border px-3 py-3 rounded-md text-sm md:text-base"
            >
              <option value="">Select</option>
              <option>Poem</option>
              <option>Essay</option>
              <option>Thought</option>
              <option>Spiritual Message</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm md:text-base">
              Title *
            </label>

            <input
              type="text"
              name="title"
              required
              value={form.title}
              onChange={handleChange}
              className="w-full border px-3 py-3 rounded-md text-sm md:text-base"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm md:text-base">
              Short Description (Optional)
            </label>

            <textarea
              name="description"
              rows="4"
              placeholder="Briefly describe your submission"
              value={form.description}
              onChange={handleChange}
              className="w-full border px-3 py-3 rounded-md text-sm md:text-base"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm md:text-base">
              Upload Your Contribution *
            </label>

            <input
              type="file"
              required
              onChange={handleChange}
              className="w-full border px-3 py-3 rounded-md bg-white text-sm"
            />

            <p className="text-xs text-gray-500 mt-2">
              Accepted formats: PDF, DOC, JPG, PNG (Max 5MB)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium text-sm md:text-base">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border px-3 py-3 rounded-md text-sm md:text-base"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm md:text-base">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border px-3 py-3 rounded-md text-sm md:text-base"
              />
            </div>
          </div>

          <button
            type="submit"
            className="
              w-full bg-[#c59d45]
              text-white py-3 md:py-4
              rounded-md
              text-sm md:text-base
              hover:opacity-90 transition
            "
          >
            Submit Contribution
          </button>
        </form>
      </section>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center w-full max-w-sm">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              ✅ Submitted Successfully
            </h2>

            <p className="text-gray-600 text-sm md:text-base mb-6">
              Thank you for your contribution.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-black transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </main>
  );
}