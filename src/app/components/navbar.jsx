"use client";

import { useState, useEffect } from "react";

const menu = [
  { name: "work", id: 1 },
  { name: "about", id: 2 },
  { name: "resume", id: 3 },
];

export default function NavBar() {
  console.log("scroll height", document.documentElement.scrollHeight);
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    function updateHeight() {
      // documentElement.scrollHeight is the total page height,
      // including what’s off-screen and needs scrolling
      setPageHeight(document.documentElement.scrollHeight);
    }

    // Run once on mount
    updateHeight();

    // Update if the window resizes or user scrolls
    window.addEventListener("scroll", updateHeight());
    window.addEventListener("resize", updateHeight());

    return () => {
      window.removeEventListener("scroll", updateHeight());
      window.removeEventListener("resize", updateHeight());
    };
  }, []);

  return (
    <div
      // Pin the bar to the left
      className="bg-holidaygreen sticky top-0 left-0 w-16"
      // Dynamically set height based on total page height
      style={{ height: pageHeight }}
    >
      {menu.map((item) => (
        <div
          key={item.id}
          className={`text-white font-extrabold text-xl [writing-mode:vertical-rl] rotate-180 
            ${item.id === 1 ? `pb-32 pt-32` : "pt-32"} text-center pl-4 pr-4`}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
