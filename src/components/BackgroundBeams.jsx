import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const BackgroundBeams = ({ className }) => {
  const beamsRef = useRef(null);

  return (
    <div
      ref={beamsRef}
      className={cn(
        "absolute inset-0 z-0 h-full w-full overflow-hidden bg-transparent",
        className
      )}
    >
      <svg
        className="pointer-events-none absolute h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <motion.rect
            key={i}
            initial={{ y: "-100%", x: `${i * 20}%`, opacity: 0 }}
            animate={{
              y: "200%",
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
            width="2"
            height="100"
            fill="url(#beam-gradient)"
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,1)_80%)]" />
    </div>
  );
};
