"use client";
import { useEffect, useState } from "react";

export default function AdminScholarship() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  /* =====================================
     FETCH DATA
  ===================================== */
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/admin/scholarship/update");
      const json = await res.json();

      if (json.success) setData(json.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /* =====================================
     UPDATE STATUS
  ===================================== */
  const updateStatus = async (id, status, amount = null) => {
    const res = await fetch("/api/admin/scholarship", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status, amount }),
    });

    const json = await res.json();

    if (!json.success) {
      alert(json.message);
      return;
    }

    fetchData();
    setSelected(null);
  };

  if (loading) {
    return (
      <p className="text-purple-700 animate-pulse">
        Loading applications...
      </p>
    );
  }

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-purple-700">
          🎓 Scholarship Management
        </h1>

        <p className="text-gray-600">
          Review all scholarship applications
        </p>
      </div>

      {/* SUMMARY */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card title="Total" value={data.length} />
        <Card
          title="Pending"
          value={data.filter((x) => x.status === "pending").length}
        />
        <Card
          title="Approved"
          value={data.filter((x) => x.status === "approved").length}
        />
        <Card
          title="Rejected"
          value={data.filter((x) => x.status === "rejected").length}
        />
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <table className="w-full text-sm">
          <thead className="bg-purple-50 text-purple-700">
            <tr>
              <th className="px-4 py-3 text-left">Student</th>
              <th className="text-left">Course</th>
              <th className="text-left">Income</th>
              <th className="text-center">Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>

            {data.map((s) => (
              <tr
                key={s.id}
                className="border-t hover:bg-purple-50 transition"
              >
                {/* STUDENT */}
                <td className="px-4 py-3">
                  <p className="font-semibold text-gray-800">
                    {s.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {s.email}
                  </p>
                </td>

                {/* COURSE */}
                <td className="text-gray-700">
                  {s.course}
                </td>

                {/* INCOME */}
                <td className="text-gray-700">
                  ₹{s.income}
                </td>

                {/* STATUS */}
                <td className="text-center">
                  <StatusBadge status={s.status} />
                </td>

                {/* ACTION BUTTONS */}
                <td className="text-center space-x-2">

                  {/* VIEW */}
                  <button
                    onClick={() => setSelected(s)}
                    className="px-3 py-1 rounded-lg bg-blue-100 text-blue-700 text-xs font-medium"
                  >
                    View
                  </button>

                  {/* APPROVE */}
                  {s.status === "pending" && (
                    <button
                      onClick={() => {
                        const amt = prompt(
                          "Enter Scholarship Amount"
                        );
                        if (amt)
                          updateStatus(
                            s.id,
                            "approved",
                            amt
                          );
                      }}
                      className="px-3 py-1 rounded-lg bg-green-100 text-green-700 text-xs font-medium"
                    >
                      Approve
                    </button>
                  )}

                  {/* REJECT */}
                  {s.status === "pending" && (
                    <button
                      onClick={() =>
                        updateStatus(
                          s.id,
                          "rejected"
                        )
                      }
                      className="px-3 py-1 rounded-lg bg-red-100 text-red-700 text-xs font-medium"
                    >
                      Reject
                    </button>
                  )}

                  {/* PENDING AGAIN */}
                  {(s.status === "approved" ||
                    s.status === "rejected") && (
                    <button
                      onClick={() =>
                        updateStatus(
                          s.id,
                          "pending"
                        )
                      }
                      className="px-3 py-1 rounded-lg bg-yellow-100 text-yellow-700 text-xs font-medium"
                    >
                      Pending
                    </button>
                  )}

                </td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>

      {/* =====================================
         MODAL
      ===================================== */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">

          <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6">

            {/* HEADER */}
            <div className="flex justify-between items-center border-b pb-4 mb-5">
              <div>
                <h2 className="text-2xl font-bold text-purple-700">
                  {selected.name}
                </h2>

                <p className="text-sm text-gray-500">
                  {selected.application_id}
                </p>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="text-gray-500 text-xl"
              >
                ✕
              </button>
            </div>

            {/* DETAILS */}
            <div className="grid md:grid-cols-2 gap-4 text-sm">

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
              <p className="text-gray-600">
                {selected.address}, {selected.city},{" "}
                {selected.state} - {selected.pincode}
              </p>
            </div>

            {/* REASON */}
            <div className="mt-5">
              <p className="font-semibold text-gray-700">
                Reason
              </p>
              <p className="text-gray-600">
                {selected.reason}
              </p>
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
    <div className="bg-white rounded-xl shadow p-5">
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-3xl font-bold text-purple-700 mt-1">
        {value}
      </h3>
    </div>
  );
}

function StatusBadge({ status }) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        status === "approved"
          ? "bg-green-100 text-green-700"
          : status === "rejected"
          ? "bg-red-100 text-red-700"
          : "bg-yellow-100 text-yellow-700"
      }`}
    >
      {status}
    </span>
  );
}

function Info({ label, value }) {
  return (
    <div className="bg-gray-50 rounded-xl p-3">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-medium text-gray-800 mt-1">
        {value || "-"}
      </p>
    </div>
  );
}