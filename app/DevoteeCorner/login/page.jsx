"use client";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {

  const router = useRouter();

  const [loginType, setLoginType] = useState("phone");

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* -----------------------------
      PHONE LOGIN
  ----------------------------- */
  const handlePhoneLogin = async () => {

    try {

      const response = await fetch(
        "/api/login-phone",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            phone,
            password,
          }),
        }
      );

      const data = await response.json();
      console.log("FULL DATA:", data);
console.log("USER:", data.user);
console.log("ROLE:", data.user?.role);
      if (!response.ok) {

        alert(data.error);
        return;
      }

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      alert("Login Successful 🙏");

      setTimeout(() => {

       if (data.user.role === "admin") {

  router.push("/admin/dashboard");

} else {

  const params =
    new URLSearchParams(
      window.location.search
    );

  const redirect =
    params.get("redirect");

  if (
    redirect === "scholarship"
  ) {

    router.push(
      "/dashboard?tab=scholarship"
    );

  } else {

    router.push("/dashboard");
  }
}
      }, 1000);

    } catch (error) {

      console.log(error);

      alert("Something went wrong");
    }
  };

  /* -----------------------------
      EMAIL LOGIN
  ----------------------------- */
  const handleEmailLogin = async () => {

    try {

      const response = await fetch(
        "/api/login-email",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
console.log(data.user);

      if (!response.ok) {

        alert(data.error);
        return;
      }

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      alert("Login Successful 🙏");

     setTimeout(() => {

 if (data?.user?.role === "admin") {

  router.push("/admin/dashboard");

} else {

  const params =
    new URLSearchParams(
      window.location.search
    );

  const redirect =
    params.get("redirect");

  if (
    redirect === "scholarship"
  ) {

    router.push(
      "/dashboard?tab=scholarship"
    );

  } else {

    router.push("/dashboard");
  }
}

}, 1000);

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

      {/* BG BLOBS */}
      <div className="
        absolute top-0 left-0
        w-72 h-72
        bg-purple-300/30
        blur-3xl
        rounded-full
      "></div>

      <div className="
        absolute bottom-0 right-0
        w-96 h-96
        bg-pink-300/30
        blur-[120px]
        rounded-full
      "></div>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}

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

        {/* HEADING */}
        <h2 className="
          text-2xl
          font-bold
          text-center
          text-purple-900
          mb-3
        ">
          Welcome Back, Devotee 🙏
        </h2>

        <p className="
          text-center
          text-gray-600
          mb-5
        ">
          Continue your spiritual journey
          with Shri Chandreshwar Dham.
        </p>

        {/* SWITCH */}
        <div className="
          flex
          bg-purple-100/70
          p-1.5
          rounded-2xl
          mb-5
        ">

          <button
            onClick={() => setLoginType("phone")}

            className={`
              flex-1
              py-2.5
              rounded-xl
              text-sm
              font-medium

              ${
                loginType === "phone"
                  ? "bg-white text-purple-700 shadow-md"
                  : "text-gray-600"
              }
            `}
          >
            Login with Phone
          </button>

          <button
            onClick={() => setLoginType("email")}

            className={`
              flex-1
              py-2.5
              rounded-xl
              text-sm
              font-medium

              ${
                loginType === "email"
                  ? "bg-white text-purple-700 shadow-md"
                  : "text-gray-600"
              }
            `}
          >
            Login with Email
          </button>

        </div>

        {/* FORM */}
        <div className="grid md:grid-cols-2 gap-4">

          {/* PHONE LOGIN */}
          {loginType === "phone" && (
            <>
              <div>

                <label className="
                  block text-sm
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
                      setPhone(e.target.value.trim())
                    }

                    placeholder="Enter phone number"

                    className="
                      w-full
                      pl-12 pr-4 py-3
                      rounded-2xl
                      border border-purple-200
                      bg-white/80
                      text-gray-700
                      outline-none
                    "
                  />

                </div>
              </div>
            </>
          )}

          {/* EMAIL LOGIN */}
          {loginType === "email" && (
            <>
              <div>

                <label className="
                  block text-sm
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

                    placeholder="Enter email address"

                    className="
                      w-full
                      pl-12 pr-4 py-3
                      rounded-2xl
                      border border-purple-200
                      bg-white/80
                      text-gray-700
                      outline-none
                    "
                  />

                </div>
              </div>
            </>
          )}

          {/* PASSWORD */}
          <div>

            <label className="
              block text-sm
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

                placeholder="Enter password"

                className="
                  w-full
                  pl-12 pr-4 py-3
                  rounded-2xl
                  border border-purple-200
                  bg-white/80
                  text-gray-700
                  outline-none
                "
              />

            </div>
          </div>

          {/* BUTTON */}
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
            "

            onClick={
              loginType === "phone"
                ? handlePhoneLogin
                : handleEmailLogin
            }
          >
            Continue
          </motion.button>

        </div>

        {/* SIGNUP */}
        <p className="
          text-center
          text-gray-700
          mt-4
        ">
          Don’t have an account?{" "}

          <Link
            href="/DevoteeCorner/register"

            className="
              text-purple-700
              font-semibold
              hover:underline
            "
          >
            Create Account
          </Link>
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

        </p>

      </motion.div>

    </section>
  );
}