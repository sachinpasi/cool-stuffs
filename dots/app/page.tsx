"use client";
import { useEffect, useRef, useState } from "react";
import Dot from "./components/Dot";

const BIG_SIZE = 120;
const SMALL_SIZE = 15;
const PER_PX = 0.3;

export default function Home() {
  const [mousePosition, setmousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setmousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handler);

    return () => window.removeEventListener("mousemove", handler);
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-wrap w-[700px] mx-auto">
        {Array.from({ length: 49 }, (_, i) => (
          <Dot key={i} mousePosition={mousePosition} />
        ))}
      </div>
    </div>
  );
}
