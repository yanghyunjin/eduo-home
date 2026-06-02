import Image from "next/image";

import { EduoDiagram } from "../assets";

const EcosystemSection = () => {
  return (
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
  );
};

export default EcosystemSection;
