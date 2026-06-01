import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EDUO - LEARNING",
  description: "EDUO - LEARNING",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
    </>
  );
}
