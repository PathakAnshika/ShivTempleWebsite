"use client";

import { FcGoogle } from "react-icons/fc";
import { supabase } from "@/lib/supabase.js";
import { FaGoogle } from "react-icons/fa";

export default function RegisterGooglePage() {

  const handleGoogleLogin = async () => {

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",

      options: {
        redirectTo: "http://localhost:3000",
      },
    });

    if (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="
      min-h-screen
      flex items-center justify-center
      bg-[#f8f8f6]
      px-6
      relative overflow-hidden
    ">

      {/* Background Glow */}
      <div className="
        absolute -top-20 -left-20
        w-72 h-72
        bg-slate-200/40
        rounded-full
        blur-3xl
      "></div>

      <div className="
        absolute -bottom-20 -right-20
        w-80 h-80
        bg-gray-200/40
        rounded-full
        blur-3xl
      "></div>

      {/* Card */}
      <div className="
        relative z-10
        bg-white/90
        backdrop-blur-xl
        border border-gray-100
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        rounded-[36px]
        p-10 md:p-12
        w-full
        max-w-md
        text-center
      ">

        {/* Icon */}
        <div className="
          w-20 h-20
          rounded-full
          bg-slate-100
          flex items-center justify-center
          mx-auto mb-8
          text-4xl
        ">
          🔐
        </div>

        {/* Heading */}
        <h1 className="
          text-3xl md:text-4xl
          font-bold
          text-gray-900
          mb-4
        ">
          Continue with Google
        </h1>

        {/* Subtitle */}
        <p className="
          text-gray-600
          leading-8
          text-base
          mb-10
        ">
          Sign in securely using your Google account
          to continue your spiritual journey with
          Shri Chandreshwar Dham.
        </p>

        {/* Google Button */}
      <button
  onClick={() => {
    console.log("BUTTON CLICKED 😭");
    handleGoogleLogin();
  }}
  className="
    w-full
    flex items-center justify-center gap-3
    border border-purple-300
    bg-white
    text-purple-700
    py-3 rounded-2xl
    hover:bg-purple-50
    transition-all
    shadow-sm
  "
>
  <FaGoogle className="text-lg" />

  Continue with Google
</button>
        {/* Footer */}
        <p className="
          text-sm
          text-slate-500
          mt-8
          leading-7
        ">
          By continuing, you agree to our
          terms and privacy policy.
        </p>

      </div>

    </section>
  );
}