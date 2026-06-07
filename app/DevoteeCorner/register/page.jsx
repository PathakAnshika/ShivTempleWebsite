"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaLock,
  FaUser,
} from "react-icons/fa";

import { useState } from "react";

export default function RegisterPage() {

  const router = useRouter();

const [registerType, setRegisterType] = useState("phone");
const [fullName, setFullName] = useState("");
const [phone, setPhone] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");

const handlePhoneRegister = async () => {

  try {

    const response = await fetch(
      "/api/register-phone",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

       body: JSON.stringify({
  full_name: fullName,
  email,
  phone,
  password,
})
      }
    );

    const data = await response.json();

    if (!response.ok) {

      alert(data.error);
      return;
    }

    alert("Account Created Successfully 🙏");

    router.push("/DevoteeCorner/login");

  } catch (error) {

    console.log(error);

    alert("Something went wrong");
  }
};
  return (

    <section className="
      min-h-screen
      flex items-center justify-center
      bg-gradient-to-br
      from-purple-300/20
      via-purple-100/40
      to-white
      relative overflow-hidden
      px-4
    ">

      {/* Soft Floating Blobs */}
      <div className="
        absolute top-0 left-0
        w-72 h-72
        bg-purple-300/30
        blur-3xl
        rounded-full
        animate-pulse
      "></div>

      <div className="
        absolute bottom-0 right-0
        w-96 h-96
        bg-pink-300/30
        blur-[120px]
        rounded-full
        animate-pulse
      "></div>

      {/* REGISTER CARD */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          bg-white/50
          backdrop-blur-2xl
          p-6 md:p-7
          rounded-3xl
          shadow-2xl
          border border-white/30
          w-full
          max-w-2xl
          z-10
        "
      >

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="
            text-2xl
            font-bold
            text-center
            text-purple-900
            mb-3
            tracking-wide
          "
        >
          Create Your Account 🙏
        </motion.h2>

        <p className="
          text-center
          text-gray-600
          mb-5
          leading-7
        ">
          Begin your spiritual journey with
          Shri Chandreshwar Dham.
        </p>

        {/* REGISTER TYPE SWITCH */}
        <div className="
          flex
          bg-purple-100/70
          p-1.5
          rounded-2xl
          mb-5
        ">

          <button
            onClick={() => setRegisterType("phone")}
            className={`
              flex-1
              py-2.5
              rounded-xl
              text-sm
              font-medium
              transition-all

              ${
                registerType === "phone"
                  ? "bg-white text-purple-700 shadow-md"
                  : "text-gray-600"
              }
            `}
          >
            Register with Phone Number
          </button>

          <button
            onClick={() => setRegisterType("email")}
            className={`
              flex-1
              py-2.5
              rounded-xl
              text-sm
              font-medium
              transition-all

              ${
                registerType === "email"
                  ? "bg-white text-purple-700 shadow-md"
                  : "text-gray-600"
              }
            `}
          >
            Register with Email
          </button>

        </div>

        {/* FORM */}
        <div className="grid md:grid-cols-2 gap-4">

          {/* FULL NAME */}
          <div>

            <label className="
              block
              text-sm
              font-medium
              text-purple-900
              mb-1.5
            ">
              Full Name
            </label>

            <div className="relative">

              <FaUser className="
                absolute left-4 top-1/2
                -translate-y-1/2
                text-purple-500
              " />

              <input
                type="text"
                value={fullName}
onChange={(e) =>
  setFullName(e.target.value)
}
                placeholder="Enter your full name"
                className="
                  w-full
                  pl-12 pr-4 py-3
                  rounded-2xl
                  border border-purple-200
                  bg-white/80
                  text-gray-700
                  outline-none
                  focus:ring-2 focus:ring-purple-300
                "
              />

            </div>

          </div>

          {/* PHONE REGISTER */}
          {registerType === "phone" && (
            <>

              {/* Phone */}
              <div>

                <label className="
                  block
                  text-sm
                  font-medium
                  text-purple-900
                  mb-1.5
                ">
                  Phone Number
                </label>

                <div className="relative">

                  <FaPhoneAlt className="
                    absolute left-4 top-1/2
                    -translate-y-1/2
                    text-purple-500
                  " />

                  <input
                    type="tel"
                    value={phone}
onChange={(e) =>
  setPhone(e.target.value)
}
                    placeholder="Enter your phone number"
                    className="
                      w-full
                      pl-12 pr-4 py-3
                      rounded-2xl
                      border border-purple-200
                      bg-white/80
                      text-gray-700
                      outline-none
                      focus:ring-2 focus:ring-purple-300
                    "
                  />

                </div>

              </div>

            </>
          )}

          {/* EMAIL REGISTER */}
          {registerType === "email" && (
            <>

              {/* Email */}
              <div>

                <label className="
                  block
                  text-sm
                  font-medium
                  text-purple-900
                  mb-1.5
                ">
                  Email Address
                </label>

                <div className="relative">

                  <FaEnvelope className="
                    absolute left-4 top-1/2
                    -translate-y-1/2
                    text-purple-500
                  " />

                 <input
  type="email"

  value={email}

  onChange={(e) =>
    setEmail(e.target.value)
  }

  placeholder="Enter your email address"

  className="
    w-full
    pl-12 pr-4 py-3
    rounded-2xl
    border border-purple-200
    bg-white/80
    text-gray-700
    outline-none
    focus:ring-2 focus:ring-purple-300
  "
/>

                </div>

              </div>

            </>
          )}

          {/* Password */}
          <div>

            <label className="
              block
              text-sm
              font-medium
              text-purple-900
              mb-1.5
            ">
              Password
            </label>

            <div className="relative">

              <FaLock className="
                absolute left-4 top-1/2
                -translate-y-1/2
                text-purple-500
              " />

              <input
                type="password"
                value={password}
onChange={(e) =>
  setPassword(e.target.value)
}
                placeholder="Create your password"
                className="
                  w-full
                  pl-12 pr-4 py-3
                  rounded-2xl
                  border border-purple-200
                  bg-white/80
                  text-gray-700
                  outline-none
                  focus:ring-2 focus:ring-purple-300
                "
              />

            </div>

          </div>

          {/* Confirm Password */}
          <div>

            <label className="
              block
              text-sm
              font-medium
              text-purple-900
              mb-1.5
            ">
              Confirm Password
            </label>

            <div className="relative">

              <FaLock className="
                absolute left-4 top-1/2
                -translate-y-1/2
                text-purple-500
              " />

              <input
                type="password"
                placeholder="Confirm your password"
                className="
                  w-full
                  pl-12 pr-4 py-3
                  rounded-2xl
                  border border-purple-200
                  bg-white/80
                  text-gray-700
                  outline-none
                  focus:ring-2 focus:ring-purple-300
                "
              />

            </div>

          </div>

          {/* Continue Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="
              md:col-span-2
              w-full
              py-3
              rounded-2xl
              bg-purple-700
              hover:bg-purple-800
              text-white
              font-semibold
              shadow-lg
              transition-all
              mt-2
            "
            onClick={handlePhoneRegister}
          >
            Create Account
          </motion.button>

        </div>

        {/* Login */}
        <p className="
          text-center
          text-gray-700
          mt-4
        ">
          Already have an account?{" "}

          <button
            onClick={() => router.push("/DevoteeCorner/login")}
            className="
              text-purple-700
              font-semibold
              hover:underline
            "
          >
            Login
          </button>

        </p>

        {/* Back */}
        <button
          onClick={() => router.push("/")}
          className="
            mt-3
            w-full
            text-purple-700
            hover:underline
            font-medium
          "
        >
          ← Back to Website
        </button>

      </motion.div>

    </section>
  );
}