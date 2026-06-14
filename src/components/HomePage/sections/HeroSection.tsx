"use client";

import Image from "next/image";

import ButtonLinkout from "../ButtonLinkout";
import HlsVideo from "../HlsVideo";
import { HeroBackground } from "../assets";

const HOME_MAIN_VIDEO =
  "https://transcoded-edu-video.s3.ap-northeast-2.amazonaws.com/assets/0188cb86-a143-4562-9ae3-dcc5abffb683/HLS/home_main_background.m3u8";

const HeroSection = () => {
  const scrollToPlatformVideo = () => {
    document.getElementById("what-is-eduo")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[800px] items-center justify-center overflow-hidden text-white"
    >
      <Image src={HeroBackground} alt="" fill priority className="object-cover" sizes="100vw" />
      <HlsVideo
        src={HOME_MAIN_VIDEO}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        crossOrigin="anonymous"
        poster={HeroBackground.src}
        aria-label="Students using EDUO in a classroom"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 mx-auto flex w-full max-w-[980px] flex-col items-center px-6 text-center">
        <h1 className="eduo-hero-enter flex max-w-[820px] flex-col text-center text-[42px] leading-none sm:text-[80px]">
          <span className="font-serif font-normal tracking-[-0.04em]">
            All-in-one education
          </span>
          <span className="mt-[-4px] font-sans font-normal tracking-[-0.05em] sm:mt-[-8px]">
            management solution.
          </span>
        </h1>
        <ButtonLinkout
          type="button"
          onClick={scrollToPlatformVideo}
          className="eduo-hero-enter eduo-hero-enter-delay mt-10"
        >
          Explore the platform
        </ButtonLinkout>
      </div>
    </section>
  );
};

export default HeroSection;
