"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";


export default function DonationPage() {

  const router = useRouter();
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  amount: "",
  message: "",
  show_public: true,
});

const donationOptions = [
  { id: 1, title: "Aarti Seva", amount: 501, desc: "Offer your devotion in daily Aarti." },
  { id: 2, title: "Prasad Seva", amount: 1100, desc: "Help distribute sacred prasad to devotees." },
  { id: 3, title: "Temple Maintenance", amount: 2100, desc: "Support temple upkeep & lighting." },
  { id: 4, title: "Festival Support", amount: 5100, desc: "Contribute to special festival poojas." },
];

  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.async = true;
    document.body.appendChild(s);
    fetchDonors();
  }, []);

   const fetchDonors = async ()=>{

    const res = await fetch("/api/darpan");
    const data = await res.json();
      console.log("DONORS DATA:", data);
  console.log("IS ARRAY:", Array.isArray(data));

    if (Array.isArray(data)) {
  setDonors(data);
} else {
  console.error("API Error:", data);
  setDonors([]);
}

  };


  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

const handleCardSelect = (opt) => {

  if (selected === opt.id) {

    // unselect
    setSelected(null);
    setFormData((p) => ({ ...p, amount: "", message: "" }));

  } else {

    // select
    setSelected(opt.id);
    setFormData((p) => ({ ...p, amount: opt.amount, message: opt.title }));

  }

};

  const handleDonate = async () => {

  if (!formData.name || !formData.email || !formData.phone || !formData.amount) {
    alert("Please fill all required fields.");
    return;
  }

  try {

    setLoading(true);

    // STEP 1 → create razorpay order
    const res = await fetch("/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        amount: formData.amount
      })
    });

    const order = await res.json();

    const options = {
      key: "rzp_test_RZLiEvK0QO65pT",
      amount: order.amount,
      currency: order.currency,
      name: "Mandir Donation",
      description: formData.message,
      order_id: order.id,

      handler: async function (response) {

        // STEP 2 → save donation in DB
        await fetch("/api/save-donation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            amount: formData.amount,
            message: formData.message,
            show_public: formData.show_public,
            payment_id: response.razorpay_payment_id
          })
        });

        alert("Donation Successful! 🙏");

      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

  } catch (err) {

    alert("Error processing payment");

  } finally {

    setLoading(false);

  }
};
  
  return (
<>
 <div className="min-h-screen bg-[#fafafa] pt-20 sm:pt-10 px-4 sm:px-6">

      {/* BACK */}
  <button
  onClick={() => router.push("/")}
  className="fixed left-3 top-3 sm:left-6 sm:top-6 z-50 bg-white text-gray-800 px-3 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base rounded-full shadow-lg border border-gray-200 hover:bg-gray-100 transition-all"
>
  ← Back
</button>

      {/* TITLE */}
      <div className="text-center mb-10 sm:mb-14">

       <h1
  className="
    text-2xl
    sm:text-4xl
    md:text-5xl
    font-semibold
    text-purple-700
    leading-tight
  "
>
  Offer Your Seva
</h1>

       <p
  className="
    text-gray-600
    mt-3 sm:mt-4
    max-w-xl
    mx-auto
    text-sm sm:text-base
    leading-7
    px-2
  "
>
  Your contribution supports temple rituals, community service,
  and preservation of spiritual traditions.
</p>

      </div>


      {/* MAIN GRID */}
     <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* DONOR FORM */}
     <div className="mb-8 max-w-[620px]">

  <h2 className="text-2xl font-bold text-gray-800">
    Donor Information
  </h2>

  <p className="text-gray-500 mt-2">
    Please provide your details to complete your seva contribution.
  </p>


          <div className="space-y-4">

           <div className="grid grid-cols-2 gap-4">

  <input
    name="name"
    placeholder="Full Name"
    onChange={handleChange}
    className="input"
  />

  <input
    name="email"
    placeholder="Email"
    onChange={handleChange}
    className="input"
  />

</div>

         <div className="grid grid-cols-2 gap-4">

  <input
    name="phone"
    placeholder="Mobile Number"
    onChange={handleChange}
    className="input"
  />

  <input
    name="amount"
    placeholder="Amount"
    value={formData.amount}
    onChange={handleChange}
    className="input"
  />

</div>

<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Purpose of Donation
  </label>

  <input
    type="text"
    name="message"
    placeholder="e.g. Gau Seva, Annadan, Temple Development"
    onChange={handleChange}
    className="input"
  />
</div>
         <div>
 <textarea
  name="message"
  placeholder="Write a message..."
  onChange={handleChange}
  className="input h-[60px] resize-none"
/>
</div>
           <div className="mt-4">

  <div className="p-4 bg-purple-50 border border-purple-100 rounded-xl">
<label className="flex items-center gap-2 text-xs text-gray-600">

 <input
  type="checkbox"
  checked={formData.show_public}
  onChange={(e) =>
    setFormData((p) => ({
      ...p,
      show_public: e.target.checked,
    }))
  }
/>

  Show my name in Darpan Transparency Section

</label>

  </div>

</div>

          </div>

        <button
  onClick={handleDonate}
  disabled={loading}
  className="
    w-full
    mt-5 sm:mt-6

    py-3 sm:py-4
    px-4

    rounded-xl

    text-sm sm:text-base
    font-semibold

    text-white
    bg-gradient-to-r
    from-purple-600
    to-purple-700

    shadow-lg

    hover:scale-[1.02]
    active:scale-95

    transition-all
  "
>
  {loading ? "Processing..." : "Donate Securely"}
</button>
        </div>


       {/* SEVA OPTIONS */}
<div>

 <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">
  Choose a Seva
</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

    {donationOptions.map((opt) => {

      const isSelected = selected === opt.id;

      return (

       <div
  key={opt.id}
  onClick={() => handleCardSelect(opt)}
  className={`
    relative
    cursor-pointer
    p-5 sm:p-6
    rounded-3xl
    border
    transition-all
    duration-300
    backdrop-blur-md

    ${
      isSelected
        ? `
          bg-gradient-to-br
          from-purple-600
          to-purple-700
          text-white
          border-purple-400
          ring-2 ring-purple-300
          shadow-xl
        `
        : `
          bg-white
          text-gray-800
          border-purple-100
          hover:border-purple-300
          hover:shadow-xl
          hover:-translate-y-1
        `
    }
  `}
>

          {/* TITLE */}
          <div className="flex justify-between items-center">

            <h3 className="font-semibold text-lg">
              {opt.title}
            </h3>

            {isSelected && (
              <span className="text-white text-sm bg-black/20 px-2 py-1 rounded">
                ✓
              </span>
            )}

          </div>

          {/* DESCRIPTION */}
          <p className="text-sm opacity-80 mt-2">
            {opt.desc}
          </p>

          {/* AMOUNT */}
          <span className="text-lg font-semibold mt-3 block">
            ₹{opt.amount}
          </span>

        </div>

      );

    })}

          </div>

        </div>

      </div>


      {/* DARPAN – TRANSPARENCY */}

{/* DARPAN – TRANSPARENCY */}

<section className="max-w-6xl mx-auto mt-28">

  {/* HEADER */}
  <div className="text-center mb-12">

    <h2 className="text-4xl font-semibold text-orange-700 mb-4">
      Darpan – Transparency
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
      Shri Chandreshwar Dham believes in transparency and accountability.
      All donations received for temple activities and seva are recorded
      and reflected here. Donors who prefer privacy may choose to remain
      anonymous.
    </p>

  </div>


  {/* TABLE */}
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">

    <table className="w-full text-left">

      <thead className="bg-orange-50 text-gray-700">

        <tr>
          <th className="p-5">Donor Name</th>
          <th className="p-5">Donation</th>
          <th className="p-5">Purpose</th>
        </tr>

      </thead>

      <tbody>

      {Array.isArray(donors) &&
  donors.map((d, i) => (

          <tr
            key={i}
            className="border-t hover:bg-orange-50 transition"
          >

            <td className="p-5 font-medium">
              {d.name}
            </td>

            <td className="p-5 text-orange-600 font-semibold">
              {d.amount}
            </td>

            <td className="p-5 text-gray-600">
              {d.purpose}
            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>


  {/* NOTE */}

  <p className="text-center text-sm text-gray-500 mt-6">
    *Donors may choose to remain anonymous if they prefer privacy.
  </p>


</section>


     <style jsx>{`

.input{
  width:100%;
  padding:12px;
  border:1px solid #d1d5db;
  border-radius:10px;
  font-size:14px;
  color:#111;
  background:white;
}

/* CARD FIX */
.donation_card{
  border:1px solid #e5e7eb;
  padding:20px;
  border-radius:16px;
  cursor:pointer;
  transition:0.3s;
  background:#ffffff;
}

/* HOVER */
.donation_card:hover{
  transform:translateY(-4px);
  box-shadow:0 10px 25px rgba(0,0,0,0.08);
  border-color:#facc15; /* yellow */
}

/* TEXT FIX */
.donation_card h3{
  color:#111827; /* dark */
}

.donation_card p{
  color:#6b7280; /* readable gray */
}

.donation_card span{
  color:#16a34a; /* green amount */
}

/* SELECTED (IMPORTANT FIX) */
.selected{
  background:#fff7ed; /* light orange, not full */
  border:2px solid #f97316;
  box-shadow:0 8px 20px rgba(249,115,22,0.2);
}

.selected h3{
  color:#c2410c;
}

.selected span{
  color:#c2410c;
}

`}</style>

    </div>

    {/* FOOTER */}
    <footer className="bg-[#0A1A2F] py-10 text-white">
      <div className="max-w-6xl mx-auto px-4">

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          <div>
            <h3 className="text-xl font-bold text-center md:text-left">
              Sri Chandreshwar Dham Mandir
            </h3>

            <p className="text-white/70 text-sm mt-1 text-center md:text-left">
              10 Km from St. Columbas College, Hazaribagh,
              Churchu Road, Chandwar, Jharkhand – 825301
            </p>
          </div>

          <div className="flex gap-4 text-white/80">
            {[FaFacebook, FaInstagram, FaYoutube, FaTwitter].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:text-white transition"
                >
                  <Icon className="text-xl" />
                </a>
              )
            )}
          </div>

        </div>

        <div className="border-t border-white/20 mt-6 mb-4"></div>

        <div className="flex flex-col md:flex-row justify-between text-sm text-white/70 gap-3">

          <p>
            © {new Date().getFullYear()} All rights reserved.
          </p>

          <div className="flex gap-6 flex-wrap">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>

            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>

        </div>

      </div>
    </footer>

  </>
);
}
