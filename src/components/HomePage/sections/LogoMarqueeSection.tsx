"use client";

import Image from "next/image";

import { LogoStrip } from "../assets";

const LogoMarqueeSection = () => {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-[1152px] text-center">
        <p className="font-sans text-sm font-semibold text-[#171717]">
          Join 10,000+ owners, directors, teachers, and families already on EDUO learning
        </p>
        <div className="logo-marquee mt-9 overflow-hidden">
          <div className="logo-marquee-track flex w-max items-center">
            {[0, 1].map((index) => (
              <Image
                key={index}
                src={LogoStrip}
                alt={index === 0 ? "Schools and partners using EDUO" : ""}
                aria-hidden={index === 1}
                className="h-[84px] w-[1325px] max-w-none shrink-0 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .logo-marquee {
          mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
        }

        .logo-marquee-track {
          animation: logo-marquee 28s linear infinite;
        }

        @keyframes logo-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default LogoMarqueeSection;
