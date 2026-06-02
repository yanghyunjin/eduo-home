import Image from "next/image";

import { TestimonialCard } from "../assets";

const EducatorStorySection = () => {
  return (
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
  );
};

export default EducatorStorySection;
