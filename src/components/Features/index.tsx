import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      {/* <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section> */}
      
      <div className="w-[1440px] h-[540px] relative">
        <div className="fixed w-[1444px] h-[540px]">
          <div className="relative w-[1440px] h-[540px] bg-white">
            <img
              className="absolute w-[480px] h-[480px] top-0 left-[816px] object-cover"
              alt="Girl study with"
              src="/images/feature/feature1.png"
            />
            <p className="absolute w-[644px] top-[82px] left-[144px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[48px] tracking-[0] leading-[65px]">
              Smart &amp; Effective
              <br />
              Online Education Platform
            </p>
            <p className="absolute w-[475px] top-[254px] left-[144px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
              Online education can be a convenient and flexible option for students who are unable attent traditional
              in-person classes due to their location, schedule, and more.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[1440px] items-center gap-[52px] px-[144px] py-0 relative">
          <div className="flex flex-col w-[1110px] items-center gap-[8px] relative flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[48px] text-center tracking-[0] leading-[44px]">
              Our Clients
            </div>
            <p className="relative self-stretch [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[24px]">
              Over 100 Schools And Companies Collaborate with us
            </p>
          </div>
          <div className="relative w-[1400px] h-[40px] ml-[-124.00px] mr-[-124.00px]">
            <div className="absolute w-[145px] h-[40px] top-0 left-0 bg-[url(/logo-1.png)] bg-[100%_100%]" />
            <div className="w-[194px] left-[212px] bg-[url(/logo-2.png)] absolute h-[40px] top-0 bg-[100%_100%]" />
            <div className="w-[146px] left-[481px] bg-[url(/logo-3.png)] absolute h-[40px] top-0 bg-[100%_100%]" />
            <div className="w-[120px] left-[680px] bg-[url(/logo-4.png)] absolute h-[40px] top-0 bg-[100%_100%]" />
            <div className="w-[146px] left-[865px] bg-[url(/logo-5.png)] absolute h-[40px] top-0 bg-[100%_100%]" />
            <div className="w-[146px] left-[1065px] bg-[url(/logo-6.png)] absolute h-[40px] top-0 bg-[100%_100%]" />
            <div className="w-[146px] left-[1254px] bg-[url(/image.png)] absolute h-[40px] top-0 bg-[100%_100%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
