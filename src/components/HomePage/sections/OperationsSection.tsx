import Image from "next/image";

import ScrollReveal from "../ScrollReveal";
import { OperationsBackground, OperationsCard } from "../assets";

const OperationsSection = () => {
  return (
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
        <ScrollReveal className="flex flex-col items-center gap-10 rounded-[12px] bg-white/90 p-10 shadow-[0_20px_70px_rgba(15,23,42,0.18)] md:flex-row">
          <Image
            src={OperationsCard}
            alt="EDUO connected workflows"
            className="w-full rounded-[4px] md:w-[498px]"
          />
          <p className="font-sans text-[20px] font-medium leading-none tracking-[-0.02em] md:max-w-[424px]">
            Attendance, grading, reporting, scheduling, communication, and approvals are seamlessly
            connected into practical day-to-day workflows.
          </p>
        </ScrollReveal>
        <h2 className="mt-20 text-center font-sans text-[40px] font-medium leading-none tracking-[-0.03em] sm:text-[56px]">
          Unified operations
        </h2>
      </div>
    </section>
  );
};

export default OperationsSection;
