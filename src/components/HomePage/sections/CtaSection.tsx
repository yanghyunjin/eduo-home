import ButtonLinkout from "../ButtonLinkout";

const CtaSection = () => {
  return (
    <section id="contact" className="px-6 py-24 text-center">
      <h2 className="mx-auto max-w-[880px] font-sans text-[30px] font-medium leading-none tracking-[-0.03em] sm:text-[40px]">
        Schedule a quick call to learn how EDUO learning can turn your school into a powerful advantage
      </h2>
      <ButtonLinkout
        as="a"
        href="/we-built-for"
        className="mt-10 min-w-[180px]"
      >
        Contact with us
      </ButtonLinkout>
    </section>
  );
};

export default CtaSection;
