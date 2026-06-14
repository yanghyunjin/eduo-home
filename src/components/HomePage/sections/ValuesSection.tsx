import Image from "next/image";

import { ValuesImage } from "../assets";

const ValuesSection = () => {
  return (
    <section className="relative min-h-[680px] overflow-hidden">
      <Image src={ValuesImage} alt="Students enjoying class" fill className="object-cover" sizes="100vw" />
    </section>
  );
};

export default ValuesSection;
