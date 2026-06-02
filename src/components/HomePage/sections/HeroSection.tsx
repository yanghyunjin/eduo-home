"use client";

import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

import { HeroBackground } from "../assets";

const HeroSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative flex min-h-[800px] items-center justify-center overflow-hidden text-white"
    >
      <ModalVideo
        channel="custom"
        autoplay
        start
        isOpen={isOpen}
        url="https://transcoded-edu-video.s3.ap-northeast-2.amazonaws.com/EDUO.mp4"
        onClose={() => setOpen(false)}
      />
      <Image
        src={HeroBackground}
        alt="Students using EDUO in a classroom"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 mx-auto flex w-full max-w-[980px] flex-col items-center px-6 text-center">
        <h1 className="max-w-[820px] text-[42px] font-semibold leading-[0.96] tracking-[-0.02em] sm:text-[72px]">
          All-in-one education
          <br />
          management solution.
        </h1>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-10 rounded-full bg-[#7037d8] px-8 py-3 font-sans text-sm font-semibold text-white transition hover:bg-[#5c28bf]"
        >
          Explore the platform
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
