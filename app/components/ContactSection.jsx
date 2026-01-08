"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ContactSection() {
  const faqs = [
    {
      q: "What are the temple darshan timings?",
      a: "Morning 6:00 AM – 12:00 PM & Evening 4:00 PM – 9:00 PM.",
    },
    {
      q: "How can I join temple membership?",
      a: "You can join from the Membership section inside your dashboard.",
    },
    {
      q: "Do you conduct special pooja bookings?",
      a: "Yes, temple offers various pooja services. Contact us for details.",
    },
    {
      q: "How can I donate online?",
      a: "Go to the 'Become a Donor' section and complete the donation form.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  // FORM STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // WHATSAPP HANDLER (ADMIN RECEIVES MESSAGE)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields 🙏");
      return;
    }

    const whatsappMessage = `
🙏 *New Contact Message – Shiv Mandir Website*

👤 Name: ${formData.name}
📧 Email: ${formData.email}

📝 Message:
${formData.message}
    `;

    const adminNumber = "9431550287"; 
    // 🔴 YAHAN APNA / TEMPLE WHATSAPP NUMBER DALO (91 ke saath, no +, no space)

    const whatsappURL = `https://wa.me/${adminNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // WhatsApp opens for USER, message goes to ADMIN number
    window.open(whatsappURL, "_blank");

    // Clear form after submit
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#fcf8ff] via-[#faf6ff] to-[#f2ecff]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-purple-800 text-center"
        >
          Contact Us
        </motion.h2>

        <p className="text-center text-gray-600 max-w-xl mx-auto mt-3 mb-12">
          Have questions or need assistance? We're here to help and guide you 🙏
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT: CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-xl rounded-2xl p-8 border border-purple-100"
          >
            <h3 className="text-2xl font-semibold text-purple-700 mb-6">
              📩 Send Us a Message
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm text-gray-700 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
                  placeholder="Write your message"
                ></textarea>
              </div>

              {/* CLEAN BUTTON TEXT (NO CONFUSION) */}
              <button
                type="submit"
                className="w-full bg-purple-700 hover:bg-purple-800 transition text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
              >
                Send Message 🙏
              </button>
            </form>
          </motion.div>

          {/* RIGHT: FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-purple-700 mb-6">
              ❓ Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              {faqs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl border border-purple-100 shadow hover:shadow-md transition"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="font-medium text-gray-800">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`transform transition ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openIndex === index && (
                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
