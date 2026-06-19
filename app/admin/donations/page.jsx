"use client";

import { useEffect, useState } from "react";

export default function AdminDonations() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/donations")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setDonations(data.donations || []);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[40vh]">
        <p className="text-sm md:text-base text-purple-700 animate-pulse">
          Loading donations...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5 md:space-y-6 px-4 md:px-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700">
          💰 Donations Management
        </h1>

        <p className="text-sm md:text-base text-gray-600 mt-1">
          Track all temple donations & seva contributions
        </p>
      </div>

      {/* SUMMARY */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        <SummaryCard
          title="Total Donations"
          value={`₹${(donations || []).reduce(
            (s, d) => s + Number(d.amount || 0),
            0
          )}`}
        />

        <SummaryCard
          title="Total Entries"
          value={donations?.length || 0}
        />

        <SummaryCard
          title="Successful"
          value={
            donations.filter(
              (d) => d.status === "success"
            ).length
          }
        />
      </div>

      {/* TABLE / CARDS */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-purple-100 text-purple-800">
              <tr>
                <th className="p-4 text-left">
                  Donor
                </th>

                <th className="p-4 text-left">
                  Purpose
                </th>

                <th className="p-4 text-right">
                  Amount
                </th>

                <th className="p-4 text-center">
                  Status
                </th>

                <th className="p-4 text-right">
                  Date
                </th>
              </tr>
            </thead>

            <tbody>
              {donations.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-10 text-gray-500"
                  >
                    No donations found
                  </td>
                </tr>
              ) : (
                donations.map((d) => (
                  <tr
                    key={d.id}
                    className="border-b hover:bg-purple-50 transition"
                  >
                    <td className="px-4 py-5">
                      <p className="font-semibold text-gray-800">
                        {d.donor_name || "-"}
                      </p>

                      <p className="text-xs text-gray-500 mt-1">
                        {d.email || "-"}
                      </p>
                    </td>

                    <td className="p-4">
                      {d.purpose || "-"}
                    </td>

                    <td className="p-4 text-right font-semibold text-green-600">
                      ₹{d.amount || 0}
                    </td>

                    <td className="p-4 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          d.status === "success"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {d.status || "pending"}
                      </span>
                    </td>

                    <td className="p-4 text-right">
                      {d.created_at ? (
                        <div className="flex flex-col items-end">
                          <span className="font-medium">
                            {new Date(
                              d.created_at
                            ).toLocaleDateString(
                              "en-IN",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </span>

                          <span className="text-xs text-gray-500">
                            {new Date(
                              d.created_at
                            ).toLocaleTimeString(
                              "en-IN",
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )}
                          </span>
                        </div>
                      ) : (
                        "-"
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden p-4 space-y-4">
          {donations.length === 0 ? (
            <div className="text-center text-gray-500 py-6">
              No donations found
            </div>
          ) : (
            donations.map((d) => (
              <div
                key={d.id}
                className="border rounded-xl p-4 shadow-sm"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {d.donor_name || "-"}
                    </h3>

                    <p className="text-xs text-gray-500">
                      {d.email || "-"}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      d.status === "success"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {d.status || "pending"}
                  </span>
                </div>

                <div className="mt-3 space-y-2 text-sm">
                  <p>
                    <span className="font-medium">
                      Purpose:
                    </span>{" "}
                    {d.purpose || "-"}
                  </p>

                  <p className="font-semibold text-green-600">
                    ₹{d.amount || 0}
                  </p>

                  <p className="text-xs text-gray-500">
                    {d.created_at
                      ? new Date(
                          d.created_at
                        ).toLocaleString("en-IN")
                      : "-"}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function SummaryCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 md:p-6 border border-gray-100">
      <p className="text-sm md:text-base text-gray-500">
        {title}
      </p>

      <p className="text-2xl md:text-3xl font-bold text-purple-700 mt-1">
        {value}
      </p>
    </div>
  );
}