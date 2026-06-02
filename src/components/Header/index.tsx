"use client";

import Image from "next/image";

import EduoLogo from "/public/images/logo/EDUO_LOGO.png";

const navItems = [
  { label: "Company", href: "#company" },
  { label: "We built for", href: "#we-built-for" },
  { label: "Resources", href: "#contact" },
];

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-[9999] flex h-[60px] w-full items-center bg-transparent px-5">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between">
        <a href="#home" aria-label="EDUO home" className="block h-10 w-[120px]">
          <Image src={EduoLogo} alt="EDUO" className="h-10 w-auto object-contain" priority />
        </a>
        <nav className="hidden items-center gap-10 font-sans text-sm font-semibold text-black md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-[#7037d8]">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="transition hover:text-[#7037d8]">
            Log in EDUO
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
