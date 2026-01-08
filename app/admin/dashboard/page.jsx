"use client";
import { useEffect, useState } from "react";

export default function AdminDashboardHome() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/admin/dashboard");
        const data = await res.json();

        if (data.success && data.data) {
          setStats(data.data);
        } else {
          setStats({
            totalDonation: 0,
            totalUsers: 0,
            totalEvents: 0,
          });
        }
      } catch (err) {
        console.error("Dashboard fetch error:", err);
        setStats({
          totalDonation: 0,
          totalUsers: 0,
          totalEvents: 0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  /* ---------------- LOADING STATE ---------------- */
  if (loading) {
    return (
      <p className="text-center mt-10 text-purple-700 animate-pulse">
        Loading admin dashboard...
      </p>
    );
  }

  /* ---------------- SAFETY CHECK ---------------- */
  if (!stats) {
    return (
      <p className="text-center mt-10 text-red-600">
        Failed to load dashboard data.
      </p>
    );
  }

  /* ---------------- UI ---------------- */
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-purple-700">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Donations"
          value={`₹${stats.totalDonation ?? 0}`}
        />

        <StatCard
          title="Total Users"
          value={stats.totalUsers ?? 0}
        />

        <StatCard
          title="Total Events"
          value={stats.totalEvents ?? 0}
        />
      </div>
    </div>
  );
}

/* ---------------- CARD COMPONENT ---------------- */
function StatCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-3xl font-bold text-purple-700 mt-2">
        {value}
      </p>
    </div>
  );
}
