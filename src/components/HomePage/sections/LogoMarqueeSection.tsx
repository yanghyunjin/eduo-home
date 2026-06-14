"use client";

import Image from "next/image";

import ClientLogo1 from "/public/images/hero/client1.png";
import ClientLogo2 from "/public/images/hero/client2.png";
import ClientLogo3 from "/public/images/hero/client3.png";
import ClientLogo4 from "/public/images/hero/client4.png";
import ClientLogo5 from "/public/images/hero/client5.png";
import ClientLogo7 from "/public/images/hero/client7.png";
import ClientLogo8 from "/public/images/hero/client8.jpeg";
import ClientLogo9 from "/public/images/hero/client9.jpeg";
import ClientLogo10 from "/public/images/hero/client10.jpeg";
import ClientLogo11 from "/public/images/hero/client11.png";
import ClientLogo12 from "/public/images/hero/client12.png";
import ClientLogo13 from "/public/images/hero/client13.png";

const clientLogos = [
  { src: ClientLogo1, alt: "EDUO client school logo 1" },
  { src: ClientLogo2, alt: "EDUO client school logo 2" },
  { src: ClientLogo3, alt: "EDUO client school logo 3" },
  { src: ClientLogo4, alt: "EDUO client school logo 4" },
  { src: ClientLogo5, alt: "EDUO client school logo 5" },
  { src: ClientLogo7, alt: "EDUO client school logo 7" },
  { src: ClientLogo8, alt: "EDUO client school logo 8" },
  { src: ClientLogo9, alt: "EDUO client school logo 9" },
  { src: ClientLogo10, alt: "EDUO client school logo 10" },
  { src: ClientLogo11, alt: "EDUO client school logo 11" },
  { src: ClientLogo12, alt: "EDUO client school logo 12" },
  { src: ClientLogo13, alt: "EDUO client school logo 13" },
];

const LogoMarqueeSection = () => {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-[1152px] text-center">
        <p className="font-serif text-[20px] font-normal leading-[1.2] tracking-[-0.04em] text-[#171717]">
          Join 10,000+ owners, directors, teachers, and families already on EDUO learning
        </p>
        <div className="logo-marquee mt-9 overflow-hidden">
          <div className="logo-marquee-track flex w-max items-center gap-14 pr-14">
            {[0, 1].map((loopIndex) =>
              clientLogos.map((logo, logoIndex) => (
                <Image
                  key={`${loopIndex}-${logo.alt}`}
                  src={logo.src}
                  alt={loopIndex === 0 ? logo.alt : ""}
                  aria-hidden={loopIndex === 1}
                  className={`max-w-none shrink-0 object-contain ${
                    logoIndex === 1 || logoIndex === 5 ? "h-[46px] w-auto" : "h-[72px] w-[96px]"
                  }`}
                />
              )),
            )}
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
