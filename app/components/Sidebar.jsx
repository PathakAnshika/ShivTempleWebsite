"use client";

import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="w-60 min-h-screen bg-gradient-to-b from-orange-50 to-white p-6 shadow-lg fixed">
      <h2 className="text-2xl font-bold text-[#4a2e05] mb-10">श्री चंद्रेश्वर मंदिर</h2>
      <nav className="flex flex-col space-y-4">
        <Link href="/" className="text-lg font-medium text-gray-700 hover:text-orange-600">Home</Link>
        <Link href="/about" className="text-lg font-medium text-gray-700 hover:text-orange-600">About</Link>
        <Link href="/events" className="text-lg font-medium text-gray-700 hover:text-orange-600">Events</Link>
        <Link href="/gallery" className="text-lg font-medium text-gray-700 hover:text-orange-600">Gallery</Link>
        <Link href="/contact" className="text-lg font-medium text-gray-700 hover:text-orange-600">Contact</Link>
      </nav>
    </aside>
  );
}
