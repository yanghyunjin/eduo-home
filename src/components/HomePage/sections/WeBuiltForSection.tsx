import { roleGuides } from "../data";

const WeBuiltForSection = () => {
  return (
    <section
      id="we-built-for"
      className="relative scroll-mt-[60px] overflow-hidden bg-[#eeeeee] px-5 pb-[120px] pt-[124px] sm:px-8 lg:min-h-[694px]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 20%, rgba(255,255,255,0.95) 0 2px, transparent 2px), radial-gradient(circle at 70% 18%, rgba(255,255,255,0.8) 0 1.5px, transparent 1.5px), linear-gradient(145deg, rgba(255,255,255,0.9), rgba(220,220,220,0.62) 48%, rgba(255,255,255,0.84))",
          backgroundSize: "10px 10px, 8px 8px, 100% 100%",
        }}
      />
      <div className="relative mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[1060px] text-center">
          <p className="font-serif text-lg text-black/50 sm:text-xl">Customer story</p>
          <h2 className="mt-8 text-[36px] font-medium leading-[0.98] tracking-[-0.03em] sm:text-[64px] lg:text-[76px]">
            Smart solution for everyone
          </h2>
        </div>

        <div className="mt-16 grid gap-5 lg:mt-20 lg:grid-cols-4">
          {roleGuides.map((guide) => (
            <article
              key={guide.title}
              className="min-h-[236px] rounded-[12px] bg-white p-10 lg:min-h-[267px]"
            >
              <h3 className="font-sans text-lg font-extrabold leading-tight text-black sm:text-xl">
                {guide.title}
              </h3>
              <p className="mt-8 font-serif text-xl leading-[1.1] tracking-[-0.02em] text-black sm:text-2xl lg:text-[22px]">
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
