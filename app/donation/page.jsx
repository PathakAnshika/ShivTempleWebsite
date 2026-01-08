"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DonationPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
  });

  const donationOptions = [
    { id: 1, title: "Aarti Seva", amount: 501, desc: "Offer your devotion in daily Aarti." },
    { id: 2, title: "Prasad Seva", amount: 1100, desc: "Help distribute sacred prasad to devotees." },
    { id: 3, title: "Temple Maintenance", amount: 2100, desc: "Support cleanliness, lighting & upkeep." },
    { id: 4, title: "Festival Support", amount: 5100, desc: "Contribute toward festival pooja & decoration." },
  ];

  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleCardSelect = (opt) => {
    setSelected(opt.id);
    setFormData((p) => ({ ...p, amount: opt.amount, message: opt.title }));
  };

  const handleDonate = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.amount) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: formData.amount }),
      });

      const order = await res.json();

      const options = {
        key: "rzp_test_RZLiEvK0QO65pT",
        amount: order.amount,
        currency: order.currency,
        name: "Mandir Donation",
        description: formData.message,
        order_id: order.id,
        handler: () => alert("Donation Successful! 🙏"),
      };

      new window.Razorpay(options).open();
    } catch (err) {
      alert("Error processing payment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-white py-16 sm:py-20 px-4 sm:px-6">
      
      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="fixed left-4 top-4 sm:left-6 sm:top-6 px-4 py-2 bg-white/70 rounded-full border shadow-md hover:bg-white"
      >
        ← Back
      </button>

      {/* Heading */}
      <div className="text-center mb-10 sm:mb-12 mt-12">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-purple-800">
          Make a Divine Offering
        </h1>
        <p className="mt-3 text-sm sm:text-base text-gray-700 max-w-xl mx-auto">
          Your donation supports temple rituals, maintenance & spiritual activities.
        </p>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT FORM */}
        <div className="bg-white/80 p-6 sm:p-8 rounded-3xl shadow-xl backdrop-blur">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-700 text-center mb-6">
            Donor Information
          </h2>

          <div className="space-y-4">
            <input name="name" placeholder="Full Name" onChange={handleChange} className="input_donation" />
            <input name="email" placeholder="Email" onChange={handleChange} className="input_donation" />
            <input name="phone" placeholder="Phone" onChange={handleChange} className="input_donation" />
            <input name="amount" placeholder="Donation Amount (₹)" value={formData.amount} onChange={handleChange} className="input_donation" />
            <textarea name="message" placeholder="Message" onChange={handleChange} className="input_donation" />
          </div>

          <button
            onClick={handleDonate}
            disabled={loading}
            className="w-full mt-6 py-3 rounded-full bg-purple-700 text-white font-semibold shadow-lg hover:bg-purple-800 transition"
          >
            {loading ? "Processing..." : "Donate Securely 🙏"}
          </button>
        </div>

        {/* RIGHT CARDS */}
        <div className="bg-white/80 p-6 sm:p-8 rounded-3xl shadow-xl backdrop-blur">
          <h2 className="text-xl sm:text-3xl font-bold text-purple-700 text-center mb-6">
            Choose a Seva
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {donationOptions.map((opt) => (
              <div
                key={opt.id}
                onClick={() => handleCardSelect(opt)}
                className={`donation_card ${selected === opt.id ? "selected_card" : ""}`}
              >
                <h3 className="text-lg sm:text-xl font-bold">{opt.title}</h3>
                <p className="text-sm opacity-80 mt-1">{opt.desc}</p>
                <span className="text-lg font-semibold mt-2 block">₹{opt.amount}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Styles */}
      <style jsx>{`
        .input_donation {
          width: 100%;
          border: 1px solid #ddd;
          padding: 12px;
          border-radius: 12px;
          font-size: 14px;
        }
        .donation_card {
          padding: 18px;
          border-radius: 18px;
          background: white;
          border: 2px solid #ddd;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .donation_card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .selected_card {
          background: linear-gradient(to right, #7a3bbc, #9f5fff);
          color: white;
          border-color: transparent;
        }
      `}</style>
    </div>
  );
}
