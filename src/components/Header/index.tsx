"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToTop2 = () => {
    window.scrollTo({
      top: 2280,
      behavior: "smooth",
    });
  };

  const scrollToTop3 = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center justify-center ${
          sticky
            ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition "
            : "absolute bg-transparent"
        }`}
      >
        <div className="relative flex h-20 w-full max-w-screen-2xl items-center justify-between px-4">
          <div className="flex w-full items-center justify-between ">
            <div
              className="ml-20 h-10 w-[120px] bg-cover bg-center"
              style={{ backgroundImage: "url(/images/logo/EDUO_LOGO.png)" }}
            ></div>
            <div className="flex w-1/4 items-center justify-end">
              <div className="flex ">
                <div
                  onClick={scrollToTop}
                  className={`cursor-pointer font-medium sm:text-black lg:text-white ${sticky ? "text-black" : "text-white"} mr-10 text-lg`}
                >
                  Home
                </div>
                <div
                  onClick={scrollToTop2}
                  className={`cursor-pointer font-normal sm:text-black lg:text-white ${sticky ? "text-black" : "text-white"} mr-10 text-lg`}
                >
                  About
                </div>
              </div>
              <button
                onClick={scrollToTop3}
                className="mr-10 rounded-lg bg-red-500 px-4 py-2 text-lg font-medium text-white"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
