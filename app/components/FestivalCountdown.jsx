"use client";
import { useEffect, useState } from "react";

export default function FestivalCountdown() {

  const festivals = [
    { name: "Maha Shivratri", date: "2026-02-15" },
    { name: "Holi", date: "2026-03-01" },
    { name: "Ram Navami", date: "2026-04-06" },
    { name: "Hanuman Jayanti", date: "2026-04-12" },
    { name: "Janmashtami", date: "2026-08-16" },
    { name: "Navratri Begins", date: "2026-10-11" },
    { name: "Diwali", date: "2026-11-08" },
    { name: "Chhath Puja", date: "2026-11-19" },
    { name: "Geeta Jayanti", date: "2026-12-20" }
  ];

  const getNextFestival = () => {
    const today = new Date();

    for (let fest of festivals) {
      const festDate = new Date(fest.date);
      if (festDate > today) return fest;
    }

    return festivals[0]; // next year fallback
  };

  const nextFestival = getNextFestival();
  const festivalDate = new Date(nextFestival.date);

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = festivalDate - now;

      if (difference <= 0) return;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center py-16">

      <p className="text-[#e8c27d] uppercase tracking-widest text-sm">
        Next Divine Celebration
      </p>

      <h2 className="text-4xl font-bold mt-3 text-white">
        🪔 {nextFestival.name}
      </h2>

      <div className="flex justify-center gap-6 mt-8 flex-wrap">

        {["days","hours","minutes","seconds"].map((unit) => (
          <div key={unit} className="bg-[#2a2630] px-6 py-4 rounded-xl border border-[#3c3445]">
            <p className="text-3xl font-bold text-[#e8c27d]">
              {timeLeft[unit]}
            </p>
            <span className="text-xs text-gray-400 uppercase">
              {unit}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}
