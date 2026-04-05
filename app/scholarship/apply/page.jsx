"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ScholarshipStatusPage() {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">

        <div className="w-full max-w-md backdrop-blur-xl bg-white/90 rounded-3xl shadow-2xl p-8 text-center space-y-6">

          <h2 className="text-2xl font-bold text-purple-700">
            🎓 Scholarship Status
          </h2>

          {!data ? (
            <p className="text-gray-600">No application found</p>
          ) : (
            <>
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
                {data.status === "approved" && "🎉 Your scholarship is approved"}
                {data.status === "rejected" && "❌ Application rejected"}
                {data.status === "paid" && "💰 Amount transferred successfully"}
              </div>
            </>
          )}

        </div>

      </div>
    </section>
  );
}