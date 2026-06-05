"use client";

import Image from "next/image";

import EduoLogo from "/public/images/logo/EDUO_LOGO.png";

const navItems = [
  { label: "Company", href: "/company" },
  { label: "We built for", href: "/we-built-for" },
  { label: "Resources", href: "/#contact" },
];

const Header = () => {
  return (
    <header className="eduo-header-enter fixed left-0 right-0 top-0 z-[9999] flex h-[60px] items-center bg-white/[0.001] px-5 backdrop-blur-[10px]">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between">
        <a href="/" aria-label="EDUO home" className="block h-10 w-[120px]">
          <Image src={EduoLogo} alt="EDUO" className="h-10 w-auto object-contain" priority />
        </a>
        <nav className="hidden items-center gap-10 font-sans text-[16px] font-medium leading-[1.2] text-black md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-[#7037d8]">
              {item.label}
            </a>
          ))}
          <a
            href="https://www.eduo-learning.com/"
            className="transition hover:text-[#7037d8]"
            target="_blank"
            rel="noreferrer"
          >
            Log in EDUO
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
