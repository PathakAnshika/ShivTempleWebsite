"use client";

export function MarqueeStrip() {
  return (
    <div className="bg-orange-600 text-white py-2 overflow-hidden whitespace-nowrap">
      <marquee behavior="scroll" direction="left" scrollamount="6">
        🕉️ Har Har Mahadev | Jai Maa Durga | Jai Shri Ram | Om Namah Shivaya |
        Jai Hanuman | Radhe Radhe | Jai Shree Krishna 🕉️
      </marquee>
    </div>
  );
}
