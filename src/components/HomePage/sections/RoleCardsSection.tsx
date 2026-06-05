import Image from "next/image";

import ButtonLinkout from "../ButtonLinkout";
import { roles } from "../data";

const RoleCardsSection = () => {
  return (
    <section id="about" className="px-6 pb-28 pt-10">
      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="font-serif text-[40px] font-normal leading-none tracking-[-0.04em] sm:text-[80px]">
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
              <p className="mt-5 font-mono text-[14px] font-medium leading-none text-[#171717]">
                {role.label}
              </p>
            </div>
          ))}
        </div>
        <ButtonLinkout
          as="a"
          href="#we-built-for"
          className="mt-14"
        >
          Discover more
        </ButtonLinkout>
      </div>
    </section>
  );
};

export default RoleCardsSection;
