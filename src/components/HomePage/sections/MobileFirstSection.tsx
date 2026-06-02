import Image from "next/image";

import { MobileImage } from "../assets";

const MobileFirstSection = () => {
  return (
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
  );
};

export default MobileFirstSection;
