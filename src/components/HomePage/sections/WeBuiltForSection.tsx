import Image from "next/image";

import { roleGuides } from "../data";
import { AbstractBackground } from "../assets";

const WeBuiltForSection = () => {
  return (
    <section
      id="we-built-for"
      className="relative scroll-mt-[60px] overflow-hidden px-5 pb-[120px] pt-[124px] sm:px-8 lg:pb-[140px] lg:pt-[140px]"
    >
      <Image
        src={AbstractBackground}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="relative mx-auto flex max-w-[1030px] flex-col items-center">
        <h1 className="text-center leading-none tracking-[-0.04em] text-black">
          <span className="block font-serif text-[40px] font-normal sm:text-[72px] lg:text-[80px]">
            Smart solution
          </span>
          <span className="mt-[-2px] block font-sans text-[40px] font-normal tracking-[-0.05em] sm:mt-[-8px] sm:text-[72px] lg:text-[80px]">
            for everyone
          </span>
        </h1>

        <div className="mt-10 flex w-full max-w-[820px] flex-col gap-4 sm:mt-14">
          {roleGuides.map((guide) => (
            <article
              key={guide.title}
              className="flex min-h-[236px] flex-col items-start justify-between gap-7 rounded-[16px] bg-white p-6 sm:min-h-[172px] sm:flex-row sm:gap-10 sm:p-10"
            >
              <div className="max-w-[596px]">
                <h2 className="font-sans text-[20px] font-semibold leading-none tracking-[-0.02em] text-black">
                  {guide.title}
                </h2>
                <p className="mt-7 font-serif text-[20px] leading-[1.2] tracking-[-0.04em] text-black sm:text-[22px]">
                  {guide.copy}
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex h-[42px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(90deg,#4558F2_0%,#8C2A94_100%)] px-[22px] font-['Geist_Mono'] text-[14px] font-medium leading-none text-white"
              >
                View more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeBuiltForSection;
