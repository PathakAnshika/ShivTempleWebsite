"use client";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import ScholarshipForm from "../../components/ScholarshipForm";


export default function ApplyPage() {
  const router = useRouter();

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
      {/* BACKGROUND IMAGE */}
      <img
        src="\images\student2-removebg-preview.png"
        alt="Scholarship"
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      />

      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* FORM POSITION */}
      <div className="relative z-10 flex justify-end items-center h-full px-6 md:px-16">
        
        {/* FORM CARD */}
        <div className="
          w-full max-w-md
          backdrop-blur-xl
          bg-white/85
          rounded-3xl
          shadow-2xl
          p-6 md:p-8
        ">
          <ScholarshipForm />
        </div>

      </div>

    </section>
  );
}