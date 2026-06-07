"use client";

import { useEffect, useState } from "react";

export default function AdminDonations() {

  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("/api/admin/donations")

      .then((res) => res.json())

      .then((data) => {

        console.log("DONATION API:", data);

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

  /* ---------------- LOADING ---------------- */

  if (loading) {

    return (
      <p className="text-purple-700 animate-pulse">
        Loading donations...
      </p>
    );
  }

  return (

    <div className="space-y-6">

      {/* HEADER */}
      <div>

        <h1 className="text-3xl font-bold text-purple-700">
          💰 Donations Management
        </h1>

        <p className="text-gray-600">
          Track all temple donations &
          seva contributions
        </p>

      </div>

      {/* SUMMARY */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <SummaryCard
          title="Total Donations"

          value={`₹${
            (donations || []).reduce(
              (s, d) =>
                s + Number(d.amount || 0),
              0
            )
          }`}
        />

        <SummaryCard
          title="Total Entries"
          value={donations?.length || 0}
        />

        <SummaryCard
          title="Successful"

          value={
            donations.filter(
              (d) =>
                d.status === "success"
            ).length
          }
        />

      </div>

      {/* TABLE */}
      <div className="
        bg-white
        rounded-2xl
        shadow
        overflow-x-auto
      ">

        <table className="
          w-full
          text-sm
          table-fixed
        ">

          {/* HEAD */}
          <thead className="
            bg-purple-100
            text-purple-800
          ">

            <tr className="
              border-b
              hover:bg-purple-50
              transition
              duration-200
            ">

              <th className="p-4 text-left w-[25%]">
                Donor
              </th>

              <th className="p-4 text-center w-[15%]">
                Purpose
              </th>

              <th className="p-4 text-right w-[14%]">
                Amount
              </th>

              <th className="p-4 text-center w-[15%]">
                Status
              </th>

              <th className="p-4 text-left w-[20%]">
                Date
              </th>

            </tr>

          </thead>

          {/* BODY */}
          <tbody>

            {donations.length === 0 && (

              <tr>

                <td
                  colSpan="5"
                  className="
                    text-center
                    py-10
                    text-gray-500
                  "
                >
                  No donations found
                </td>

              </tr>
            )}

            {(donations || []).map((d) => (

              <tr
                key={d.id}

                className="
                  border-b
                  hover:bg-purple-50
                  transition
                "
              >

                {/* DONOR */}
                <td className="
                  px-4 py-5 text-left
                ">

                  <p className="
                    font-semibold
                    text-gray-800
                    leading-tight
                  ">
                    {d.donor_name || "-"}
                  </p>

                  <p className="
                    text-xs
                    text-gray-500
                    mt-1
                  ">
                    {d.email || "-"}
                  </p>

                </td>

                {/* PURPOSE */}
                <td className="
                  p-4
                  text-left
                  text-gray-700
                ">
                  {d.purpose || "-"}
                </td>

                {/* AMOUNT */}
                <td className="
                  px-4 py-5
                  text-right
                  pr-6
                  font-semibold
                  text-green-600
                ">
                  ₹{d.amount || 0}
                </td>

                {/* STATUS */}
                <td className="
                  px-4 py-5
                  text-center
                ">

                  <span
                    className={`
                      px-3 py-1
                      rounded-full
                      text-xs
                      font-medium

                      ${
                        d.status === "success"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }
                    `}
                  >
                    {d.status || "pending"}
                  </span>

                </td>

                {/* DATE */}
                <td className="
                  px-4 py-5
                  text-right
                  pr-8
                ">

                  {d.created_at ? (

                    <div className="
                      flex flex-col
                      items-end
                      leading-tight
                    ">

                      <span className="
                        text-gray-800
                        font-medium
                      ">
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

                      <span className="
                        text-xs
                        text-gray-500
                        mt-1
                      ">
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

                    <span className="text-gray-500">
                      -
                    </span>

                  )}

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

/* ---------------- CARD ---------------- */

function SummaryCard({
  title,
  value,
}) {

  return (

    <div className="
      bg-white
      rounded-xl
      shadow
      p-6
    ">

      <p className="text-gray-500">
        {title}
      </p>

      <p className="
        text-3xl
        font-bold
        text-purple-700
        mt-1
      ">
        {value}
      </p>

    </div>
  );
}