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
  const [navbar, setNavbar] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setSticky(true);
      setNavbar(false);
    } else if (width < 1280) {
      setSticky(true);
      setNavbar(true);
    } else {
      setSticky(false);
      setNavbar(true);
    }
  };

  const [isInit, setInit] = useState(false);
  useEffect(() => {
    if (!isInit) {
      setInit(true);
      handleResize();
    }
    window.addEventListener("scroll", handleStickyNavbar);
    window.addEventListener("resize", handleResize);
  }, [isInit]);

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
              className="h-10 w-[120px] bg-cover bg-center xl:ml-20"
              style={{ backgroundImage: "url(/images/logo/EDUO_LOGO.png)" }}
            ></div>
            <div
              className={`${navbar ? "visible" : "invisible"} flex w-1/4 items-center justify-end`}
            >
              <div className="flex ">
                <div
                  onClick={scrollToTop}
                  className={`cursor-pointer font-medium ${sticky ? "text-black" : "text-white"} mr-10 text-lg`}
                >
                  Home
                </div>
                <div
                  onClick={scrollToTop2}
                  className={`cursor-pointer font-normal ${sticky ? "text-black" : "text-white"} mr-10 text-lg`}
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
