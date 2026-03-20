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

  console.log("Frontend Data:", form);

  try {
    const res = await fetch("/api/participate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log("Server Response:", data);

    // popup show
    setShowPopup(true);

    // reset form
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

      {/* Back */}
      <div className="max-w-5xl mx-auto px-6 pt-6">
        <button
          onClick={() => router.back()}
          className="text-sm text-gray-500 hover:text-black"
        >
          ← Back
        </button>
      </div>

      {/* Header */}
      <section className="text-center py-12 px-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold">
          Participate in Vidha Competitions
        </h1>
        <p className="mt-4 text-gray-600">
          Fill the form below to submit your participation entry.
        </p>
      </section>

      {/* FORM */}
      <section className="max-w-2xl mx-auto px-6 pb-20">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 border rounded-lg p-8 space-y-5"
        >

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name *</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>

          {/* Age + Category */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Age *</label>
              <input
                type="number"
                name="age"
                required
                value={form.age}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Category *</label>
              <select
                name="category"
                required
                value={form.category}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
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
            <label className="block mb-1 font-medium">
              School / College
            </label>
            <input
              type="text"
              name="school"
              value={form.school}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium">
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
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium">
              Message (Optional)
            </label>
            <textarea
              name="message"
              rows="3"
              value={form.message}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>

          {/* Submit */}
          <button className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-black">
            Submit Entry
          </button>

        </form>
      </section>

      {/* ✅ SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm">
            <h2 className="text-xl font-semibold mb-2">
              ✅ Submitted Successfully
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for participating.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-6 py-2 bg-gray-900 text-white rounded-md"
            >
              OK
            </button>
          </div>
        </div>
      )}

    </main>
  );
}