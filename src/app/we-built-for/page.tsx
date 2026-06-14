import HomeFooter from "@/components/HomePage/sections/HomeFooter";
import WeBuiltForSection from "@/components/HomePage/sections/WeBuiltForSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "We built for | EDUO",
  description: "EDUO workflows for administrators, teachers, students, and parents.",
};

export default function WeBuiltForPage() {
  return (
    <main className="bg-white font-serif text-[#0f0f12]">
      <WeBuiltForSection />
      <HomeFooter />
    </main>
  );
}
