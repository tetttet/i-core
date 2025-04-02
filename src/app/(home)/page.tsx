import Hero from "@/components/sections/Hero";
import Model from "@/components/sections/Model";
import Video from "@/components/sections/Video";
import { description, logo_name } from "@/constant/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: logo_name,
  description: description,
};

export default function Home() {
  return (
    <>
      <Hero />
      <Model />
      <Video />
    </>
  );
}
