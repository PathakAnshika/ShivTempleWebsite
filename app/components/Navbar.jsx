"use client";

import { useState } from "react";
import Link from "next/link";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";

export function Navbar({ setShowLogin }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fff8f0] shadow-sm font-[Playfair_Display] text-[#4a2e05]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 sm:px-8 py-3">
        
        {/* Logo */}
        <div className="text-lg sm:text-xl font-bold tracking-wide">
          Sri Chandreshwar Mandir
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-base font-medium items-center">
          <li><Link href="/" className="hover:text-[#b76e79]">Home</Link></li>
          <li><Link href="#about" className="hover:text-[#b76e79]">About</Link></li>
          <li><Link href="#events" className="hover:text-[#b76e79]">Events</Link></li>
          <li><Link href="#gallery" className="hover:text-[#b76e79]">Gallery</Link></li>
          <li><Link href="#contact" className="hover:text-[#b76e79]">Contact</Link></li>
          <li>
            <button
              onClick={() => router.push("/DevoteeCorner/login")}
              className="text-2xl hover:text-[#b76e79]"
              title="Account / Login"
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

      {/* Mobile Menu */}
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
    </nav>
  );
}
