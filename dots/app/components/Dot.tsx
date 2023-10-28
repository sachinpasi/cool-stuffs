import React, { useEffect, useRef } from "react";
import { useSpring, motion } from "framer-motion";

const BIG_SIZE = 90;
const SMALL_SIZE = 15;
const PER_PX = 0.3;

const Dot = ({
  mousePosition,
}: {
  mousePosition: { x: number; y: number };
}) => {
  const size = useSpring(SMALL_SIZE, {
    damping: 30,
    stiffness: 200,
  });

  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dotRef.current) return;
    const { x, y } = mousePosition;
    const { x: dotX, y: dotY } = dotRef.current.getBoundingClientRect();

    const distance = Math.sqrt(
      Math.pow(Math.abs(x - dotX), 2) + Math.pow(Math.abs(y - dotY), 2)
    );

    size.set(Math.max(BIG_SIZE - PER_PX * distance, SMALL_SIZE));
  }, [mousePosition, size]);

  return (
    <div
      ref={dotRef}
      className="relative w-[100px] h-[100px] flex justify-center items-center"
    >
      <motion.div
        style={{
          width: size,
          height: size,
        }}
        className="bg-[#FFA686] rounded-full"
      ></motion.div>
    </div>
  );
};

export default Dot;
