import Image from "next/image";

import { EduoLogo } from "../assets";

const HomeFooter = () => {
  return (
    <footer className="border-t border-black/5 px-6 py-12">
      <div className="mx-auto flex max-w-[1152px] flex-col gap-12">
        <nav className="flex gap-10 font-sans text-xs font-semibold">
          <a href="#company">Company</a>
          <a href="#we-built-for">We built for</a>
          <a href="#contact">Resources</a>
        </nav>
        <div className="flex items-end justify-between gap-8">
          <Image src={EduoLogo} alt="EDUO" className="h-10 w-auto object-contain" />
          <p className="font-sans text-xs text-black/45">EDUO Learning. 2024. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
