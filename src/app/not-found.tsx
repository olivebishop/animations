'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MaskedCursor: React.FC = () => {
  // define cursor coordinates
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // define if mouse is hovered on element
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // define location of mouse
  useEffect(() => {
    const setFromEvent = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  const size = isHovered ? "450" : "30";

  return (
    <div className="flex items-center justify-center h-screen w-screen flex-col">
      <motion.div
        className="absolute bg-green-500 text-gray-100 flex items-center justify-center h-screen w-screen"
        style={{ WebkitMaskImage: `url("/mask.svg")` }}
        animate={{
          WebkitMaskPosition: `${mousePosition.x - parseInt(size) / 2}px ${
            mousePosition.y - parseInt(size) / 2
          }px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ ease: "backOut", duration: 0.4 }}
      >
        <h1
          className="text-4xl cursor-default"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          not <br /> found
        </h1>
      </motion.div>
      <div className="relative z-10">
        <h1 className="text-4xl cursor-default">
          404 <br /> page
        </h1>
      </div>
    </div>
  );
};

export default MaskedCursor;
