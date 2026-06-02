import { roleGuides } from "../data";

const WeBuiltForSection = () => {
  return (
    <section id="we-built-for" className="px-6 py-[120px]">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[2px] bg-[#eeeeee] px-5 py-24 sm:px-10">
        <div className="mx-auto max-w-[1040px] text-center">
          <p className="font-serif text-lg text-black/50">Customer story</p>
          <h2 className="mt-8 text-[44px] font-semibold leading-[0.96] tracking-[-0.03em] sm:text-[72px]">
            Smart solution for everyone
          </h2>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {roleGuides.map((guide) => (
            <article key={guide.title} className="min-h-[260px] rounded-[10px] bg-white p-10">
              <h3 className="font-sans text-lg font-extrabold leading-tight text-black">
                {guide.title}
              </h3>
              <p className="mt-8 font-serif text-xl leading-[1.1] tracking-[-0.02em] text-black">
                {guide.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeBuiltForSection;
