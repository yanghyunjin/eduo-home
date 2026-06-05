import HomeFooter from "@/components/HomePage/sections/HomeFooter";
import CompanySection from "@/components/HomePage/sections/CompanySection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company | EDUO",
  description: "Learn about EDUO learning.",
};

export default function CompanyPage() {
  return (
    <main className="bg-white font-serif text-[#0f0f12]">
      <CompanySection />
      <HomeFooter />
    </main>
  );
}
