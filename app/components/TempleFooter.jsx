"use client";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export function TempleFooter() {
  return (
    <footer className="bg-[#0A1A2F] py-12 text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* 🔥 3 COLUMN GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* 🏛 Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-3">
              Sri Chandreshwar Mandir
            </h3>

            <p className="text-white/70 text-sm leading-relaxed">
              A sacred place of devotion, spirituality and service.
              Connecting devotees with divine energy.
            </p>
          </div>

          {/* 📍 Column 2 */}
          <div>
            <h4 className="font-semibold mb-3 text-white">
              📍 Permanent Address
            </h4>

            <p className="text-white/70 text-sm leading-relaxed">
              10 km from St. Columbas College, Hazaribagh,
              Churchu Road, before right to Devi Mandap,
              Chandwar, Jharkhand – 825302.
            </p>
          </div>

          {/* 📬 Column 3 */}
          <div>
            <h4 className="font-semibold mb-3 text-white">
              📬 Correspondence
            </h4>

            <p className="text-white/70 text-sm leading-relaxed">
              Akhoury Ravindra Prasad,<br/>
              Sri Raghav Nilayam,<br/>
              Jay Prabha Nagar,<br/>
              Hazaribagh – 825301.
            </p>
          </div>

        </div>

        {/* 🌐 Social Icons CENTER */}
        <div className="flex justify-center gap-6 mt-10 text-white/80">
          {[FaFacebook, FaInstagram, FaYoutube, FaTwitter].map((Icon, i) => (
            <a key={i} href="#" className="hover:text-white transition">
              <Icon className="text-xl" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-6 mb-4"></div>

       <div className="border-t border-white/10 mt-6 pt-3 text-center">

  <p className="text-xs text-white/50">
    Crafted with ❤️ by
    <span className="ml-1 font-semibold text-[#e8c27d]">
      Anshika Pathak
    </span>
    <span className="mx-2 text-white/20">•</span>
    9798417750
  </p>

</div>
</div>
    </footer>
  );
}