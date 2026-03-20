"use client";

import { useState } from "react";
import Link from "next/link";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";

export function Navbar({ setShowLogin }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fff8f0] shadow-sm font-[Playfair_Display] text-[#4a2e05]">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 sm:px-8 py-3">
        
        {/* Logo */}
        <div className="text-lg sm:text-xl font-bold tracking-wide cursor-pointer"
             onClick={() => router.push("/")}>
          Sri Chandreshwar Mandir
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-base font-medium items-center">
          
          <li><Link href="/" className="hover:text-[#b76e79]">Home</Link></li>
          <li><Link href="#about" className="hover:text-[#b76e79]">About</Link></li>
          <li><Link href="#events" className="hover:text-[#b76e79]">Events</Link></li>

          {/* 🔥 DROPDOWN */}
          <li
            className="relative"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <span className="cursor-pointer hover:text-[#b76e79]">
              Temple Projects ▾
            </span>

            {dropdown && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-xl p-3 w-56 z-50">

                <p
                  onClick={() => router.push("/shivalaya")}
                  className="dropdown_item"
                >
                  Shivalaya
                </p>

                <p
                  onClick={() => router.push("/goshala")}
                  className="dropdown_item"
                >
                  Goshala
                </p>

                <p
                  onClick={() => router.push("/sanskriti-bhavan")}
                  className="dropdown_item"
                >
                  Sanskriti Bhavan
                </p>

                <p
                  onClick={() => router.push("/annapoorna")}
                  className="dropdown_item"
                >
                  Annapoorna Rasoi
                </p>

              </div>
            )}
          </li>

          <li><Link href="#gallery" className="hover:text-[#b76e79]">Gallery</Link></li>
          <li><Link href="#contact" className="hover:text-[#b76e79]">Contact</Link></li>

          <li>
            <button
              onClick={() => router.push("/DevoteeCorner/login")}
              className="text-2xl hover:text-[#b76e79]"
            >
              <FiUser />
            </button>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* 📱 Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#fff8f0] border-t shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-6 text-base font-medium">

            <li onClick={() => setOpen(false)}>
              <Link href="/">Home</Link>
            </li>

            <li onClick={() => setOpen(false)}>
              <Link href="#about">About</Link>
            </li>

            <li onClick={() => setOpen(false)}>
              <Link href="#events">Events</Link>
            </li>

            {/* Mobile Dropdown (simple list) */}
            <li onClick={() => setOpen(false)}>
              <Link href="/shivalaya">Shivalaya</Link>
            </li>

            <li onClick={() => setOpen(false)}>
              <Link href="/goshala">Goshala</Link>
            </li>

            <li onClick={() => setOpen(false)}>
              <Link href="/sanskriti-bhavan">Sanskriti Bhavan</Link>
            </li>

            <li onClick={() => setOpen(false)}>
              <Link href="/annapoorna">Annapoorna Rasoi</Link>
            </li>

            <li onClick={() => setOpen(false)}>
              <Link href="#gallery">Gallery</Link>
            </li>

            <li onClick={() => setOpen(false)}>
              <Link href="#contact">Contact</Link>
            </li>

            <li>
              <button
                onClick={() => {
                  setOpen(false);
                  router.push("/DevoteeCorner/login");
                }}
                className="flex items-center gap-2 text-lg"
              >
                <FiUser /> Login
              </button>
            </li>

          </ul>
        </div>
      )}

      {/* ✨ Styles */}
      <style jsx>{`
        .dropdown_item {
          padding: 10px;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.2s;
        }

        .dropdown_item:hover {
          background: #fff2e2;
        }
      `}</style>

    </nav>
  );
}