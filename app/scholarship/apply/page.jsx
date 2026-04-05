"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import ScholarshipForm from "../../components/ScholarshipForm";

export default function ApplyPage() {
  const router = useRouter();

  const [view, setView] = useState("form"); // form | status
  const [data, setData] = useState(null);

  useEffect(() => {
    if (view === "status") {
      fetchStatus();
    }
  }, [view]);

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
    <section className="relative h-screen w-full overflow-hidden">

      {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 z-20 
                   bg-white/20 backdrop-blur-md 
                   text-white px-5 py-2 rounded-full
                   border border-white/30
                   hover:bg-white/30 transition"
      >
        ← Back
      </button>

      {/* BACKGROUND */}
      <img
        src="/images/student2-removebg-preview.png"
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex justify-end items-center h-full px-6 md:px-16">

        <div className="w-full max-w-md backdrop-blur-xl bg-white/90 rounded-3xl shadow-2xl p-6 space-y-6">

          {/* TOGGLE BUTTON */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-purple-700">
              🎓 Scholarship
            </h2>

            <button
              onClick={() =>
                setView(view === "form" ? "status" : "form")
              }
              className="text-sm text-purple-600 underline"
            >
              {view === "form" ? "Check Status" : "Apply Again"}
            </button>
          </div>

          {/* ================= FORM ================= */}
          {view === "form" && <ScholarshipForm />}

          {/* ================= STATUS ================= */}
          {view === "status" && (
            <>
              {!data ? (
                <p className="text-gray-600 text-center">
                  No application found
                </p>
              ) : (
                <div className="space-y-4 text-center">

                  <div>
                    <p className="text-gray-500">Status</p>
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${statusColor[data.status]}`}
                    >
                      {data.status}
                    </span>
                  </div>

                  <div>
                    <p className="text-gray-500">Amount</p>
                    <p className="text-lg font-bold text-purple-700">
                      {data.amount ? `₹${data.amount}` : "-"}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500">Applied On</p>
                    <p className="text-gray-700">
                      {new Date(data.created_at).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="text-sm text-gray-600">
                    {data.status === "pending" && "⏳ Under review"}
                    {data.status === "approved" && "🎉 Approved"}
                    {data.status === "rejected" && "❌ Rejected"}
                    {data.status === "paid" && "💰 Payment done"}
                  </div>

                </div>
              )}
            </>
          )}

        </div>
      </div>
    </section>
  );
}