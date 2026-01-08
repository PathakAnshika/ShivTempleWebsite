"use client";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export function TempleFooter() {
  return (
    <footer className="bg-[#0A1A2F] py-10 mt-16 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Area with Logo and Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-xl font-bold text-center md:text-left">
              Sri Chandreswar Mandir
            </h3>
            <p className="text-white/70 text-sm mt-1 text-center md:text-left">
              jay prabha nagar ,Hazaribag,  jharkhand -825301.
            </p>
          </div>

          <div className="flex gap-4 text-white/80">
            {[FaFacebook, FaInstagram, FaYoutube, FaTwitter].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-white transition">
                <Icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-6 mb-4"></div>

        {/* Bottom Links and Copyright */}
        <div className="flex flex-col md:flex-row justify-between text-sm text-white/70 gap-3">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
