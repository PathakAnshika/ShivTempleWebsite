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
          value={`₹${donations.reduce((s, d) => s + (d.amount || 0), 0)}`}
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
       <table className="w-full text-sm table-fixed">
        <thead className="bg-purple-100 text-purple-800">
  <tr className="border-b hover:bg-purple-50 transition duration-200">
   <th className="p-4 text-left w-[25%]">Donor</th>
<th className="p-4 text-center w-[5%]">Seva</th>
<th className="p-4 text-right w-[14%]">Amount</th>
<th className="p-4 text-center w-[15%]">Status</th>
<th className="p-4 text-left w-[5%]">Date</th>
  </tr>
</thead>

   <tbody>
  {donations.map(d => (
    <tr
      key={d.id}
      className="border-b hover:bg-purple-50 transition"
    >
      {/* Donor */}
     <td className="px-4 py-5 text-left">
       <p className="font-semibold text-gray-800 leading-tight">
  {d.donor_name}
</p>
<p className="text-xs text-gray-500 mt-1">
  {d.email || "-"}
</p>
        <p className="text-xs text-gray-500">
          {d.email || "-"}
        </p>
      </td>

      {/* Seva */}
      <td className="p-4 text-left text-gray-700">
        {d.seva_type || "-"}
      </td>

      {/* Amount */}
    <td className="px-4 py-5 text-right pr-6 font-semibold text-green-600 tracking-wide">
  ₹{d.amount}
</td>
      {/* Status */}
     <td className="px-4 py-5 text-center align-middle">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            d.status === "success"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {d.status}
        </span>
      </td>

      {/* Date */}
     <td className="px-4 py-5 text-right pr-8">
  <div className="flex flex-col items-end leading-tight">
    <span className="text-gray-800 font-medium">
      {new Date(d.created_at).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })}
    </span>

    <span className="text-xs text-gray-500 mt-1">
      {new Date(d.created_at).toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </span>
  </div>
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