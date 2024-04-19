import React from "react";
// import { ButtonSolidStyle } from "./ButtonSolidStyle";
// import { DateRange } from "./DateRange";
// import { DivWrapper } from "./DivWrapper";
// import { DoneAllAltRound } from "./DoneAllAltRound";
// import { FoldersGroupFill } from "./FoldersGroupFill";
// import { Group } from "./Group";
// import { Saly } from "./Saly";
// import { SalyWrapper } from "./SalyWrapper";
import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] h-[6520px] relative">
        <div className="absolute w-[1440px] h-[800px] top-0 left-0">
          <div className="absolute w-[1440px] h-[800px] top-0 left-0 bg-[url(/images/hero/Background.png)] bg-cover bg-[50%_50%]">
            <img
              className="absolute w-[516px] h-[596px] top-[104px] left-[780px] object-cover"
              alt="Schoolgirl online"
              src="/images/hero/hero1.png"
            />
            <div className="absolute w-[540px] h-[320px] top-[240px] left-[200px]">
              <div className="relative h-[320px] overflow-hidden">
                <p className="absolute w-[573px] top-[2px] left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[60px] tracking-[-2.00px] leading-[65px]">
                  Get Started Your learning &amp;
                  <br />
                  Enrich Your Dream
                </p>
                <div className="absolute w-[500px] top-[231px] left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[32px]">
                  Hello
                </div>
              </div>
            </div>
          </div>
          {/* <header className="absolute w-[1440px] h-[84px] top-0 left-0 bg-transparent">
            <div className="absolute w-[146px] h-[24px] top-[30px] left-[1000px]">
              <div className="inline-flex items-center justify-center gap-[50px] relative">
                <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                    Home
                  </div>
                </div>
                <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                    About
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex items-start gap-[14px] absolute top-[22px] left-[1196px]">
              <button className="all-[unset] box-border flex w-[100px] items-center justify-center gap-[10px] px-0 py-[10px] relative bg-[#f54b4b] rounded-[6px]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[16px] text-center tracking-[0] leading-[20px] whitespace-nowrap">
                  Contact
                </div>
              </button>
            </div>
            <img
              className="absolute w-[120px] h-[40px] top-[22px] left-[144px] object-cover"
              alt="Logo"
              src="logo.png"
            />
          </header> */}
        </div>
        <div className="absolute w-[1444px] h-[540px] top-[840px] left-0">
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
        <div className="flex flex-col w-[1440px] items-center gap-[52px] px-[144px] py-0 absolute top-[1460px] left-0">
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
            <div className="w-[146px] left-[1254px] bg-[url(/logo-6-2.png)] absolute h-[40px] top-0 bg-[100%_100%]" />
          </div>
        </div>
        <div className="absolute w-[1440px] h-[760px] top-[1768px] left-0 bg-[#f6f4ff]">
          <div className="absolute w-[589px] h-[135px] top-[48px] left-[425px] overflow-hidden">
            <div className="absolute w-[589px] top-0 left-0 [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
              OUR SERVICES
            </div>
            <p className="absolute w-[521px] top-[39px] left-[34px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#161c2d] text-[36px] text-center tracking-[0] leading-[48px]">
              We provide great services for our customers based on needs
            </p>
          </div>
          <div className="absolute w-[360px] h-[480px] top-[232px] left-[144px] rounded-[20px] overflow-hidden">
            <div className="relative h-[480px]">
              <div className="absolute w-[360px] h-[480px] top-0 left-0">
                <div className="relative w-[362px] h-[482px] -top-px -left-px bg-white rounded-[20px]" />
              </div>
              <div className="!absolute !left-[80px] !top-[40px] w-[200px] h-[200px] bg-[url(/images/hero/Saly1.png)]" />
              <div className="absolute w-[227px] top-[252px] left-[67px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] text-center tracking-[0] leading-[normal]">
                Access Any where
              </div>
              <p className="absolute w-[304px] top-[301px] left-[27px] opacity-[0.65] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[30px]">
                With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
              </p>
            </div>
          </div>
          <div className="absolute w-[360px] h-[480px] top-[232px] left-[936px] rounded-[20px] overflow-hidden">
            <div className="relative h-[480px]">
              <div className="absolute w-[360px] h-[480px] top-0 left-0">
                <div className="relative w-[362px] h-[482px] -top-px -left-px bg-white rounded-[10px]" />
              </div>
              {/* <SalyWrapper className="!absolute !left-[98px] !top-[40px]" /> */}
              <div className="!absolute !left-[98px] !top-[40px] w-[145px] h-[180px] bg-[url(/images/hero/Saly3.png)]" />
              <div className="absolute w-[196px] top-[252px] left-[82px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] text-center tracking-[0] leading-[normal]">
                Certificate
              </div>
              <p className="absolute w-[304px] top-[301px] left-[27px] opacity-[0.65] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[30px]">
                With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
              </p>
            </div>
          </div>
          <div className="absolute w-[360px] h-[480px] top-[232px] left-[540px] rounded-[20px] overflow-hidden">
            <div className="relative h-[480px]">
              <div className="absolute w-[360px] h-[480px] top-0 left-0">
                <div className="relative w-[362px] h-[482px] -top-px -left-px bg-white rounded-[20px]" />
              </div>
              {/* <DivWrapper className="!absolute !left-[70px] !top-[30px]" /> */}
              <div className="!absolute !left-[80px] !top-[40px] w-[200px] h-[200px] bg-[url(/images/hero/Saly2.png)]" />
              <div className="absolute w-[227px] top-[252px] left-[67px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] text-center tracking-[0] leading-[normal]">
                Organize Program
              </div>
              <p className="absolute w-[304px] top-[301px] left-[27px] opacity-[0.65] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[30px]">
                With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute w-[1440px] h-[2258px] top-[2802px] left-0">
          <div className="absolute w-[1440px] h-[1920px] top-[338px] left-0 bg-[url(/images/hero/Background2.png)] bg-cover bg-[50%_50%]">
            <div className="absolute w-[304px] h-[128px] top-[756px] left-[212px] overflow-hidden">
              <div className="absolute w-[214px] top-[3px] left-[59px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[32px]">
                Access Anywhere
              </div>
              <p className="absolute w-[247px] top-[46px] left-[59px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#cccccc] text-[18px] tracking-[0] leading-[28px]">
                With lots of unique blocks, you can easily build a page without coding.
              </p>
              <img className="absolute w-[42px] h-[32px] top-px left-[6px]" alt="Roadmap" src="/images/hero/roadmap.png" />
            </div>
            <div className="absolute w-[312px] h-[128px] top-[756px] left-[564px] overflow-hidden">
              <div className="absolute w-[191px] top-[3px] left-[60px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[32px]">
                Certified Teachers
              </div>
              <p className="absolute w-[254px] top-[46px] left-[61px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#cccccc] text-[18px] tracking-[0] leading-[28px]">
                With lots of unique blocks, you can easily build a page without coding.
              </p>
              <img className="absolute w-[42px] h-[32px] top-px left-[6px]" src="/images/hero/Done_all_alt_round_fill.png" />
              {/* <DoneAllAltRound className="!absolute !left-[9px] !top-[-6px]" /> */}
            </div>
            <div className="absolute w-[312px] h-[128px] top-[756px] left-[936px] overflow-hidden">
              <div className="absolute top-[3px] left-[60px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[32px] whitespace-nowrap">
                School Management
              </div>
              <p className="absolute w-[254px] top-[46px] left-[61px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#cccccc] text-[18px] tracking-[0] leading-[28px]">
                With lots of unique blocks, you can easily build a page without coding.
              </p>
              {/* <Group
                className="!absolute !left-[14px] !top-[-6px]"
                ellipse="ellipse-47-2.svg"
                ellipseClassName="!border-[unset]"
                img="ellipse-48-2.svg"
                rectangle="rectangle-4160-2.svg"
                subtract="subtract-4.svg"
                subtract1="subtract-5.svg"
              /> */}
              <img className="absolute w-[42px] h-[32px] top-px left-[6px]" src="/images/hero/Group.png" />
            </div>
            <div className="absolute w-[304px] h-[128px] top-[924px] left-[212px] overflow-hidden">
              <div className="absolute w-[214px] top-[3px] left-[59px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[32px]">
                Video Classes
              </div>
              <p className="absolute w-[247px] top-[46px] left-[59px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#cccccc] text-[18px] tracking-[0] leading-[28px]">
                With lots of unique blocks, you can easily build a page without coding.
              </p>
              <img className="absolute w-[35px] h-[29px] top-px left-[8px]" src="/images/hero/video_meeting.png" />
              {/* <div className="absolute w-[35px] h-[29px] top-[6px] left-[8px] bg-[url(/combined-shape.svg)] bg-[100%_100%]">
                <img className="absolute w-[11px] h-[13px] top-[6px] left-[13px]" alt="Path" src="path.svg" />
              </div> */}
            </div>
            <div className="absolute w-[312px] h-[128px] top-[924px] left-[564px] overflow-hidden">
              <div className="absolute w-[191px] top-[3px] left-[60px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[32px]">
                Unlimited Projects
              </div>
              <p className="absolute w-[254px] top-[46px] left-[61px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#cccccc] text-[18px] tracking-[0] leading-[28px]">
                With lots of unique blocks, you can easily build a page without coding.
              </p>
              <img className="absolute w-[40px] h-[40px] top-px left-[8px]" src="/images/hero/Folders_group_fill.png" />
              {/* <FoldersGroupFill className="!absolute !left-[8px] !top-0" /> */}
            </div>
            <div className="absolute w-[312px] h-[128px] top-[924px] left-[936px] overflow-hidden">
              <div className="absolute top-[3px] left-[60px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[32px] whitespace-nowrap">
                Schdule Management
              </div>
              <p className="absolute w-[254px] top-[46px] left-[61px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#cccccc] text-[18px] tracking-[0] leading-[28px]">
                With lots of unique blocks, you can easily build a page without coding.
              </p>
              <img className="absolute w-[40px] h-[40px] top-px left-[8px]" src="/images/hero/Date_range.png" />
              {/* <DateRange className="!absolute !w-[40px] !h-[40px] !top-0 !left-[8px]" /> */}
            </div>
            <p className="absolute top-[532px] left-[425px] [font-family:'Poppins-Black',Helvetica] font-black text-white text-[48px] text-center tracking-[0] leading-[58px]">
              We made this solution <br />
              to solve your problems.
            </p>
            <img className="absolute w-[143px] h-[2px] top-[1120px] left-[651px]" alt="Line" src="/images/hero/Line-8.svg" />
            <div className="absolute w-[1156px] h-[512px] top-[1240px] left-[144px]">
              <div className="absolute w-[1156px] h-[440px] top-0 left-0">
                <p className="absolute top-0 left-0 [font-family:'Poppins-Bold',Helvetica] font-normal text-white text-[36px] tracking-[0] leading-[37.8px]">
                  <span className="font-bold">
                    Feedback
                    <br />
                  </span>
                  <span className="[font-family:'Poppins-Light',Helvetica] font-light text-[48px] leading-[50.4px]">
                    What Our Students Say
                  </span>
                </p>
                <p className="absolute w-[820px] top-[200px] left-[332px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[40px] tracking-[0] leading-[64px]">
                  The instruction was knowledgeable and engaging, and I learned a lot in this course.
                </p>
                <img
                  className="absolute w-[162px] h-[120px] top-[120px] left-[156px] object-cover"
                  alt="Img"
                  src="/images/hero/marker1.png"
                />
              </div>
              <img className="absolute w-[273px] h-[86px] top-[426px] left-[318px]" alt="Profile" src="/images/hero/Profile.png" />
            </div>
          </div>
          <div className="flex flex-wrap w-[940px] items-end gap-[36px] p-[40px] absolute top-0 left-[250px] bg-white rounded-[20px] overflow-hidden shadow-[0px_0px_9px_2px_#0000000d]">
            <img
              className="relative w-[848px] h-[608px] mt-[-4.00px] ml-[-4.00px] object-cover"
              alt="Cas"
              src="/images/hero/CAS.png"
            />
            <div className="relative w-[473px] h-[48px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[32px] tracking-[0] leading-[normal]">
              Collegiate Academy of Seoul
            </div>
            <div className="relative w-[146px] h-[36px]">
              <div className="relative w-[144px] h-[36px] bg-white rounded-[20px] border border-solid border-black flex items-center justify-center">
                <div className="absolute [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[18px] tracking-[0] leading-[normal]">
                  View Work
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[416px] h-[100px] top-[2642px] left-[144px]">
          <div className="relative w-[414px] h-[100px]">
            <p className="absolute top-0 left-0 [font-family:'Poppins-Bold',Helvetica] font-normal text-black text-[48px] tracking-[0] leading-[50.4px]">
              <span className="font-bold">
                Our Recent Work
                <br />
              </span>
              <span className="[font-family:'Poppins-Light',Helvetica] font-light">With</span>
            </p>
            <img
              className="absolute w-[129px] h-[43px] top-[50px] left-[113px] object-cover"
              alt="Image"
              src="/images/logo/EDUO_LOGO.png"
            />
          </div>
        </div>
        <div className="absolute w-[1440px] h-[1460px] top-[5060px] left-0">
          <img className="absolute w-[1440px] h-[1100px] top-0 left-0" alt="Bg" src="/images/hero/BG.png" />
          <div className="absolute w-[1440px] h-[460px] top-[1000px] left-0">
            <div className="absolute w-[1454px] h-[360px] top-[100px] left-0">
              <div className="relative w-[1440px] h-[360px] bg-white">
                <img
                  className="absolute w-[200px] h-[66px] top-[80px] left-[144px] object-cover"
                  alt="Image"
                  src="/images/logo/EDUO_LOGO.png"
                />
                <p className="absolute w-[440px] top-[180px] left-[145px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
                  Copyright © 2024 Eduo Learning
                  <br />
                  All Rights Reserved.
                </p>
                <p className="absolute w-[200px] top-[180px] left-[668px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
                  12, Dogok-ro 2-gil, Gangnam-gu, Seoul, Republic of Korea
                </p>
                <div className="absolute top-[111px] left-[668px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0] leading-[normal]">
                  Address
                </div>
                <div className="absolute top-[111px] left-[880px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0] leading-[normal]">
                  Office
                </div>
                <p className="absolute w-[200px] top-[180px] left-[880px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
                  Monday - Friday
                  <br />
                  9AM - 6PM
                </p>
                <p className="absolute w-[200px] top-[180px] left-[1088px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
                  <span className="[font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0]">
                    +82 0507-1493-7931
                  </span>
                  <a
                    href="https://pcmap.place.naver.com/place/1592159038/home?from=map&amp;fromPanelNum=1&amp;timestamp=202404142150#"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="underline"> </span>
                  </a>
                  <span className="[font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0]">
                    admin@casseoul.org
                  </span>
                </p>
                <div className="absolute top-[111px] left-[1088px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0] leading-[normal]">
                  Contact
                </div>
              </div>
            </div>
            <img className="absolute w-[1440px] h-[100px] top-0 left-0" alt="Wave" src="/images/hero/Wave-2.svg" />
          </div>
          <div className="absolute w-[350px] h-[557px] top-[325px] left-[545px] bg-white rounded-[20px] overflow-hidden shadow-[0px_4px_4px_#00000040]">
            <div className="relative w-[352px] h-[559px] -top-px -left-px rounded-[10px] border border-solid border-white">
              <div className="absolute w-[308px] h-[270px] top-[165px] left-[23px]">
                <div className="absolute w-[308px] h-[73px] top-0 left-0">
                  <div className="absolute w-[287px] top-[22px] left-[10px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[19px] text-center tracking-[0] leading-[32px]">
                    Upto 100 Team Members
                  </div>
                  <img className="absolute w-[306px] h-px top-0 left-0" alt="Line" src="/images/hero/line.png" />
                  <img className="absolute w-[306px] h-px top-[72px] left-0" alt="Line copy" src="/images/hero/line.png" />
                </div>
                <div className="absolute w-[308px] h-[73px] top-[72px] left-0">
                  <div className="absolute w-[287px] top-[22px] left-[10px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[19px] text-center tracking-[0] leading-[32px]">
                    100 GB Cloud Storage
                  </div>
                  {/* <img className="absolute w-[306px] h-px top-0 left-0" alt="Line" src="/images/hero/line.png" /> */}
                  <img className="absolute w-[306px] h-px top-[72px] left-0" alt="Line copy" src="/images/hero/line.png" />
                </div>
                <div className="h-[73px] top-[144px] absolute w-[308px] left-0">
                  <div className="absolute w-[287px] top-[22px] left-[10px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[19px] text-center tracking-[0] leading-[32px]">
                    Unlimited Meetings
                  </div>
                  {/* <img className="absolute w-[306px] h-px top-0 left-0" alt="Line" src="/images/hero/line.png" /> */}
                  <img className="absolute w-[306px] h-px top-[72px] left-0" alt="Line copy" src="/images/hero/line.png" />
                </div>
                <div className="h-[54px] top-[216px] absolute w-[308px] left-0">
                  <div className="absolute w-[287px] top-[22px] left-[10px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[19px] text-center tracking-[0] leading-[32px]">
                    Premium Support
                  </div>
                  {/* <img className="absolute w-[306px] h-px top-0 left-0" alt="Line" src="/images/hero/line.png" /> */}
                </div>
              </div>
              <div className="absolute top-[26px] left-[128px] [font-family:'Poppins-Black',Helvetica] font-black text-[#f54b4b] text-[14px] text-center tracking-[2.00px] leading-[normal]">
                UNLIMITED
              </div>
              <div className="absolute w-[108px] h-[65px] top-[73px] left-[121px] overflow-hidden">
                <div className="relative w-[109px] h-[65px]">
                  <div className="absolute top-[33px] left-[72px] [font-family:'Rubik-Regular',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[29px] whitespace-nowrap">
                    / mo
                  </div>
                  <p className="absolute top-0 left-0 [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[24px] tracking-[0] leading-[65px] whitespace-nowrap">
                    <span className="[font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[24px] tracking-[0] leading-[65px]">
                      $
                    </span>
                    <span className="text-[55px]">19</span>
                  </p>
                </div>
              </div>
              {/* <ButtonSolidStyle
                className="!absolute !left-[66px] !w-[219px] !top-[462px]"
                divClassName="!tracking-[0] ![font-family:'Poppins-Bold',Helvetica] !w-[219px]"
                overlapGroupClassName="!rounded-[15px] !bg-colorblack !w-[221px]"
                text="Get Started Now"
              /> */}
            </div>
          </div>
          <div className="absolute w-[630px] h-[142px] top-[109px] left-[405px]">
            <div className="absolute w-[630px] top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[48px] text-center tracking-[0] leading-[normal]">
              Pricing made easy
            </div>
            <p className="absolute w-[468px] top-[78px] left-[81px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#120c3a] text-[19px] text-center tracking-[0] leading-[normal]">
              With lots of unique blocks, you can easily build a page easily without any coding.
            </p>
          </div>
        </div>
      </div>
    </div>     
    </>
  );
};

export default Hero;


