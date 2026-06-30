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
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
            fixed
            inset-0
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
              initial={{
                scale: .8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: .8,
                opacity: 0,
              }}
              transition={{
                duration: .25,
              }}
              className="
              bg-white

              rounded-[36px]

              w-full
              max-w-md

              p-8

              relative

              shadow-2xl
            "
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-5"
              >
                <X />
              </button>

              <div className="text-center">

                <div className="
                w-20
                h-20
                rounded-full

                bg-purple-100

                flex
                items-center
                justify-center

                mx-auto
                ">
                  <QrCode
                    className="text-purple-700"
                    size={40}
                  />
                </div>

                <h2 className="text-3xl font-bold mt-5 text-purple-800">
                  Shri Chandreshwar Dham
                </h2>

                <p className="text-gray-500 mt-2">
                  Support Temple Development
                </p>

                <img
  src="/images/qr.jpeg"
  alt="Temple Donation QR"
  className="
    w-56
    h-56
    sm:w-64

    sm:h-64

    object-contain

    mx-auto
    mt-8

    rounded-2xl

    bg-white
    p-3

    border-2 border-purple-100
    shadow-lg
  "
/>
<div className="mt-6 text-center space-y-2">
  <h3 className="text-xl font-semibold text-purple-800">
    Scan & Donate
  </h3>

  <p className="text-gray-600 text-sm">
    Every contribution supports
    <br />
    🛕 Temple Development
    <br />
    🐄 Goshala
    <br />
    🍛 Annadaan
    <br />
    🎓 Scholarship Programs
  </p>
</div>
                <div className="mt-6 space-y-2 text-gray-600">

                  <p>
                    UPI ID
                  </p>

                  <h3 className="font-semibold text-lg">
                    temple@upi
                  </h3>

                  <p>
                    Scan & Donate
                  </p>

                </div>

                <div className="
                mt-8

                rounded-2xl

                bg-purple-50

                p-5

                text-sm
                ">
                  🪔 Your contribution supports
                  Temple Construction,
                  Goshala,
                  Annadaan,
                  Scholarship &
                  Daily Seva.
                </div>

                <button
                  className="
                  mt-8

                  w-full

                  py-4

                  rounded-full

                  bg-gradient-to-r
                  from-purple-700
                  to-purple-500

                  text-white

                  font-semibold

                  hover:scale-105

                  transition
                "
                >
                  Thank You ❤️
                </button>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}