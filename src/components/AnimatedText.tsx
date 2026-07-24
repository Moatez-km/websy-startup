import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface CharProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Char: React.FC<CharProps> = ({ char, index, total, progress }) => {
  // Distribute character fade-in over scroll progress
  const start = index / total;
  // Give it an overlap/window to fade in
  const end = Math.min(1, start + 0.15);
  
  // Transform scroll progress to absolute span opacity (0 to 1)
  const opacity = useTransform(progress, [start, end], [0, 1]);

  if (char === ' ') {
    return <span>&nbsp;</span>;
  }

  return (
    <span className="relative inline-block select-none">
      {/* 0.2 opacity placeholder */}
      <span className="opacity-20">{char}</span>
      {/* Absolutely positioned animated character overlay */}
      <motion.span
        style={{ opacity }}
        className="absolute top-0 left-0 text-[#D7E2EA]"
      >
        {char}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p
      ref={containerRef}
      className={`text-center font-medium leading-relaxed max-w-[560px] text-[#D7E2EA] select-none ${className}`}
      style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
    >
      {chars.map((char, index) => (
        <Char
          key={index}
          char={char}
          index={index}
          total={chars.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
};
