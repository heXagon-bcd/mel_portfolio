import { createClient } from "@/prismicio.ts";
import NavBarClient from "@/app/components/NavBar/NavBarClient.tsx";

export default async function NavBar() {
  const client = createClient();
  const globalnav = await client.getSingle("globalnav");

  return <NavBarClient globalnav={globalnav} />
}
