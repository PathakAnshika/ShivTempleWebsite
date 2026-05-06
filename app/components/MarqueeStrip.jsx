"use client";

export function MarqueeStrip() {
  return (
    <div className="bg-orange-600 text-white py-2 overflow-hidden">

      <div className="flex whitespace-nowrap animate-marquee gap-10 px-4 text-sm sm:text-base">

        {Array(10)
          .fill(
            "🕉️ ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् । उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात् ॥"
          )
          .map((text, i) => (
            <span key={i}>{text}</span>
          ))}

      </div>
    </div>
  );
}