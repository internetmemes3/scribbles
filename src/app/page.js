"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activePopup, setActivePopup] = useState(null);

  const getRandomPosition = () => ({
    top: `${Math.random() * 80}vh`,
    left: `${Math.random() * 80}vw`,
  });

  return (
    <div className="bg-white relative items-center justify-items-center min-h-screen ">
      <div className="w-full h-full flex items-center justify-center">
        <Image
          src="/background.jpeg"
          alt="Background"
          width={1000}
          height={1000}
          className="object-cover"
          quality={100}
          priority
        />
      </div>
      <button
        onClick={() => setActivePopup('roadmap')}
        style={getRandomPosition()}
        className="absolute w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 opacity-0 hover:opacity-20 bg-black rounded-full cursor-pointer transition-opacity"
      />
      <button
        onClick={() => setActivePopup('ta')}
        style={getRandomPosition()}
        className="absolute w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 opacity-0 hover:opacity-20 bg-white rounded-full cursor-pointer transition-opacity"
      />
      <button
        onClick={() => setActivePopup('ven')}
        style={getRandomPosition()}
        className="absolute w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 opacity-0 hover:opacity-20 bg-white rounded-full cursor-pointer transition-opacity"
      />

      {activePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="relative w-full h-[50vh] sm:h-[70vh] md:h-[80vh] max-w-[90vw] md:max-w-[80vw]">
            <button
              onClick={() => setActivePopup(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 text-white text-xl bg-black bg-opacity-50 w-8 h-8 rounded-full"
            >
              ×
            </button>
            <Image
              src={`/${activePopup === 'roadmap' ? 'roadmap.jpg' : activePopup === 'ta' ? 'TA.jpg' : 'ven.jpeg'}`}
              alt={activePopup}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}

      <main className="flex sm:flex-row items-center justify-center w-full space-x-8">
        <a 
          href="https://x.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] relative"
        >
          <Image
            src="/twitter.jpg"
            alt="twitter"
            fill
            className="object-cover"
            quality={100}
          />
        </a>
        <a 
          href="https://dexscreener.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] relative"
        >
          <Image
            src="/dexlink.jpg"
            alt="dexscreener"
            fill
            className="object-cover"
            quality={100}
          />
        </a>
      </main>
    </div>
  );
}
