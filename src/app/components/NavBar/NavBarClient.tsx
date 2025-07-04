"use client";

import { useEffect, useState } from "react";
import { GlobalnavDocument } from "../../../../prismicio-types";

interface NavBarClientProps {
  globalnav: GlobalnavDocument;
}

// TODO: sticky
export default function NavBarClient({ globalnav }: NavBarClientProps) {
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    // console.log("scroll height", document.documentElement.scrollHeight);
    function updateHeight() {
      // documentElement.scrollHeight is the total page height,
      // including what’s off-screen and needs scrolling
      setPageHeight(document.documentElement.scrollHeight);
    }

    // Run once on mount
    updateHeight();

    // Update if the window resizes or user scrolls
    window.addEventListener("scroll", updateHeight);
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("scroll", updateHeight);
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div
      // Pin the bar to the left
      className="bg-beige sticky top-0 left-0 w-16"
      // Dynamically set height based on total page height
      style={{ height: pageHeight }}
    >
      {globalnav.data.menuItems.map((nav_item, i) => (
        <div
          key={nav_item.label}
          className={`text-darkGrey font-extrabold text-xl [writing-mode:vertical-rl] rotate-180 
            ${i == 0 ? `pb-32 pt-32` : "pt-32"} text-center pl-4 pr-4`}
        >
          {nav_item.label}
        </div>
      ))}
    </div>
  );
}
