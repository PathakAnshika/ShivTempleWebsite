"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, QrCode, HandCoins } from "lucide-react";

export function DonationWidget() {
  const [showWidget, setShowWidget] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!showWidget) return null;

  return (
    <>
      {/* Floating Widget */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        onDoubleClick={() => setOpen(true)}
        className="
        fixed
        bottom-6
        right-6
        z-[999]

        w-72

        rounded-3xl

        bg-white/90
        backdrop-blur-xl

        border border-purple-200

        shadow-2xl

        p-5

        cursor-pointer
      "
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowWidget(false);
          }}
          className="absolute top-3 right-3"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center">
            <HandCoins className="text-purple-700" />
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Support Temple
            </h3>

            <p className="text-sm text-gray-500">
              Double click to donate
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-purple-50 p-4 text-center">

          <Heart
            className="mx-auto text-purple-700"
            size={28}
          />

          <p className="mt-2 text-sm">
            Every contribution supports
            Temple Development,
            Annadaan,
            Goshala &
            Education.
          </p>

        </div>
      </motion.div>

      {/* Modal */}
      {/* Modal */}
<AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setOpen(false)}
      className="
        fixed inset-0
        z-[9999]
        bg-black/60
        backdrop-blur-md

        flex
        items-center
        justify-center

        p-4
      "
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="
          relative

          w-full
          max-w-4xl

          bg-white

          rounded-[30px]

          border border-purple-100

          shadow-[0_25px_70px_rgba(0,0,0,.18)]

          overflow-hidden
        "
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="
            absolute
            top-4
            right-4

            w-10
            h-10

            rounded-full

            bg-gray-100

            hover:bg-red-100

            flex
            items-center
            justify-center

            transition
          "
        >
          <X size={18} />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-6 sm:p-8 items-center">

          {/* LEFT */}
          <div className="text-center">

            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-orange-100 flex items-center justify-center text-3xl mx-auto">
              🪔
            </div>

            <h2 className="text-3xl font-bold text-purple-800 mt-4">
              Donate With Devotion
            </h2>

            <p className="text-orange-600 font-medium mt-1">
              Shri Chandreshwar Dham
            </p>

            <img
              src="/images/temple-qr.jpg"
              alt="Temple QR"
              className="
                w-56
                h-56

                mx-auto

                mt-6

                object-contain

                rounded-2xl

                border

                bg-white

                p-2

                shadow-md
              "
            />
          </div>

          {/* RIGHT */}
          <div>

            <h3 className="text-2xl font-semibold text-purple-800">
              Scan QR & Support Temple
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              Your contribution helps preserve our spiritual heritage and supports
              various temple initiatives.
            </p>

            <div className="mt-6 space-y-3 text-gray-700">

              <div>🛕 Temple Development</div>

              <div>🐄 Goshala Seva</div>

              <div>🍛 Annadaan</div>

              <div>🎓 Scholarship Program</div>

              <div>🙏 Daily Seva & Rituals</div>

            </div>

            <div className="
              mt-6

              rounded-2xl

              bg-gradient-to-r
              from-purple-50
              to-orange-50

              border border-purple-100

              p-4

              text-sm

              leading-6

              text-gray-700
            ">
              ❤️ Every donation directly supports the development of
              Shri Chandreshwar Dham and its social & spiritual initiatives.
            </div>

            <button
              onClick={() => setOpen(false)}
              className="
                mt-8

                w-full

                py-3

                rounded-full

                bg-gradient-to-r
                from-purple-700
                to-purple-500

                text-white

                font-semibold

                hover:scale-105

                transition-all
              "
            >
              Close
            </button>

          </div>

        </div>

      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}