"use client";

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import {HeroSection }from "./components/HeroSection";
 import {MarqueeStrip} from "./components/MarqueeStrip";
import { AboutSection } from "./components/AboutSection";
import {AartiTiming} from "./components/AartiTiming";
import {AartiSection} from "./components/AartiSection";
import {EventCalendar} from "./components/EventCalendar";
import {LiveDarshan } from "./components/LiveDarshan";
import HomeDonationSection from "./components/HomeDonationSection";
import { GallerySection } from "./components/GallerySection";
import { MembershipSection } from "./components/MembershipSection";
import { ContactSection } from "./components/ContactSection";
import {StayInTouchSection} from "./components/StayInTouchSection";
import {TempleFooter} from "./components/TempleFooter"
export default function HomePage() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 text-gray-800">
      {/* Navbar */}
      <Navbar setShowLogin={setShowLogin} />

      {/* Sections */}
      <section id="hero">
        <HeroSection />
      </section>
     { <MarqueeStrip/>} 
      <section id="about">
        <AboutSection />
      </section>
      <AartiTiming/>
      <AartiSection/>
      <EventCalendar/>
      <section id="events">
        <LiveDarshan />
      </section>
      <HomeDonationSection/>
      <section id="gallery">
        <GallerySection />
      </section>
      {/* { <DevoteeCorner/> } */}
      <MembershipSection/>
      <section id="contact">
        <ContactSection />
        <StayInTouchSection/>
        <TempleFooter/>
      </section>
      {/* Login Popup */}
      {/* {showLogin && (
        <div className="fixed bottom-5 right-5 w-80 bg-white/95 backdrop-blur-lg shadow-xl rounded-2xl px-5 py-6 border border-yellow-300 z-50">
          <h3 className="text-xl font-bold text-center mb-4 text-[#4a2e05]">Login</h3>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
            >
              Login
            </button>
          </form>
          <button
            onClick={() => setShowLogin(false)}
            className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-lg"
          >
            ✖
          </button>
        </div>
      )} */}
    </main>
  );
}
