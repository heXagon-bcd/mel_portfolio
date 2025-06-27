import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import dynamic from "next/dynamic";
import { notFound } from 'next/navigation';

const NavBar = dynamic(() => import("./components/NavBar/NavBar"));

export default async function Page() {
  const client = createClient();

  const page = await client.getSingle("home").catch(() => notFound());

  return (
    <div className="relative flex">
      <div className="h-fit">
        <NavBar />
      </div>
      <div className="flex flex-col w-[calc(100%-4rem)] h-screen">
        <SliceZone
          slices={page.data.slices}
          components={components}
        />
      </div>
    </div>
  );
}
