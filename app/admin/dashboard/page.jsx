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

  /* LOADING */
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh] px-4">
        <p className="text-center text-sm md:text-base text-purple-700 animate-pulse">
          Loading admin dashboard...
        </p>
      </div>
    );
  }

  /* ERROR */
  if (!stats) {
    return (
      <div className="flex items-center justify-center min-h-[40vh] px-4">
        <p className="text-center text-sm md:text-base text-red-600">
          Failed to load dashboard data.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5 md:space-y-6 px-4 sm:px-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700">
          Admin Dashboard
        </h1>

        <p className="text-sm md:text-base text-gray-500 mt-1">
          Overview of donations, users and events.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
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

/* CARD */
function StatCard({ title, value }) {
  return (
    <div className="
      bg-white
      p-5 md:p-6
      rounded-xl
      shadow-md
      border border-gray-100
      hover:shadow-lg
      transition
    ">
      <h3 className="text-sm md:text-base text-gray-500">
        {title}
      </h3>

      <p className="text-2xl md:text-3xl font-bold text-purple-700 mt-2">
        {value}
      </p>
    </div>
  );
}