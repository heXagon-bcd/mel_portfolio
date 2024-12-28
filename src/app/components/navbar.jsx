import React from "react";

const menu = [
  { name: "work", id: 1 },
  { name: "about", id: 2 },
  { name: "resume", id: 3 },
];

export default function NavBar() {
  return (
    <div className="bg-holidaygreen sticky top-0 self-start min-h-lvh w-16">
      {menu.map((item, index) => {
        return (
          <div
            className={`text-white font-extrabold text-xl [writing-mode:vertical-rl]
            rotate-180 ${item.id === 1 ? `pb-32 pt-32` : "pt-32"} text-center pl-4 pr-4`}
            key={index}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
