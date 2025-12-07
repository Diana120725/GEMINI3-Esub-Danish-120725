import React, { useState, useRef } from 'react';
import { THEMES, TEXTS } from '../constants';
import { Theme, Language } from '../types';
import { RotateCw, Gift } from 'lucide-react';

interface LuckyWheelProps {
  onThemeSelect: (theme: Theme) => void;
  currentLang: Language;
}

const LuckyWheel: React.FC<LuckyWheelProps> = ({ onThemeSelect, currentLang }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef<HTMLDivElement>(null);

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    // Random spin between 5 and 10 full rotations plus a random segment
    const segmentAngle = 360 / THEMES.length;
    const randomSegment = Math.floor(Math.random() * THEMES.length);
    const extraDegrees = randomSegment * segmentAngle;
    const totalRotation = rotation + 1800 + (360 - extraDegrees); // 5 full spins minimum

    setRotation(totalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      // Determine which theme was selected based on the angle
      // The pointer is usually at top (0 degrees). 
      // We need to calculate which segment is at 0 degrees after rotation.
      // Since we rotate clockwise, the index is effectively reversed relative to the array order if mapped linearly
      // This logic simplifies to just picking the randomSegment we decided earlier
      const selectedTheme = THEMES[randomSegment];
      onThemeSelect(selectedTheme);
    }, 3000); // 3 seconds spin duration
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white/50 rounded-xl backdrop-blur-sm border shadow-sm">
      <div className="text-lg font-bold mb-4 flex items-center gap-2">
        <Gift className="w-5 h-5" />
        {TEXTS.luckyWheel[currentLang]}
      </div>
      
      <div className="relative w-48 h-48 mb-6">
        {/* Pointer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10 w-4 h-6 bg-red-600 rounded-b-full shadow-lg" />
        
        {/* Wheel */}
        <div 
          ref={wheelRef}
          className="w-full h-full rounded-full border-4 border-gray-200 shadow-xl overflow-hidden relative transition-transform duration-[3000ms] cubic-bezier(0.1, 0, 0.2, 1)"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {THEMES.map((theme, index) => {
            const angle = 360 / THEMES.length;
            const rotate = index * angle;
            const color = index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200';
            
            return (
              <div
                key={theme.id}
                className={`absolute top-0 left-1/2 w-[50%] h-[50%] origin-bottom-left ${color}`}
                style={{
                  transform: `rotate(${rotate}deg) skewY(-${90 - angle}deg)`,
                }}
              >
                {/* Optional: Add content inside segments if needed, but visually complex for 20 items */}
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={handleSpin}
        disabled={isSpinning}
        className={`px-6 py-2 rounded-full text-white font-bold shadow-lg transition-all transform active:scale-95 flex items-center gap-2
          ${isSpinning ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'}
        `}
      >
        <RotateCw className={`w-4 h-4 ${isSpinning ? 'animate-spin' : ''}`} />
        {TEXTS.spin[currentLang]}
      </button>
    </div>
  );
};

export default LuckyWheel;