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
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition "
            : "absolute bg-transparent"
        }`}
      >
        
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="relative w-full h-[84px]">
            <div className="absolute w-[146px] h-[24px] top-[30px] left-[1480px]">
              <div className="inline-flex items-center justify-center gap-[50px] relative">
                <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
                  <div onClick={scrollToTop} className={`cursor-pointer relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium ${sticky ?"text-black": "text-white"} text-[16px] tracking-[0] leading-[24px] whitespace-nowrap`}>
                    Home
                  </div>
                </div>
                <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
                  <div onClick={scrollToTop2}  className={`cursor-pointer relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal ${sticky ?"text-black": "text-white"} text-[16px] tracking-[0] leading-[24px] whitespace-nowrap`}>
                    About
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex items-start gap-[14px] absolute top-[22px] left-[1676px]">
              <button onClick={scrollToTop3}  className="all-[unset] box-border flex w-[100px] items-center justify-center gap-[10px] px-0 py-[10px] relative bg-[#f54b4b] rounded-[6px]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[16px] text-center tracking-[0] leading-[20px] whitespace-nowrap">
                  Contact
                </div>
              </button>
            </div>
              <div className="absolute w-[120px] h-[40px] top-[22px] left-[144px] object-cover  bg-[url(/images/logo/EDUO_LOGO.png)] bg-cover" />              
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
