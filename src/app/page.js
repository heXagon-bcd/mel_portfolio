import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import NavBar from "./components/navbar";
import dynamic from "next/dynamic";

export default async function Page({ params }) {
  const client = createClient();

  const page = await client.getSingle("home").catch(() => notFound());

  return (
    <div className="relative flex">
      <div className="h-fit bg-holidaygreen">
        <NavBar className=" " />
      </div>
      <div className="flex flex-col w-[calc(100%-4rem)] h-screen ">
        <SliceZone
          className=""
          slices={page.data.slices}
          components={components}
        />
      </div>
    </div>
  );
}
