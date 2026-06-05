import Image from "next/image";

import HlsVideo from "../HlsVideo";
import ScrollReveal from "../ScrollReveal";
import { EduoDiagram } from "../assets";

const WHAT_IS_EDUO_VIDEO =
  "https://transcoded-edu-video.s3.ap-northeast-2.amazonaws.com/assets/2c2addcf-fcd4-469f-8e59-b46baa3d1efc/HLS/what_is_eduo.m3u8";

const EcosystemSection = () => {
  return (
    <section className="px-6 pb-28">
      <div className="mx-auto max-w-[1200px]">
        <HlsVideo
          src={WHAT_IS_EDUO_VIDEO}
          className="aspect-video w-full rounded-[4px] bg-[#4c42c8] object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          crossOrigin="anonymous"
          poster={EduoDiagram.src}
          aria-label="What is EDUO overview"
        />
        <ScrollReveal className="mx-auto mt-16 max-w-[1072px] text-center">
          <h2 className="font-sans text-[40px] font-medium leading-none tracking-[-0.03em] sm:text-[56px]">
            Connected ecosystem
          </h2>
          <p className="mt-8 font-sans text-[18px] font-medium leading-none tracking-[-0.02em] sm:text-[20px]">
            Administrators, educators, students, and families stay connected through one unified
            system designed for real-time collaboration and communication.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EcosystemSection;
