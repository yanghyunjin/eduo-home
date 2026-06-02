import Image from "next/image";

import {
  EduoLogo,
  HeroBackground,
  OperationsBackground,
  OperationsCard,
  ValuesImage,
} from "../assets";

const metrics = [
  { value: "2x", label: "Double your productivity" },
  { value: "▟▙▛", label: "Efficiency increase per transfer" },
  { value: "⊜", label: "Centralize your school" },
  { value: "130%", label: "More activities" },
];

const featureRows = [
  ["Fully customizable workflow", "Limited customization", "Fixed one-size communication"],
  ["Connected communication ecosystem", "Manual documentation tools", "Fragmented communication"],
  ["Built to connect with daily school operations", "Disconnected system records", "Only basic operational records"],
  ["Fast and practical support", "Slow technical ticket support", "Generic implementation cycles"],
];

const contactCards = [
  { title: "Headquarters", lines: ["Address", "Phone number"] },
  { title: "Customer Support", lines: ["email@address.com"] },
  { title: "Media requests & other inquiries", lines: ["marketing@address.com"] },
];

const CompanySection = () => {
  return (
    <section id="company" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 pb-20 pt-[120px]">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-[44px] font-medium leading-[0.96] tracking-[-0.03em] sm:text-[72px]">
              Education clarity you can trust.
            </h2>
            <p className="mt-10 max-w-[520px] font-serif text-xl leading-tight">
              Trusted management guidance for every stage of your business
            </p>
          </div>
          <div className="rounded-[12px] bg-white p-3 shadow-[0_18px_70px_rgba(15,23,42,0.14)]">
            <Image src={OperationsCard} alt="EDUO platform dashboard" className="w-full rounded-[8px]" />
          </div>
        </div>
      </div>

      <div className="relative min-h-[420px] overflow-hidden lg:min-h-[520px]">
        <Image
          src={HeroBackground}
          alt="EDUO classroom presentation"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="mx-auto max-w-[1120px] px-6 py-[120px] text-center">
        <p className="font-serif text-lg text-black/45">About us</p>
        <h2 className="mt-5 text-[36px] font-semibold leading-tight tracking-[-0.02em] sm:text-[52px]">
          A technology shift is happening
        </h2>
        <p className="mx-auto mt-10 max-w-[900px] font-serif text-lg leading-tight">
          For too long, child care programs have been stuck with clunky tools and manual processes,
          falling behind while other industries get all the high-tech toys.
        </p>
        <p className="mx-auto mt-6 max-w-[900px] font-serif text-lg leading-tight">
          But Playground is flipping the script. Playground is a proven platform for child care
          providers to streamline their operations, reclaim their time, and get back to the joy of
          teaching and caring.
        </p>

        <div className="mx-auto mt-20 flex max-w-[760px] flex-col items-center rounded-[2px] bg-[#fbf5e8] px-8 py-14">
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-5">
            {["✚", "▣", "▤", "◆", "◉", "P", "qb", "◒", "✣", "▥"].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex h-20 w-20 rotate-[-7deg] items-center justify-center rounded-[12px] bg-white text-3xl font-bold text-[#7037d8] shadow-[0_12px_24px_rgba(15,23,42,0.12)]"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-12 flex h-24 w-24 items-center justify-center rounded-[18px] bg-[#1678ff] text-5xl font-bold text-white shadow-[0_14px_28px_rgba(22,120,255,0.25)]">
            A
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1120px] px-6 pb-[120px] text-center">
        <p className="font-serif text-lg text-black/45">Our mission</p>
        <h2 className="mt-5 text-[36px] font-semibold leading-tight tracking-[-0.02em] sm:text-[52px]">
          Get more done in a week
        </h2>
        <p className="mx-auto mt-6 max-w-[900px] font-serif text-lg leading-tight">
          Maximize your productivity with smarter tools designed to streamline your workflow, to
          automate tasks, stay organized.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-[8px] bg-[#f3f5f9] px-8 py-12">
              <p className="text-[44px] font-semibold leading-none">{metric.value}</p>
              <p className="mt-6 font-serif text-lg leading-tight">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 pb-[120px]">
        <Image src={ValuesImage} alt="Student smiling during class" className="w-full rounded-[8px]" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 pb-[120px] text-center">
        <p className="font-serif text-lg text-black/45">Features</p>
        <h2 className="mt-5 text-[36px] font-semibold leading-tight tracking-[-0.02em] sm:text-[52px]">
          Why choose EDUO?
        </h2>
        <p className="mt-5 font-serif text-lg">We provide the solution to all your problems.</p>

        <div className="mt-16 overflow-x-auto rounded-[10px] border border-black/10 text-left font-serif">
          <div className="min-w-[780px]">
          <div className="grid grid-cols-3 border-b border-black/10 text-center font-sans text-sm font-bold">
            <div className="border-r border-black/10 p-8">
              <Image src={EduoLogo} alt="EDUO" className="mx-auto h-8 w-auto object-contain" />
            </div>
            <div className="border-r border-black/10 p-8">Platform A</div>
            <div className="p-8">Platform B</div>
          </div>
          {featureRows.map((row) => (
            <div key={row[0]} className="grid grid-cols-3 border-b border-black/10 last:border-b-0">
              {row.map((cell, index) => (
                <div key={cell} className="border-r border-black/10 p-8 last:border-r-0">
                  <span className={index === 0 ? "text-[#7037d8]" : "text-black/50"}>
                    {index === 0 ? "✓" : "×"}
                  </span>{" "}
                  {cell}
                </div>
              ))}
            </div>
          ))}
          </div>
        </div>
      </div>

      <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden px-6 text-center">
        <Image
          src={OperationsBackground}
          alt="Soft abstract education background"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <h2 className="relative max-w-[760px] text-[40px] font-medium leading-[0.96] tracking-[-0.03em] sm:text-[64px]">
          Your education management journey, clearly defined.
        </h2>
      </div>

      <div className="mx-auto max-w-[1120px] px-6 py-[120px] text-center">
        <h2 className="font-sans text-[36px] font-semibold tracking-[-0.02em]">Contact EDUO</h2>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {contactCards.map((card) => (
            <article key={card.title} className="rounded-[8px] bg-[#f3f5f9] p-8 text-left">
              <h3 className="font-sans text-sm font-bold">{card.title}</h3>
              <p className="mt-6 font-serif text-lg leading-tight">
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
