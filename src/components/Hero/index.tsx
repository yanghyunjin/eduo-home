"use client";
import React, { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import ModalVideo from "react-modal-video";

import Hero1 from "/public/images/hero/hero1.png";
import Done_all_alt_round_fill from "/public/images/hero/Done_all_alt_round_fill.png";
import Client1 from "/public/images/hero/client1.png";
import Client2 from "/public/images/hero/client2.png";
import Client3 from "/public/images/hero/client3.png";
import Client4 from "/public/images/hero/client4.png";
import Client5 from "/public/images/hero/client5.png";
// import Client6 from "/public/images/hero/client6.png";
import Client7 from "/public/images/hero/client7.png";
import Client8 from "/public/images/hero/client8.jpeg";
import Client9 from "/public/images/hero/client9.jpeg";
import Client10 from "/public/images/hero/client10.jpeg";
import Client11 from "/public/images/hero/client11.png";
import Client12 from "/public/images/hero/client12.png";
import Client13 from "/public/images/hero/client13.png";
import Saly_1 from "/public/images/hero/saly_1.png";
import Saly_2 from "/public/images/hero/saly_2.png";
import Saly_3 from "/public/images/hero/saly_3.png";
import EDUO_LOGO from "/public/images/logo/EDUO_LOGO.png";
import Book_check from "/public/images/hero/Book_check.png";
import Certificate from "/public/images/hero/Certificate.png";
import Group from "/public/images/hero/Group.png";
import Button from "/public/images/hero/Button.png";
import Line from "/public/images/hero/Line.png";
import CAS from "/public/images/hero/CAS.png";
import Start from "/public/images/hero/start.png";
import User1 from "/public/images/hero/user1.png";
import User2 from "/public/images/hero/user2.png";
import Wave2 from "/public/images/hero/wave_2.png";

const benefitGroups: string[][] = [
  [
    "Access anytime, anywhere",
    "Regular updates",
    "Strong STEM, AP curriculum",
    "K-Education touches",
  ],
  [
    "Intuitive and easy to use",
    "Affordable",
    "Made by teachers",
    "Distinct features for administrators, teachers, students, and parents",
  ],
];

type Service = {
  title: string;
  description: string;
  image: StaticImageData;
  imageClassName: string;
};

const services: Service[] = [
  {
    title: "SIS",
    description: "Essential tools for efficient school operations at your fingertips.",
    image: Saly_1,
    imageClassName: "h-28 w-40",
  },
  {
    title: "LMS",
    description: "Accredited courses prepared and taught by qualified instructors.",
    image: Saly_3,
    imageClassName: "h-40 w-32",
  },
  {
    title: "College Counseling",
    description: "Systematic counseling support powered by accumulated admissions data.",
    image: Saly_2,
    imageClassName: "h-40 w-40",
  },
];

type Audience = {
  title: string;
  icon: StaticImageData;
  items: string[];
};

const audiences: Audience[] = [
  {
    title: "For Administrators",
    icon: Book_check,
    items: [
      "Faculty and student database",
      "Administrative documents",
      "Scheduling",
      "Automated transcripts",
    ],
  },
  {
    title: "For Students",
    icon: Group,
    items: [
      "Comprehensive workspace",
      "Discussion board",
      "Video lectures with distraction prevention",
      "College & career counseling",
    ],
  },
  {
    title: "For Teachers",
    icon: Certificate,
    items: [
      "Lesson planning support",
      "Tracking student progress",
      "Question generator",
      "Attendance management",
    ],
  },
  {
    title: "For Parents",
    icon: Group,
    items: [
      "Check tuition and invoice",
      "View grades and homework",
      "Monitor attendance and discipline",
      "Access calendar and other resources",
    ],
  },
];

const clients: StaticImageData[] = [
  Client1,
  Client2,
  Client3,
  Client4,
  Client5,
  // Client6,
  Client7,
  Client8,
  Client9,
  Client10,
  Client11,
  Client12,
  Client13
];

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: StaticImageData;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Eduo is one of the best tools I’ve utilized to teach my classes. It helps me to focus on what really matters for my students.",
    author: "Alexa",
    role: "Teacher at Collegiate Academy of Seoul",
    avatar: User1,
  },
  {
    quote:
      "Eduo is easy to navigate even for those who are new to digital tools. It helped our school maximize efficiency by digitizing records and optimizing administrative tasks.",
    author: "Tim",
    role: "Principal at Azabu Christian Academy",
    avatar: User2,
  },
];

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-white text-black">
      <ModalVideo
        channel="custom"
        autoplay
        start
        isOpen={isOpen}
        url="https://transcoded-edu-video.s3.ap-northeast-2.amazonaws.com/EDUO.mp4"
        onClose={() => setOpen(false)}
      />

      <section className="relative overflow-hidden bg-[url(/images/hero/Background.png)] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#5740d9]/90 via-[#5945e0]/70 to-[#5c68f7]/80 md:hidden" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-20 text-white md:flex-row md:items-center md:justify-between md:py-24">
          <div className="flex max-w-xl flex-col items-center gap-6 text-center md:items-start md:text-left">
            <h1 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-[1.1]">
              Transform your school with Eduo:
            </h1>
            <p className="text-base font-medium sm:text-xl">
              a single solution designed to streamline administrative processes and enhance
              learning outcomes
            </p>
          </div>
          <div className="relative flex w-full max-w-sm justify-center md:max-w-md md:flex-1 md:justify-end">
            <Image
              src={Hero1}
              alt="Students learning online"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 px-6">
          <h2 className="text-center text-2xl font-medium leading-snug sm:text-4xl">
            Empower your educators and inspire your students with our all-in-one education platform
          </h2>
          <div className="grid w-full gap-10 md:grid-cols-2">
            {benefitGroups.map((group, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-6">
                {group.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-4">
                    <Image
                      src={Done_all_alt_round_fill}
                      alt="Check icon"
                      className="h-10 w-8 flex-shrink-0 sm:h-12 sm:w-10"
                    />
                    <p className="text-base font-medium sm:text-xl">{benefit}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f4ff] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">Our Services</h2>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-black/80 sm:text-lg">
              Eduo was founded with the purpose of providing an integrated platform to complement
              schools in their operations and classroom management.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col items-center gap-6 rounded-3xl bg-white p-10 text-center shadow-[0_0_35px_rgba(15,23,42,0.08)]"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  className={`${service.imageClassName} object-contain`}
                />
                <div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/80 sm:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-6">
            <h2 className="text-3xl font-semibold sm:text-4xl">A Sneak Peek into</h2>
            <Image src={EDUO_LOGO} alt="Eduo" className="h-10 w-auto sm:h-12" />
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="hidden flex-col gap-6 rounded-3xl bg-white p-8 text-center shadow-[0_0_35px_rgba(15,23,42,0.08)] lg:flex">
              <Image
                src={CAS}
                alt="Collegiate Academy of Seoul dashboard"
                className="w-full rounded-2xl object-cover"
              />
              <p className="text-xl font-semibold text-black sm:text-2xl">Collegiate Academy of Seoul</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="relative flex min-h-[260px] flex-col items-center justify-center overflow-hidden rounded-3xl bg-[url(/images/hero/image23.png)] bg-cover bg-center px-6 py-12 text-center shadow-[0_0_35px_rgba(15,23,42,0.2)] focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200"
            >
              <Image src={Button} alt="Play video" className="h-24 w-24 sm:h-40 sm:w-40" />
              <p className="mt-6 text-lg font-semibold text-black lg:hidden">Collegiate Academy of Seoul</p>
            </button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[url(/images/hero/Background2.png)] bg-cover bg-top py-16 text-white sm:py-24">
        <div className="absolute inset-0 bg-[#0f1c59]/90" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-extrabold sm:text-5xl">Why Eduo?</h2>
            <p className="mt-4 text-lg font-semibold sm:text-2xl">
              We provide the solution to all your problems.
            </p>
            <Image src={Line} alt="Divider" className="mt-6 h-px w-40" />
          </div>
          <div className="grid w-full max-w-5xl gap-12 md:grid-cols-2 mx-auto">
            {audiences.map((audience) => (
              <div key={audience.title} className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Image src={audience.icon} alt={audience.title} className="h-14 w-14" />
                  <h3 className="text-2xl font-bold">{audience.title}</h3>
                </div>
                <ul className="ml-1 space-y-2 text-sm font-semibold text-[#cccccc] sm:text-lg">
                  {audience.items.map((item) => (
                    <li key={item} className="list-disc pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-2xl font-semibold">...and more!</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">Our Clients</h2>
          <div className="mt-12 grid grid-cols-2 place-items-center gap-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {clients.map((client, index) => (
              <Image
                key={index}
                src={client}
                alt={`Client logo ${index + 1}`}
                className="h-20 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fc] py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-semibold text-black sm:text-4xl">Success Stories</h2>
          <div className="mt-12 grid gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="relative overflow-hidden rounded-3xl bg-white px-8 py-10 shadow-[0_0_35px_rgba(15,23,42,0.08)] sm:px-16 sm:py-14"
              >
                <Image
                  src={Start}
                  alt="Quote mark"
                  className="pointer-events-none select-none absolute -left-4 top-6 h-24 w-24 opacity-10 sm:-left-2 sm:-top-2 sm:h-40 sm:w-40"
                />
                <p className="relative pl-12 text-lg font-medium leading-relaxed text-black sm:pl-16 sm:text-3xl sm:leading-[1.5]">
                  {testimonial.quote}
                </p>
                <div className="relative mt-8 flex items-center gap-4 pl-12 sm:pl-16">
                  <Image src={testimonial.avatar} alt={testimonial.author} className="h-16 w-16 rounded-full" />
                  <div className="text-sm text-black sm:text-lg">
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="font-medium text-black/70">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative bg-white pt-12">
        <Image src={Wave2} alt="Decorative wave" className="w-full object-cover" />
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-6">
            <Image src={EDUO_LOGO} alt="Eduo logo" className="h-12 w-auto object-contain" />
            <p className="text-sm leading-relaxed">
              Copyright © 2024 Eduo Learning
              <br />
              All Rights Reserved.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Address</h3>
              <p className="text-sm leading-relaxed">
                12, Dogok-ro 2-gil, Gangnam-gu,
                <br />
                Seoul, Republic of Korea
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Office</h3>
              <p className="text-sm leading-relaxed">
                Monday - Friday
                <br />
                9AM - 6PM
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Contact</h3>
              <p className="text-sm leading-relaxed">
                +82 10-6624-9181
                <br />
                support@eduolearning.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
