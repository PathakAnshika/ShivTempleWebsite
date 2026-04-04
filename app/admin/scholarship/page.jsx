"use client";
import { useEffect, useState } from "react";

export default function AdminScholarship() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("/api/admin/scholarship");
    const json = await res.json();

    if (json.success) {
      setData(json.data);
    }
  };

  const updateStatus = async (id, status, amount = null) => {
    await fetch("/api/admin/scholarship/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status, amount }),
    });

    fetchData();
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-purple-700">
        🎓 Scholarship Management
      </h1>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-purple-50 text-purple-700">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Income</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((s) => (
              <tr key={s.id} className="border-t text-center">
                <td className="px-4 py-3">{s.name}</td>
                <td>{s.email}</td>
                <td>{s.course}</td>
                <td>₹{s.income}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      s.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : s.status === "rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {s.status}
                  </span>
                </td>

                <td>
                  {s.amount ? `₹${s.amount}` : "-"}
                </td>

                <td className="space-x-2">

                  {/* APPROVE */}
                  <button
                    onClick={() => {
                      const amt = prompt("Enter Amount");
                      updateStatus(s.id, "approved", amt);
                    }}
                    className="text-green-600 hover:underline"
                  >
                    Approve
                  </button>

                  {/* REJECT */}
                  <button
                    onClick={() => updateStatus(s.id, "rejected")}
                    className="text-red-600 hover:underline"
                  >
                    Reject
                  </button>

                  {/* MARK PAID */}
                  {s.status === "approved" && (
                    <button
                      onClick={() => updateStatus(s.id, "paid")}
                      className="text-purple-600 hover:underline"
                    >
                      Mark Paid
                    </button>
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