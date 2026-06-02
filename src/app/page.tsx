import ScrollUp from "@/components/Common/ScrollUp";
import HomePage from "@/components/HomePage";
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
      <HomePage />
    </>
  );
}
