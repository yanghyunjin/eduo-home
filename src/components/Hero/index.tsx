"use client";

import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

import EduoLogo from "/public/images/logo/EDUO_LOGO.png";
import HeroBackground from "/public/images/figma-home/2-3165.png";
import LogoStrip from "/public/images/figma-home/2-3174.png";
import AdminIcon from "/public/images/figma-home/2-3198.png";
import TeacherIcon from "/public/images/figma-home/2-3202.png";
import StudentIcon from "/public/images/figma-home/2-3206.png";
import ParentIcon from "/public/images/figma-home/2-3210.png";
import EduoDiagram from "/public/images/figma-home/2-3215.png";
import OperationsBackground from "/public/images/figma-home/case-study-bg.png";
import OperationsCard from "/public/images/figma-home/2-3221.png";
import MobileImage from "/public/images/figma-home/2-3228.png";
import FlexibleOne from "/public/images/figma-home/2-3235.png";
import FlexibleTwo from "/public/images/figma-home/2-3237.png";
import TestimonialCard from "/public/images/figma-home/2-3244.png";
import ValuesImage from "/public/images/figma-home/2-3246.png";

const roles = [
  { label: "For administrator", image: AdminIcon },
  { label: "For teacher", image: TeacherIcon },
  { label: "For student", image: StudentIcon },
  { label: "For parent", image: ParentIcon },
];

const Home = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <main className="bg-white font-serif text-[#0f0f12]">
      <ModalVideo
        channel="custom"
        autoplay
        start
        isOpen={isOpen}
        url="https://transcoded-edu-video.s3.ap-northeast-2.amazonaws.com/EDUO.mp4"
        onClose={() => setOpen(false)}
      />

      <section
        id="home"
        className="relative flex min-h-[800px] items-center justify-center overflow-hidden text-white"
      >
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
      </section>

      <section id="about" className="px-6 pb-28 pt-10">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="text-[40px] font-semibold leading-tight tracking-[-0.02em] sm:text-[56px]">
            Smart solution for everyone
          </h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((role) => (
              <div key={role.label} className="flex flex-col items-center">
                <Image
                  src={role.image}
                  alt={role.label}
                  className="aspect-square w-full max-w-[260px] rounded-[6px] object-cover"
                />
                <p className="mt-5 font-mono text-sm font-medium text-[#171717]">{role.label}</p>
              </div>
            ))}
          </div>
          <button className="mt-14 rounded-full bg-[#7037d8] px-7 py-3 font-sans text-sm font-semibold text-white">
            Discover more
          </button>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-[1200px]">
          <Image src={EduoDiagram} alt="What is EDUO diagram" className="w-full rounded-[4px]" />
          <div className="mx-auto mt-16 max-w-[1072px] text-center">
            <h2 className="text-[40px] font-semibold leading-tight tracking-[-0.02em] sm:text-[56px]">
              Connected ecosystem
            </h2>
            <p className="mt-8 font-sans text-sm font-semibold leading-6">
              Administrators, educators, students, and families stay connected through one unified
              system designed for real-time collaboration and communication.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden pb-[96px] pt-[120px]">
        <Image
          src={OperationsBackground}
          alt="EDUO operations background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/15" />
        <div className="relative mx-auto max-w-[1020px] px-6">
          <div className="flex flex-col items-center gap-10 rounded-[12px] bg-white/90 p-10 shadow-[0_20px_70px_rgba(15,23,42,0.18)] md:flex-row">
            <Image src={OperationsCard} alt="EDUO connected workflows" className="w-full rounded-[4px] md:w-[498px]" />
            <p className="font-sans text-lg font-semibold leading-7 md:max-w-[424px]">
              Attendance, grading, reporting, scheduling, communication, and approvals are
              seamlessly connected into practical day-to-day workflows.
            </p>
          </div>
          <h2 className="mt-20 text-center text-[40px] font-semibold leading-tight tracking-[-0.02em] sm:text-[56px]">
            Unified operations
          </h2>
        </div>
      </section>

      <section className="px-6 py-[120px]">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 md:grid-cols-2">
          <Image src={MobileImage} alt="EDUO mobile app" className="w-full rounded-[4px]" />
          <div>
            <h2 className="text-[40px] font-semibold leading-tight tracking-[-0.02em] sm:text-[56px]">
              Mobile-first experience
            </h2>
            <p className="mt-8 font-sans text-lg font-semibold leading-7">
              EDUO keeps your educational community connected across desktop and mobile with
              real-time updates, notifications, and communication tools.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-[120px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 md:grid-cols-2">
            <Image src={FlexibleOne} alt="Students learning with EDUO" className="w-full rounded-[4px]" />
            <Image src={FlexibleTwo} alt="Classroom using EDUO" className="w-full rounded-[4px]" />
          </div>
          <div className="mx-auto mt-16 max-w-[800px] text-center">
            <h2 className="text-[40px] font-semibold leading-tight tracking-[-0.02em] sm:text-[56px]">
              Flexible for every organization
            </h2>
            <p className="mt-8 font-sans text-sm font-semibold leading-6">
              Every learning organization operates differently. EDUO adapts to your structure,
              workflows, and operational needs through customizable solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-[120px]">
        <div className="mx-auto max-w-[1030px] text-center">
          <h2 className="text-[44px] font-semibold leading-[0.96] tracking-[-0.03em] sm:text-[72px]">
            Built by educator,
            <br />
            and for educator
          </h2>
          <Image
            src={TestimonialCard}
            alt="Before EDUO testimonial"
            className="mx-auto mt-14 w-full max-w-[738px] rounded-[4px]"
          />
        </div>
      </section>

      <section className="relative min-h-[680px] overflow-hidden">
        <Image src={ValuesImage} alt="Students enjoying class" fill className="object-cover" sizes="100vw" />
      </section>

      <section id="contact" className="px-6 py-24 text-center">
        <h2 className="mx-auto max-w-[880px] text-[30px] font-semibold leading-tight tracking-[-0.02em] sm:text-[40px]">
          Schedule a quick call to learn how EDUO learning can turn your school into a powerful advantage
        </h2>
        <a
          href="mailto:support@eduolearning.com"
          className="mt-10 inline-flex rounded-full bg-[#7037d8] px-20 py-3 font-sans text-sm font-semibold text-white transition hover:bg-[#5c28bf]"
        >
          Contact with us
        </a>
      </section>

      <footer className="border-t border-black/5 px-6 py-12">
        <div className="mx-auto flex max-w-[1152px] flex-col gap-12">
          <nav className="flex gap-10 font-sans text-xs font-semibold">
            <a href="#about">Company</a>
            <a href="#about">We built for</a>
            <a href="#contact">Resources</a>
          </nav>
          <div className="flex items-end justify-between gap-8">
            <Image src={EduoLogo} alt="EDUO" className="h-10 w-auto object-contain" />
            <p className="font-sans text-xs text-black/45">EDUO Learning. 2024. All Rights Reserved</p>
          </div>
        </div>
      </footer>

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
    </main>
  );
};

export default Home;
