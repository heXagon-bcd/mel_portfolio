import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import NavBar from "./components/navbar";
import dynamic from "next/dynamic";

export default async function Page({ params }) {
  const client = createClient();

  const page = await client.getSingle("home").catch(() => notFound());

  return (
    <div className="flex flex-row">
      <NavBar className="fixed" />
      <SliceZone
        className="flex-1"
        slices={page.data.slices}
        components={components}
      />
    </div>
  );
}
