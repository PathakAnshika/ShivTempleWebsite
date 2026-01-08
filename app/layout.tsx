// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import ShivAudio from "./components/ShivaAudio";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shree Krishna Mandir | Official Website",
  description:
    "Experience peace, devotion, and spiritual connection at Shree Krishna Mandir.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Razorpay Checkout Script */}
        <script
          src="https://checkout.razorpay.com/v1/checkout.js"
          async
        ></script>
      </head>
      <body
        className={`${inter.className} bg-gradient-to-b from-yellow-50 to-orange-100 text-gray-900`}
      >
        {/* 🎵 Continuous devotional audio */}
        <ShivAudio />

        {/* 🌸 Page Content */}
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
