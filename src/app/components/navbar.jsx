import React from "react";

const menu = [
  { name: "work", id: 1 },
  { name: "about", id: 2 },
  { name: "resume", id: 3 },
];

export default function NavBar() {
  return (
    <div className="bg-holidaygreen  min-h-screen">
      {menu.map((item) => {
        return (
          <div
            className={`text-white font-extrabold text-xl [writing-mode:vertical-rl]
            rotate-180 ${item.id === 1 ? `mb-32 mt-32` : "mb-32"} text-center ml-4 mr-6`}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
