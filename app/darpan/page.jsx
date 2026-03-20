"use client";

export default function DarpanPage() {

  const donations = [
    {
      name: "Anand Sharma",
      amount: "₹5000",
      purpose: "Goshala",
      date: "10 Mar 2026",
    },
    {
      name: "Anonymous Donor",
      amount: "₹2000",
      purpose: "Temple Construction",
      date: "5 Mar 2026",
    },
    {
      name: "Priya Singh",
      amount: "₹1000",
      purpose: "Sanskriti Bhavan",
      date: "2 Mar 2026",
    },
  ];

  return (
    <main className="bg-white min-h-screen text-gray-800">

      {/* INTRO */}
      <section className="py-24 px-6 text-center bg-[#FFF7ED]">

        <h1 className="text-4xl font-semibold text-orange-700 mb-6">
          Darpan
        </h1>

        <p className="max-w-3xl mx-auto text-gray-600">
          Shri Chandreshwar Dham believes in transparency and accountability.
          This section reflects the list of donations and donors who have
          supported the temple initiatives.
        </p>

      </section>


      {/* TABLE */}
      <section className="py-20 px-6">

        <div className="max-w-5xl mx-auto overflow-x-auto">

          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">

            <thead className="bg-orange-50">

              <tr className="text-left">

                <th className="p-4">Donor Name</th>
                <th className="p-4">Donation Amount</th>
                <th className="p-4">Purpose</th>
                <th className="p-4">Date</th>

              </tr>

            </thead>

            <tbody>

              {donations.map((donation, i) => (

                <tr key={i} className="border-t">

                  <td className="p-4">{donation.name}</td>
                  <td className="p-4">{donation.amount}</td>
                  <td className="p-4">{donation.purpose}</td>
                  <td className="p-4">{donation.date}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

    </main>
  );
}