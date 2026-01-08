"use client";
import { useEffect, useState } from "react";

export default function AdminDonations() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/donations")
      .then(res => res.json())
      .then(data => {
        if (data.success) setDonations(data.donations);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <p className="text-purple-700 animate-pulse">
        Loading donations...
      </p>
    );
  }

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-purple-700">
          💰 Donations Management
        </h1>
        <p className="text-gray-600">
          Track all temple donations & seva contributions
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard
          title="Total Donations"
          value={`₹${donations.reduce((s, d) => s + d.amount, 0)}`}
        />
        <SummaryCard
          title="Total Entries"
          value={donations.length}
        />
        <SummaryCard
          title="Successful"
          value={donations.filter(d => d.status === "success").length}
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-purple-100 text-purple-800">
            <tr>
              <th className="p-3 text-left">Donor</th>
              <th className="p-3">Seva</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {donations.map(d => (
              <tr
                key={d.id}
                className="border-b hover:bg-purple-50 transition"
              >
                <td className="p-3">
                  <p className="font-semibold">{d.donor_name}</p>
                  <p className="text-xs text-gray-500">{d.email}</p>
                </td>

                <td className="p-3">{d.seva_type}</td>

                <td className="p-3 font-semibold text-green-600">
                  ₹{d.amount}
                </td>

                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium
                    ${d.status === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"}`}>
                    {d.status}
                  </span>
                </td>

                <td className="p-3 text-gray-600">
                  {d.created_at}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {donations.length === 0 && (
          <p className="text-center py-6 text-gray-500">
            No donations found
          </p>
        )}
      </div>
    </div>
  );
}

/* ---------------- Components ---------------- */

function SummaryCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-gray-500">{title}</p>
      <p className="text-3xl font-bold text-purple-700 mt-1">
        {value}
      </p>
    </div>
  );
}
