"use client";

import { useState, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function ShivaAudio(){
  const [isPlaying, setIsPlaying] = useState(true);
  const [audio] = useState(
    typeof Audio !== "undefined" ? new Audio("/audio/shiv_mantra.mp3") : null 
  );

  useEffect(() => {
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.1; // minimal volume by default
    audio.play().catch((e) => console.log("Audio play error:", e));

    return () => {
      audio.pause();
    };
  }, [audio]);

  const toggleAudio = () => {
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((e) => console.log("Audio play error:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleAudio}
      className="fixed bottom-5 right-5 z-50 bg-white/70 backdrop-blur-md text-gray-800 p-3 rounded-full shadow-lg hover:bg-white/90 transition"
      aria-label={isPlaying ? "Mute audio" : "Play audio"}
    >
      {isPlaying ? (
        <FaVolumeUp className="w-6 h-6" />
      ) : (
        <FaVolumeMute className="w-6 h-6" />
      )}
    </button>
  );
}
