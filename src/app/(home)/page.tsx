import Hero from "@/components/sections/Hero";
import Video from "@/components/sections/Video";
import { description, logo_name } from "@/constant/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: logo_name,
  description: description,
  icons: "/core.png",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Video />
    </>
  );
}
