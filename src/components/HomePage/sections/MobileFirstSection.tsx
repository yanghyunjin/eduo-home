import Image from "next/image";

import HlsVideo from "../HlsVideo";
import ScrollReveal from "../ScrollReveal";
import { MobileImage } from "../assets";

const MOBILE_FIRST_VIDEO =
  "https://transcoded-edu-video.s3.ap-northeast-2.amazonaws.com/assets/c4668067-2669-495e-9c1b-131560c093cf/HLS/mobile_first_experience.m3u8";

const MobileFirstSection = () => {
  return (
    <section className="px-6 py-[120px]">
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 md:grid-cols-2">
        <HlsVideo
          src={MOBILE_FIRST_VIDEO}
          className="aspect-[612/700] w-full rounded-[4px] bg-black object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          crossOrigin="anonymous"
          poster={MobileImage.src}
          aria-label="EDUO mobile-first experience"
        />
        <ScrollReveal>
          <h2 className="font-sans text-[40px] font-medium leading-none tracking-[-0.03em] underline sm:text-[56px]">
            Mobile-first experience
          </h2>
          <p className="mt-8 font-sans text-[18px] font-medium leading-none tracking-[-0.02em] sm:text-[20px]">
            EDUO keeps your educational community connected across desktop and mobile with
            real-time updates, notifications, and communication tools.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MobileFirstSection;
