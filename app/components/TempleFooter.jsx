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

       {/* Designer Credit */}
<div className="border-t border-white/10 mt-8 pt-5 text-center">

  <p className="text-sm text-white/50">
    Website Designed & Developed with ❤️ by
  </p>

  <h3
    className="
      text-lg md:text-xl
      font-semibold
      text-[#e8c27d]
      mt-1
    "
  >
    Anshika Pathak
  </h3>

  <div
    className="
      flex
      flex-col sm:flex-row
      justify-center
      items-center
      gap-2 sm:gap-5
      mt-2
      text-xs md:text-sm
      text-white/60
    "
  >
    <a
      href="tel:+919798417750"
      className="hover:text-[#e8c27d] transition"
    >
      📞 +91 9798417750
    </a>

    <span className="hidden sm:block">•</span>

    <a
      href="mailto:pthkanshika@gmail.com"
      className="hover:text-[#e8c27d] transition"
    >
      📧 pthkanshika@gmail.com
    </a>
  </div>

</div>
</div>
    </footer>
  );
}