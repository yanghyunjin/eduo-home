import Image from "next/image";

import ScrollReveal from "../ScrollReveal";
import { FlexibleOne, FlexibleTwo } from "../assets";

const FlexibleSection = () => {
  return (
    <section className="px-6 pb-[120px]">
      <div className="mx-auto max-w-[1200px]">
        <ScrollReveal className="grid gap-10 md:grid-cols-2">
          <Image src={FlexibleOne} alt="Students learning with EDUO" className="w-full rounded-[4px]" />
          <Image src={FlexibleTwo} alt="Classroom using EDUO" className="w-full rounded-[4px]" />
        </ScrollReveal>
        <div className="mx-auto mt-16 max-w-[800px] text-center">
          <h2 className="font-sans text-[40px] font-medium leading-none tracking-[-0.03em] sm:text-[56px]">
            Flexible for every organization
          </h2>
          <p className="mt-8 font-sans text-[18px] font-medium leading-none tracking-[-0.02em] sm:text-[20px]">
            Every learning organization operates differently. EDUO adapts to your structure,
            workflows, and operational needs through customizable solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FlexibleSection;
