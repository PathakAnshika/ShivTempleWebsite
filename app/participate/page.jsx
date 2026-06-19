"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ParticipatePage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    age: "",
    category: "",
    school: "",
    phone: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/participate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      await res.json();

      setShowPopup(true);

      setForm({
        name: "",
        age: "",
        category: "",
        school: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Submit Error:", error);
    }
  };

  return (
    <main className="bg-white min-h-screen text-gray-800">
      {/* BACK BUTTON */}
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

      {/* HEADER */}
      <section className="text-center py-10 md:py-12 px-4 md:px-6 max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Participate in Vidha Competitions
        </h1>

        <p className="mt-4 text-sm md:text-base text-gray-600">
          Fill the form below to submit your participation entry.
        </p>
      </section>

      {/* FORM */}
      <section className="max-w-2xl mx-auto px-4 md:px-6 pb-14 md:pb-20">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 border rounded-xl p-5 md:p-8 space-y-5 shadow-sm"
        >
          {/* Name */}
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
              className="w-full border px-3 py-3 rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Age + Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium text-sm md:text-base">
                Age *
              </label>

              <input
                type="number"
                name="age"
                required
                value={form.age}
                onChange={handleChange}
                className="w-full border px-3 py-3 rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-gray-300"
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
                className="w-full border px-3 py-3 rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <option value="">Select</option>
                <option>Essay Writing</option>
                <option>Art & Drawing</option>
                <option>Poetry</option>
              </select>
            </div>
          </div>

          {/* School */}
          <div>
            <label className="block mb-1 font-medium text-sm md:text-base">
              School / College
            </label>

            <input
              type="text"
              name="school"
              value={form.school}
              onChange={handleChange}
              className="w-full border px-3 py-3 rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium text-sm md:text-base">
              Contact Number *
            </label>

            <input
              type="tel"
              name="phone"
              required
              pattern="[0-9]{10}"
              value={form.phone}
              onChange={handleChange}
              placeholder="10 digit mobile number"
              className="w-full border px-3 py-3 rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-sm md:text-base">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border px-3 py-3 rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium text-sm md:text-base">
              Message (Optional)
            </label>

            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="w-full border px-3 py-3 rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full bg-gray-900 text-white
              py-3 md:py-4
              rounded-md
              text-sm md:text-base
              hover:bg-black
              transition
            "
          >
            Submit Entry
          </button>
        </form>
      </section>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center w-full max-w-sm">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              ✅ Submitted Successfully
            </h2>

            <p className="text-gray-600 text-sm md:text-base mb-6">
              Thank you for participating.
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