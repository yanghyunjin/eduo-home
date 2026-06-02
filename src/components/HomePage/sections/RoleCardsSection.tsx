import Image from "next/image";

import { roles } from "../data";

const RoleCardsSection = () => {
  return (
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
        <a
          href="#we-built-for"
          className="mt-14 inline-flex rounded-full bg-[#7037d8] px-7 py-3 font-sans text-sm font-semibold text-white"
        >
          Discover more
        </a>
      </div>
    </section>
  );
};

export default RoleCardsSection;
