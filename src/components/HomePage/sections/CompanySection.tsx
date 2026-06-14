import Image from "next/image";

import {
  AbstractBackground,
  CompanyArrowCenter,
  CompanyArrowLeft,
  CompanyArrowRight,
  CompanyClassroomImage,
  CompanyDashboardImage,
  CompanyDiagramGroup,
  CompanyEduoImage,
  CompanyStudentImage,
  EduoLogo,
} from "../assets";
import ScrollReveal from "../ScrollReveal";

const missionCards = [
  {
    title: "All-in-One",
    body: "Everything from attendance and grading to billing and communication in one place.",
  },
  {
    title: "Built for schools",
    body: "Designed specifically for international schools, academies, and education organizations.",
  },
  {
    title: "Fully customizable",
    body: "Adapt workflows, report cards, schedules, and permissions to fit your exact model.",
  },
  {
    title: "24/7/365 Fast support",
    body: "Direct support with educators and developers who understand school operations.",
  },
];

const featureRows = [
  {
    eduo: "Fully customizable workflows",
    platformA: "Limited customization",
    platformAStatus: "check",
    platformB: "Fixed operational structures",
    platformBStatus: "check",
  },
  {
    eduo: "Integrated SIS & LMS platform",
    platformA: "Separate systems for administration and learning",
    platformAStatus: "check",
    platformB: "Enterprise-focused design",
    platformBStatus: "check",
  },
  {
    eduo: "Parent, Teacher & Student communication",
    platformA: "Multiple disconnected communication tools",
    platformAStatus: "check",
    platformB: "Fragmented user experience",
    platformBStatus: "x",
  },
  {
    eduo: "Flexible report cards and transcripts",
    platformA: "Standardized reporting structures",
    platformAStatus: "check",
    platformB: "Complex implementation process",
    platformBStatus: "x",
  },
  {
    eduo: "Fast implementation and support",
    platformA: "Slower adaptation to school needs",
    platformAStatus: "x",
    platformB: "Higher training requirements",
    platformBStatus: "x",
  },
  {
    eduo: "Built by active school operators",
    platformA: "Generic education workflows",
    platformAStatus: "x",
    platformB: "Less flexibility for schools",
    platformBStatus: "x",
  },
];

const contactCards = [
  { title: "Address", lines: ["12, Dogok-ro 2-gil, Gangnam-gu,", "Seoul, Republic of Korea"] },
  { title: "Office", lines: ["Monday - Friday", "9AM - 6PM"] },
  { title: "Contact", lines: ["+82 10-6624-9181", "support@eduolearning.com"] },
];

const CompanySection = () => {
  return (
    <section id="company" className="overflow-hidden bg-white text-black">
      <div className="rounded-b-[16px] bg-[#f6f8fb] px-5 pb-16 pt-[92px] sm:px-10 sm:pb-24 sm:pt-[132px] lg:pb-[120px]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 text-center sm:gap-14">
          <div className="max-w-[720px]">
            <h1 className="font-serif text-[40px] font-normal leading-none tracking-[-0.04em] sm:text-[64px] lg:text-[80px]">
              Built by educators,
              <br />
              Designed for schools.
            </h1>
            <p className="mt-7 font-serif text-[16px] leading-[1.2] tracking-[-0.04em] sm:text-[20px]">
              Empowering schools to focus on what matters most.
            </p>
          </div>
          <ScrollReveal className="w-full max-w-[852px] rounded-[12px] drop-shadow-[4px_4px_4px_rgba(0,0,0,0.15)]">
            <Image
              src={CompanyDashboardImage}
              alt="EDUO dashboard overview"
              priority
              className="h-auto w-full rounded-[12px]"
            />
          </ScrollReveal>
        </div>
      </div>

      <div className="relative h-[320px] sm:h-[520px] lg:h-[600px]">
        <Image
          src={CompanyClassroomImage}
          alt="Educator presenting EDUO in a classroom"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="mx-auto max-w-[980px] px-5 py-20 text-center sm:px-8 sm:py-28 lg:py-[140px]">
        <p className="font-serif text-[13px] leading-[1.2] tracking-[-0.04em] text-black/45">
          About us
        </p>
        <h2 className="mt-5 font-sans text-[32px] font-semibold leading-none tracking-[-0.04em] sm:text-[48px]">
          Built by educators, for educators.
        </h2>
        <p className="mx-auto mt-8 max-w-[760px] font-serif text-[15px] leading-[1.2] tracking-[-0.04em] sm:text-[18px]">
          EDUO was created by school leaders who understand the daily challenges of running a
          school. Our mission is simple: reduce administrative workload, improve communication,
          and give educators more time to focus on students.
        </p>

        <div className="mx-auto mt-14 max-w-[600px] sm:mt-20">
          <div className="relative aspect-[600/657] w-full">
            <Image
              src={CompanyDiagramGroup}
              alt="School operation icons"
              className="absolute left-0 top-0 h-auto w-full"
            />
            <Image
              src={CompanyArrowLeft}
              alt=""
              className="absolute left-[6%] top-[42.2%] h-auto w-[11.7%]"
            />
            <Image
              src={CompanyArrowCenter}
              alt=""
              className="absolute left-[47.3%] top-[32.9%] h-auto w-[8.5%]"
            />
            <Image
              src={CompanyArrowRight}
              alt=""
              className="absolute right-[9.7%] top-[44.8%] h-auto w-[11.4%]"
            />
            <div className="absolute bottom-0 left-1/2 w-[51.33%] -translate-x-1/2">
              <ScrollReveal>
                <Image
                  src={CompanyEduoImage}
                  alt="EDUO"
                  className="h-auto w-full"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-5 pb-20 text-center sm:px-8 sm:pb-28 lg:pb-[140px]">
        <p className="font-serif text-[13px] leading-[1.2] tracking-[-0.04em] text-black/45">
          Our mission
        </p>
        <h2 className="mx-auto mt-5 max-w-[1180px] font-serif text-[42px] font-normal leading-[0.95] tracking-[-0.04em] sm:text-[78px] lg:text-[90px]">
          Helping schools focus on students,
          <br />
          <span className="font-sans font-normal tracking-[-0.05em] sm:text-[72px] lg:text-[82px]">
            Not paperwork.
          </span>
        </h2>
        <div className="mx-auto mt-20 grid max-w-[1000px] gap-5 sm:grid-cols-2">
          {missionCards.map((card) => (
            <article
              key={card.title}
              className="flex min-h-[228px] flex-col items-center justify-center rounded-[6px] border border-black/10 bg-[#f6f8fb] px-6 py-10 shadow-[5px_5px_6px_rgba(15,23,42,0.2)]"
            >
              <h3 className="font-sans text-[38px] font-semibold leading-[0.95] tracking-[-0.05em] sm:text-[52px]">
                {card.title}
              </h3>
              <p className="mx-auto mt-8 max-w-[410px] font-['Geist_Mono'] text-[14px] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[16px]">
                {card.body}
              </p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-20 max-w-[840px] font-serif text-[20px] leading-[1.1] tracking-[-0.04em] sm:text-[26px]">
          EDUO simplifies school operations by bringing administration, learning management,
          communication, and reporting into one unified platform.
        </p>
      </div>

      <div className="mx-auto max-w-[1120px] px-5 pb-20 sm:px-8 sm:pb-28 lg:pb-[140px]">
        <Image
          src={CompanyStudentImage}
          alt="Student smiling during class"
          className="h-auto w-full rounded-[6px]"
        />
      </div>

      <div className="mx-auto max-w-[1280px] px-0 pb-20 text-center sm:px-8 sm:pb-28 lg:pb-[140px]">
        <div className="px-5 sm:px-0">
          <p className="font-serif text-[13px] leading-[1.2] tracking-[-0.04em] text-black/45">
            Features
          </p>
          <h2 className="mx-auto mt-5 max-w-[560px] font-sans text-[32px] font-semibold leading-none tracking-[-0.04em] sm:text-[44px]">
            More Than Software.
            <br />A School Partner.
          </h2>
          <p className="mx-auto mt-6 max-w-[820px] font-serif text-[15px] leading-[1.2] tracking-[-0.04em] sm:text-[18px]">
            Unlike generic business software, EDUO is developed by school leaders who understand
            the daily realities of running a school.
          </p>
        </div>

        <div className="mt-14 overflow-x-auto text-left font-['Geist_Mono'] text-[14px] leading-none tracking-[-0.02em]">
          <div className="min-w-[1120px]">
            <div className="grid grid-cols-3 border-b border-black/30 text-center font-sans text-[22px] font-semibold tracking-[-0.03em]">
              <div className="rounded-t-[16px] border-l border-r border-t border-black/10 bg-white p-10 shadow-[10px_0_18px_rgba(69,88,242,0.14)]">
                <Image src={EduoLogo} alt="EDUO" className="mx-auto h-8 w-auto object-contain" />
              </div>
              <div className="p-10">Platform A</div>
              <div className="p-10">Platform B</div>
            </div>
            {featureRows.map((row, index) => (
              <div key={row.eduo} className="grid min-h-[92px] grid-cols-3 border-b border-black/5 last:border-b-0">
                <div
                  className={`flex items-center gap-4 border-l border-r border-black/10 bg-white px-8 text-[17px] font-medium shadow-[10px_0_18px_rgba(69,88,242,0.14)] ${
                    index === featureRows.length - 1 ? "rounded-b-[16px] border-b" : ""
                  }`}
                >
                  <span className="font-sans text-[#58700f]">✓</span>
                  <span>{row.eduo}</span>
                </div>
                <div className="flex items-center gap-4 border-r border-black/5 px-8 text-[14px]">
                  <span className="font-sans text-black/60">{row.platformAStatus === "check" ? "✓" : "×"}</span>
                  <span>{row.platformA}</span>
                </div>
                <div className="flex items-center gap-4 px-8 text-[14px]">
                  <span className="font-sans text-black/60">{row.platformBStatus === "check" ? "✓" : "×"}</span>
                  <span>{row.platformB}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden px-5 text-center sm:min-h-[420px] lg:min-h-[520px]">
        <Image
          src={AbstractBackground}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <h2 className="relative max-w-[880px] font-serif text-[38px] font-normal leading-none tracking-[-0.04em] sm:text-[64px]">
          Transforming school management for the next generation.
        </h2>
      </div>

      <div id="contact" className="mx-auto max-w-[1120px] px-5 py-20 text-center sm:px-8 sm:py-28">
        <h2 className="font-sans text-[32px] font-semibold leading-none tracking-[-0.04em] sm:text-[44px]">
          Let&apos;s talk about your school
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {contactCards.map((card) => (
            <article key={card.title} className="rounded-[8px] bg-[#f6f8fb] p-8 text-left">
              <h3 className="font-sans text-[14px] font-semibold leading-[1.2]">{card.title}</h3>
              <p className="mt-7 font-serif text-[16px] leading-[1.25] tracking-[-0.04em]">
                {card.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
