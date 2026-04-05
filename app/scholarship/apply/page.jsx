"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import ScholarshipForm from "../../components/ScholarshipForm";

export default function ApplyPage() {
  const router = useRouter();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchStatus();
  }, []);

  const fetchStatus = async () => {
    try {
      const stored = localStorage.getItem("user");
      const user = JSON.parse(stored);

      const res = await fetch("/api/scholarship/my", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: user.id }),
      });

      const json = await res.json();

      if (json.success) {
        setData(json.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const statusColor = {
    pending: "bg-yellow-100 text-yellow-700",
    approved: "bg-green-100 text-green-700",
    rejected: "bg-red-100 text-red-700",
    paid: "bg-purple-100 text-purple-700",
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 px-6 py-10">

      {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="mb-6 text-purple-700 hover:underline"
      >
        ← Back
      </button>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* ================= LEFT: FORM ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            🎓 Apply for Scholarship
          </h2>

          <ScholarshipForm />
        </div>

        {/* ================= RIGHT: STATUS ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 flex flex-col justify-center">

          <h2 className="text-2xl font-bold text-purple-700 mb-6">
            📊 Application Status
          </h2>

          {!data ? (
            <p className="text-gray-500 text-center">
              No application submitted yet
            </p>
          ) : (
            <div className="space-y-5 text-center">

              {/* STATUS */}
              <div>
                <p className="text-gray-500">Status</p>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${statusColor[data.status]}`}
                >
                  {data.status}
                </span>
              </div>

              {/* AMOUNT */}
              <div>
                <p className="text-gray-500">Amount</p>
                <p className="text-xl font-bold text-purple-700">
                  {data.amount ? `₹${data.amount}` : "-"}
                </p>
              </div>

              {/* DATE */}
              <div>
                <p className="text-gray-500">Applied On</p>
                <p className="text-gray-700">
                  {new Date(data.created_at).toLocaleDateString()}
                </p>
              </div>

              {/* MESSAGE */}
              <div className="text-sm text-gray-600">
                {data.status === "pending" && "⏳ Your application is under review"}
                {data.status === "approved" && "🎉 Scholarship approved"}
                {data.status === "rejected" && "❌ Application rejected"}
                {data.status === "paid" && "💰 Amount transferred"}
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}