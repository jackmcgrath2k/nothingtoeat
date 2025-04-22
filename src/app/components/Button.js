'use client';

import { useState } from 'react';

const surpriseTexts = [
  "hell naw!",
  "damn!",
  "u a hater",
  "really?",
  "bro cmon",
  ":(",
  "not cool",
  "eat me",
  "dawg",
  "why u even here?",
  "r u even hungry?",
  "srsly?",
  "bite me",
  "u lazy as hell",
  "fr?",
  "girl what are we doin",
  "not enough protein?",
  "not enough avocado?",
  "road works ahead?",
  "are we deadass rn",
  "cmon big man",
  "SWAMP IZZO",
  "u fw 2hollis?",
  "MAN?!",
  "boutta ban u soon",
  "pick somethingggg",
  "ugh",
  "what do you want",
  "A24 or neon?",
  "eddie durkan man",
  "b'jesus",
  "picky eater",
  "k bye",
  "EAT SUMN",
  "ADSHFIAUWGHBIOUEG",
  "nom nom nom",
  "wasting my time",
  "RIP",
  ">:(",
  "D:",
  "siri play role model",
  "REVOLT",
  "eat the rich",
  "not here? eat the rich",
  "hunt billionaires",
  "huh?!?!",
  "used AI but i hate it",
  "brush ur teeth",
  "KDOT >>>> DRAKE",
  "salutations fine huzzington",
  "adios",
  "slán",
  "CARTI",
  "seeyuhh",
  "what?",
];

export default function ButtonWithTextEffect({ onClick, className = '' }) {
  const [showText, setShowText] = useState(false);
  const [randomText, setRandomText] = useState('');
  const [animationClass, setAnimationClass] = useState('');

  const handleClick = () => {
    const direction = Math.random() < 0.5 ? 'animate-throw' : 'animate-throw-opposite';
    const text = surpriseTexts[Math.floor(Math.random() * surpriseTexts.length)];

    setRandomText(text);
    setAnimationClass(direction);
    setShowText(true);

    if (onClick) onClick();

    setTimeout(() => {
      setShowText(false);
    }, 5000);
  };

  return (
    <div className="relative flex justify-center items-center">
      {showText && (
        <div className={`absolute text-xl text-black ${animationClass}`}>
          {randomText}
        </div>
      )}
<button
  type="button"
  onClick={handleClick}
  className="text-black bg-white font-medium rounded-full text-2xl p-2.5 text-center inline-flex items-center me-2"
>
  <svg
    className="w-8 h-8"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
  <span className="sr-only">Surprise button</span>
</button>

    </div>
  );
}
