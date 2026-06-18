"use client";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export function MembershipSection() {
  const router = useRouter();

  return (
    <section
  id="membership"
 className="
  relative z-10
  max-w-7xl mx-auto
  px-4 sm:px-6
  flex flex-col md:flex-row
  items-center
  gap-8 sm:gap-12 md:gap-16
"
>
      {/* Soft Glow Lights */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-300/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

        {/* LEFT SIDE IMAGE */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/family.jpg" 
            alt="Temple Art"
            className="w-full rounded-3xl shadow-2xl border border-white/20 object-cover"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="
  w-full md:w-1/2
  text-center md:text-left
">

          <h2 className="
  text-3xl
  sm:text-4xl
  md:text-5xl
  font-extrabold
  bg-gradient-to-r
  from-yellow-200
  to-yellow-400
  bg-clip-text
  text-transparent
  drop-shadow-xl
">
            Become a Family Member 🪔
          </h2>

          <p className="
  mt-4 sm:mt-5
  text-gray-200
  text-base sm:text-lg
  leading-7 sm:leading-relaxed
">
            Register today and join our divine chandreshwar family. Get spiritual updates,
            participate in Seva programs, and access your exclusive member dashboard.
          </p>

          {/* GLASSMORPHIC BOX */}
          <div className="
  mt-6 sm:mt-10
  p-4 sm:p-6
  rounded-2xl sm:rounded-3xl
  backdrop-blur-xl
  bg-white/10
  border border-white/20
  shadow-2xl
"
>
            <p className="
  text-gray-100
  text-sm sm:text-base
  mb-4
">
              Already feel connected? Complete your membership and unlock blessings ✨
            </p>

            <button
              onClick={() => router.push("/DevoteeCorner/login")}
              className="
  w-full
  py-3 sm:py-4
  text-sm sm:text-lg
  bg-gradient-to-r
  from-yellow-300
  to-yellow-500
  text-purple-900
  font-bold
  rounded-full
  shadow-xl
  hover:shadow-yellow-500/40
  hover:scale-105
  active:scale-95
  transition-all
  flex items-center justify-center gap-2
"            >
              Join Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
