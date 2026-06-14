import Image from "next/image";

import { EduoLogo } from "../assets";

const HomeFooter = () => {
  return (
    <footer className="border-t border-black/5 px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex max-w-[1152px] flex-col gap-16">
        <nav className="flex gap-10 font-sans text-[16px] font-medium leading-[1.2]">
          <a href="/company">Company</a>
          <a href="/we-built-for">We built for</a>
        </nav>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <Image src={EduoLogo} alt="EDUO" className="h-10 w-auto object-contain" />
          <p className="font-['Roboto_Mono'] text-[12px] font-normal leading-[1.4] tracking-[-0.01em] text-[#7A7E86]">
            @EDUO Learning 2026 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
