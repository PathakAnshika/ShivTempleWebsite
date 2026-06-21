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

       {/* Premium Designer Credit */}
<div className="mt-10">

  <div
    className="
      max-w-2xl
      mx-auto

      bg-gradient-to-r
      from-[#1a2942]
      via-[#223654]
      to-[#1a2942]

      border border-[#e8c27d]/30

      rounded-3xl

      px-6 md:px-10
      py-6

      shadow-2xl
      backdrop-blur-lg

      text-center
    "
  >

    <p
      className="
        uppercase
        tracking-[3px]
        text-xs
        text-[#e8c27d]/80
      "
    >
      Website Crafted By
    </p>

    <h3
      className="
        text-2xl md:text-3xl
        font-bold
        text-[#e8c27d]
        mt-2
      "
    >
      Anshika Pathak
    </h3>

    <div
      className="
        w-20 h-[2px]
        bg-[#e8c27d]
        mx-auto
        mt-3
      "
    />

    <p
      className="
        text-white/70
        text-sm
        mt-4
      "
    >
      Full Stack Developer • UI/UX Designer
    </p>

    <div
      className="
        mt-5

        flex
        flex-col
        md:flex-row

        justify-center
        items-center

        gap-3 md:gap-8
      "
    >

      <a
        href="tel:+919798417750"
        className="
          bg-white/10
          border border-white/10

          px-4 py-2
          rounded-full

          text-white/90
          hover:text-[#e8c27d]

          transition
        "
      >
        📞 +91 9798417750
      </a>

      <a
        href="mailto:pthkanshika@gmail.com"
        className="
          bg-white/10
          border border-white/10

          px-4 py-2
          rounded-full

          text-white/90
          hover:text-[#e8c27d]

          transition
        "
      >
        📧 pthkanshika@gmail.com
      </a>

    </div>

  </div>

</div>
      </div>
    </footer>
  );
}