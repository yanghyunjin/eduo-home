"use client";

import { useState } from "react";

import ScrollReveal from "../ScrollReveal";

const testimonials = [
  {
    quote:
      "Before EDUO, managing communication, attendance, reports, and operational workflows across our organization felt fragmented. EDUO helped bring everything into one connected system and significantly improved our daily efficiency.",
    name: "Tim",
    role: "Principal at Azabu Christian Academy",
  },
  {
    quote:
      "EDUO made classroom management and communication much more streamlined. From assignments and grading to announcements and parent communication, everything is connected in one place.",
    name: "Alexa",
    role: "Math Teacher at Benedem",
  },
  {
    quote: "EDUO awesome",
    name: "Alexa",
    role: "Math Teacher at Benedem",
  },
];

const EducatorStorySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="px-6 pb-[120px]">
      <div className="mx-auto max-w-[1030px] text-center">
        <ScrollReveal>
          <h2 className="flex flex-col text-[44px] leading-none sm:text-[80px]">
            <span className="font-serif font-normal tracking-[-0.04em]">
              Built by educator,
            </span>
            <span className="mt-[-4px] font-sans font-normal tracking-[-0.05em] sm:mt-[-8px]">
              and for educator
            </span>
          </h2>
        </ScrollReveal>
        <ScrollReveal
          className="mx-auto mt-14 flex aspect-[738/584] w-full max-w-[738px] flex-col rounded-[8px] bg-cover bg-center px-9 py-12 text-left sm:px-[52px] sm:py-[58px]"
          style={{ backgroundImage: 'url("/Carousel%20slides.png")' }}
        >
          <div className="text-[54px] font-semibold leading-none text-[#6a6a6a]">&ldquo;</div>
          <p className="mt-7 max-w-[638px] font-sans text-[27px] font-medium leading-none tracking-[-0.03em] text-black sm:text-[40px]">
            {activeTestimonial.quote}
          </p>
          <div className="mt-auto">
            <p className="font-sans text-[20px] font-medium leading-none tracking-[-0.02em] text-black">
              {activeTestimonial.name}
            </p>
            <p className="mt-2 font-serif text-[20px] font-normal leading-[1.2] tracking-[-0.04em] text-[#6c6c6c]">
              {activeTestimonial.role}
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={showPrevious}
              className="flex h-8 w-8 items-center justify-center text-[34px] font-light leading-none text-black transition hover:opacity-60"
            >
              &larr;
            </button>
            <div className="flex items-center gap-2" aria-label="Testimonial slides">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.quote}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-[10px] w-[10px] rounded-full transition ${
                    activeIndex === index ? "bg-[#3a0d0d]" : "bg-[#bdbdbd]"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={showNext}
              className="flex h-8 w-8 items-center justify-center text-[34px] font-light leading-none text-black transition hover:opacity-60"
            >
              &rarr;
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EducatorStorySection;
