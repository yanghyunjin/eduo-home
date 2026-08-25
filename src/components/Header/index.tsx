"use client";

import Image from "next/image";
import { useState } from "react";

import EduoLogo from "/public/images/logo/EDUO_LOGO.png";

const navItems = [
  { label: "Company", href: "/company" },
  { label: "We built for", href: "/we-built-for" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="eduo-header-enter fixed left-0 right-0 top-0 z-[9999] flex min-h-[60px] items-center bg-white/[0.001] px-5 backdrop-blur-[10px]">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between">
        <a href="/" aria-label="EDUO home" className="block h-10 w-[90px] shrink-0 sm:w-[120px]">
          <Image src={EduoLogo} alt="EDUO" className="h-10 w-auto object-contain" priority />
        </a>
        <div className="flex items-center gap-2 md:gap-8">
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
          <a
            href="mailto:support@eduolearning.com?subject=Request%20a%20Demo"
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-[#7037d8] px-3 font-sans text-[11px] font-semibold leading-none text-white shadow-[0_6px_20px_rgba(112,55,216,0.32)] transition hover:-translate-y-0.5 hover:bg-[#5f2bbd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7037d8] sm:px-5 sm:text-[14px]"
            aria-label="Request a demo by email"
          >
            Request a Demo
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-10 w-10 shrink-0 items-center justify-center font-sans text-[30px] font-light leading-none text-black md:hidden"
          >
            <span className={`mt-[-2px] transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
          </button>
        </div>
      </div>
      {isOpen ? (
        <div className="absolute left-5 right-5 top-[60px] rounded-[8px] border border-black/10 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.12)] md:hidden">
          <nav className="flex flex-col gap-4 font-sans text-[16px] font-medium leading-[1.2] text-black">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
            <a
              href="https://www.eduo-learning.com/"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Log in EDUO
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
