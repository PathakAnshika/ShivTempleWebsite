"use client";

import { useEffect, useState } from "react";

export default function AdminScholarship() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [scholarshipAmount,
setScholarshipAmount] =
  useState("");
  /* =====================================
     FETCH DATA
  ===================================== */
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    try {

      const res = await fetch(
        "/api/admin/scholarship/update"
      );

      const json = await res.json();

      if (json.success) {
        setData(json.data);
      }

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);
    }
  };

  /* =====================================
     UPDATE STATUS
  ===================================== */
  const updateStatus = async (
    id,
    status,
    amount = null
  ) => {

    const res = await fetch(
    "/api/admin/scholarship/update",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          id,
          status,
          amount,
        }),
      }
    );

    const json = await res.json();

    if (!json.success) {

      alert(json.message);
      return;
    }

    alert("Updated Successfully ✅");

    fetchData();

    setSelected(null);
  };

  /* =====================================
     LOADING
  ===================================== */
  if (loading) {

    return (
      <p className="
        text-purple-700
        animate-pulse
      ">
        Loading applications...
      </p>
    );
  }

  return (

    <div className="space-y-6">

      {/* HEADER */}
      <div>

        <h1 className="
          text-3xl
          font-bold
          text-purple-700
        ">
          🎓 Scholarship Management
        </h1>

        <p className="text-gray-600">
          Review all scholarship
          applications
        </p>

      </div>

      {/* SUMMARY */}
      <div className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-4
      ">

        <Card
          title="Total"
          value={data.length}
        />

        <Card
          title="Pending"
          value={
            data.filter(
              (x) =>
                x.status === "pending"
            ).length
          }
        />

        <Card
          title="Approved"
          value={
            data.filter(
              (x) =>
                x.status === "approved"
            ).length
          }
        />

        <Card
          title="Rejected"
          value={
            data.filter(
              (x) =>
                x.status === "rejected"
            ).length
          }
        />

      </div>

      {/* TABLE */}
    <div className="hidden md:block">
  <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
    <table className="w-full">

          <thead className="
            bg-purple-50
            text-purple-700
          ">

            <tr>

              <th className="
                px-4 py-3
                text-left
              ">
                Student
              </th>

              <th className="text-left">
                Course
              </th>

              <th className="text-left">
                Income
              </th>

              <th className="text-center">
                Status
              </th>

              <th className="text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

{data.map((s) => (
  <tr
    key={s.id}
    className="
      border-t
      hover:bg-purple-50
      transition
    "
  >
    {/* STUDENT */}
    <td
      className="
        px-3 md:px-4
        py-3
      "
    >
      <p
        className="
          font-semibold
          text-gray-800
        "
      >
        {s.name}
      </p>

      <p
        className="
          text-xs
          text-gray-500
          break-all
        "
      >
        {s.email}
      </p>
    </td>

    {/* COURSE */}
    <td
      className="
        text-gray-700
        px-2 md:px-4
      "
    >
      {s.course}
    </td>

    {/* INCOME */}
    <td
      className="
        text-gray-700
        px-2 md:px-4
        whitespace-nowrap
      "
    >
      ₹{s.income}
    </td>

    {/* STATUS */}
    <td
      className="
        text-center
        px-2
      "
    >
      <StatusBadge status={s.status} />
    </td>

    {/* ACTION */}
    <td
      className="
        text-center
        px-2
      "
    >
      <button
        onClick={() => setSelected(s)}
        className="
          px-3 md:px-4
          py-2
          rounded-xl
          bg-purple-100
          text-purple-700
          text-xs md:text-sm
          font-semibold
          hover:bg-purple-200
          transition
          whitespace-nowrap
        "
      >
        View Details
      </button>
    </td>
  </tr>
))}

</tbody>

</table>
</div>
</div>

{/* MOBILE VIEW */}
<div className="md:hidden space-y-4">

  {data.length === 0 && (
    <div className="bg-white rounded-xl p-6 text-center text-gray-500">
      No applications found
    </div>
  )}

  {data.map((s) => (
    <div
      key={s.id}
      className="bg-white rounded-2xl shadow-md border p-4"
    >
      {/* Header */}
      <div className="flex justify-between items-start gap-3">

        <div>
          <h3 className="font-semibold text-gray-800 text-lg">
            {s.name}
          </h3>

          <p className="text-xs text-gray-500 break-all">
            {s.email}
          </p>
        </div>

        <StatusBadge status={s.status} />
      </div>

      {/* Details */}
      <div className="mt-4 space-y-2 text-sm">

        <div className="flex justify-between">
          <span className="text-gray-500">
            Course
          </span>

          <span className="font-medium">
            {s.course}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Income
          </span>

          <span className="font-medium">
            ₹{s.income}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            College
          </span>

          <span className="font-medium text-right">
            {s.college}
          </span>
        </div>

      </div>

      {/* Action */}
      <button
        onClick={() => setSelected(s)}
        className="
          mt-4
          w-full
          bg-purple-100
          text-purple-700
          py-2.5
          rounded-xl
          font-semibold
          hover:bg-purple-200
          transition
        "
      >
        View Details
      </button>
    </div>
  ))}

</div>

      {/* =====================================
         MODAL
      ===================================== */}

     {selected && (
  <div
    className="
      fixed inset-0
      bg-black/50
      z-50
      flex items-center
      justify-center
      p-3 md:p-4
    "
  >
    <div
      className="
        bg-white
        rounded-2xl
        shadow-xl
        w-full
        max-w-5xl
        max-h-[90vh]
        overflow-y-auto
        p-4 md:p-6
      "
    >
      {/* HEADER */}
      <div
        className="
          flex flex-col
          md:flex-row
          md:items-center
          justify-between
          gap-3
          border-b
          pb-4
          mb-5
        "
      >
        <div>
          <h2
            className="
              text-xl md:text-2xl
              font-bold
              text-purple-700
              break-words
            "
          >
            {selected.name}
          </h2>

          <p className="text-sm text-gray-500">
            {selected.application_id}
          </p>
        </div>

        <button
          onClick={() => setSelected(null)}
          className="
            self-end md:self-auto
            text-gray-500
            text-xl
          "
        >
          ✕
        </button>
      </div>

      {/* DETAILS */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-4
          text-sm
        "
      >
        <Info label="Email" value={selected.email} />
        <Info label="Phone" value={selected.phone} />
        <Info label="Gender" value={selected.gender} />
        <Info label="DOB" value={selected.dob} />
        <Info label="Course" value={selected.course} />
        <Info label="College" value={selected.college} />
        <Info label="Current Year" value={selected.current_year} />
        <Info label="Marks" value={`${selected.marks}%`} />
        <Info label="Income" value={`₹${selected.income}`} />
        <Info label="Dependents" value={selected.dependents} />
        <Info label="Fee Amount" value={`₹${selected.fee_amount}`} />
        <Info label="Bank Name" value={selected.bank_name} />
        <Info label="Account No" value={selected.account_number} />
        <Info label="IFSC" value={selected.ifsc} />
      </div>

      {/* ADDRESS */}
      <div className="mt-5">
        <p className="font-semibold text-gray-700">
          Address
        </p>

        <p className="text-gray-600 break-words">
          {selected.address}, {selected.city},{" "}
          {selected.state} - {selected.pincode}
        </p>
      </div>

      {/* REASON */}
      <div className="mt-5">
        <p className="font-semibold text-gray-700">
          Reason
        </p>

        <p className="text-gray-600 break-words">
          {selected.reason}
        </p>
      </div>

      {/* ACTIONS */}
      <div className="mt-8 border-t pt-6">
        <h3
          className="
            text-base md:text-lg
            font-semibold
            text-purple-700
            mb-4
          "
        >
          Application Actions
        </h3>

        <div className="mb-4">
          <label
            className="
              block
              text-sm
              font-semibold
              text-purple-700
              mb-2
            "
          >
            Scholarship Amount
          </label>

          <input
            type="number"
            placeholder="Enter amount"
            value={scholarshipAmount}
            onChange={(e) =>
              setScholarshipAmount(
                e.target.value
              )
            }
            className="
              w-full
              md:w-80
              bg-white
              border
              border-gray-300
              px-4 py-3
              rounded-xl
              focus:outline-none
              focus:ring-2
              focus:ring-purple-500
            "
          />
        </div>

        <div
          className="
            flex
            flex-col
            sm:flex-row
            flex-wrap
            gap-3
          "
        >



                {/* APPROVE */}
                {selected.status ===
                  "pending" && (

                 <button
  onClick={() => {

    if (!scholarshipAmount) {

      alert(
        "Enter scholarship amount"
      );

      return;
    }

    updateStatus(
      selected.id,
      "approved",
      scholarshipAmount
    );
  }}

  className="
    bg-green-600
    hover:bg-green-700
    text-white
    px-5 py-2
    rounded-xl
  "
>
  Approve
</button>
                )}

                {/* REJECT */}
                {selected.status ===
                  "pending" && (

                  <button
                    onClick={() =>
                      updateStatus(
                        selected.id,
                        "rejected"
                      )
                    }

                    className="
                      bg-red-600
                      hover:bg-red-700
                      text-white
                      px-5 py-2
                      rounded-xl
                      font-medium
                      transition
                    "
                  >
                    Reject
                  </button>
                )}

                {/* PENDING */}
                {(selected.status ===
                  "approved" ||

                  selected.status ===
                  "rejected") && (

                  <button
                    onClick={() =>
                      updateStatus(
                        selected.id,
                        "pending"
                      )
                    }

                    className="
                      bg-yellow-500
                      hover:bg-yellow-600
                      text-white
                      px-5 py-2
                      rounded-xl
                      font-medium
                      transition
                    "
                  >
                    Pending
                  </button>
                )}

                {/* PAID */}
                {selected.status ===
                  "approved" && (

                  <button
                    onClick={() =>
                      updateStatus(
                        selected.id,
                        "paid"
                      )
                    }

                    className="
                      bg-purple-600
                      hover:bg-purple-700
                      text-white
                      px-5 py-2
                      rounded-xl
                      font-medium
                      transition
                    "
                  >
                    Mark as Paid
                  </button>
                )}

              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

/* =====================================
   COMPONENTS
===================================== */

function Card({ title, value }) {
  return (
    <div
      className="
        bg-white
        rounded-xl
        shadow
        p-4 md:p-5
      "
    >
      <p
        className="
          text-xs md:text-sm
          text-gray-500
        "
      >
        {title}
      </p>

      <h3
        className="
          text-2xl md:text-3xl
          font-bold
          text-purple-700
          mt-1
        "
      >
        {value}
      </h3>
    </div>
  );
}

function StatusBadge({ status }) {
  return (
    <span
      className={`
        px-2 md:px-3 py-1
        rounded-full
        text-xs
        font-semibold

        ${
          status === "approved"
            ? "bg-green-100 text-green-700"
            : status === "rejected"
            ? "bg-red-100 text-red-700"
            : "bg-yellow-100 text-yellow-700"
        }
      `}
    >
      {status}
    </span>
  );
}

function Info({ label, value }) {
  return (
    <div
      className="
        bg-gray-50
        rounded-xl
        p-3
        break-words
      "
    >
      <p
        className="
          text-xs
          text-gray-500
        "
      >
        {label}
      </p>

      <p
        className="
          font-medium
          text-sm md:text-base
          text-gray-800
          mt-1
          break-words
        "
      >
        {value || "-"}
      </p>
    </div>
  );
}