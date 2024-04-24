"use client";
import React,{useState} from "react";
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
import ModalVideo from "react-modal-video";
const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    
    <div className="bg-white flex flex-row flex-nowrap justify-center w-full overflow-x-auto">
      <ModalVideo
      
        channel="custom"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        url="https://transcoded-edu-video.s3.ap-northeast-2.amazonaws.com/EDUO.mp4"
        // videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
      <div className="bg-white overflow-hidden w-[1920px] h-[6980px] relative overflow-x-auto">
        <div className="absolute w-[1920px] h-[1150px] top-[-350px] left-0">
          <div className="absolute w-[1920px] h-[1150px] top-0 left-0">
            <div className="relative h-[800px] top-[350px] bg-[url(/images/hero/Background.png)] bg-cover bg-[50%_50%]">
              <img
                className="absolute w-[546px] h-[596px] top-[106px] left-[1009px] object-cover"
                alt="Schoolgirl online"
                src="/images/hero/hero1.png"
              />
              <div className="absolute w-[821px] h-[391px] top-[241px] left-[278px]">
                <div className="relative h-[391px]">
                  <p className="absolute w-[568px] top-[38px] left-0 [font-family:'Poppins-SemiBold',Helvetica] font-normal text-white text-[64px] leading-[64px]">
                    <span className="font-semibold tracking-[-1.28px] leading-[68px]">
                      Transform your school with Eduo:
                    </span>
                    <span className="[font-family:'Poppins-Medium',Helvetica] font-medium tracking-[-1.28px] leading-[68px]">
                      {" "}
                      <br />
                    </span>
                    <span className="[font-family:'Poppins-Medium',Helvetica] font-medium text-[32px] tracking-[-0.32px]">
                      a single solution designed to<br/> streamline administrative processes<br/> and enhance learning outcomes
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[1922px] h-[800px] top-[800px] left-0">
          <div className="relative w-[1920px] h-[800px] bg-white">
            <p className="absolute w-[1088px] top-[132px] left-[416px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[40px] text-center tracking-[-1.00px] leading-[65px]">
              Empower your educators and inspire your students with<br/> our all-in-one education platform
            </p>
            <div className="absolute w-[325px] h-[44px] top-[372px] left-[423px]">
              <img
                className="absolute w-[40px] h-[44px] top-0 left-0"
                alt="Done all alt round"
                src="/images/hero/Done_all_alt_round_fill.png"
              />
              <div className="absolute w-[271px] top-[4px] left-[52px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[20px] tracking-[0] leading-[32px] whitespace-nowrap">
                Access anytime, anywhere
              </div>
            </div>
            <div className="absolute w-[492px] h-[44px] top-[444px] left-[423px]">
              <img
                className="absolute w-[40px] h-[44px] top-0 left-0"
                alt="Done all alt round"
                src="/images/hero/Done_all_alt_round_fill.png"
              />
              <p className="absolute w-[438px] top-[4px] left-[52px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[20px] tracking-[0] leading-[32px] whitespace-nowrap">
                Regular updates
              </p>
            </div>
            <div className="absolute w-[492px] h-[44px] top-[517px] left-[423px]">
              <img
                className="absolute w-[40px] h-[44px] top-0 left-0"
                alt="Done all alt round"
                src="/images/hero/Done_all_alt_round_fill.png"
              />
              <div className="absolute w-[438px] top-[4px] left-[52px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[20px] tracking-[0] leading-[32px] whitespace-nowrap">
                Strong STEM, AP curriculum
              </div>
            </div>
            {/* <div className="absolute w-[492px] h-[44px] top-[497px] left-[423px]">
              <img
                className="absolute w-[40px] h-[44px] top-0 left-0"
                alt="Done all alt round"
                src="/images/hero/Done_all_alt_round_fill.png"
              />
              <p className="absolute w-[438px] top-[4px] left-[52px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[20px] tracking-[0] leading-[32px] whitespace-nowrap">
                Distinct features for administrators, teachers, students, and parents
              </p>
            </div> */}
             <div className="absolute w-[492px] h-[44px] top-[589px] left-[423px]">
              <img
                className="absolute w-[40px] h-[44px] top-0 left-0"
                alt="Done all alt round"
                src="/images/hero/Done_all_alt_round_fill.png"
              />
              <p className="w-[438px] absolute top-[4px] left-[52px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[20px] tracking-[0] leading-[32px] whitespace-nowrap">
                Distinct features for administrators,<br/> teachers, students, and parents
              </p>
            </div>
            <div className="absolute w-[629px] h-[44px] top-[372px] left-[1007px]">
              <img
                className="absolute w-[40px] h-[44px] top-0 left-0"
                alt="Done all alt round"
                src="/images/hero/Done_all_alt_round_fill.png"
              />
              <p className="absolute top-[4px] left-[52px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[20px] tracking-[0] leading-[32px] whitespace-nowrap">
                Intuitive and easy to use
              </p>
            </div>
            <div className="absolute w-[492px] h-[44px] top-[444px] left-[1007px]">
              <img
                className="absolute w-[40px] h-[44px] top-0 left-0"
                alt="Done all alt round"
                src="/images/hero/Done_all_alt_round_fill.png"
              />
              <p className="absolute w-[438px] top-[4px] left-[52px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[20px] tracking-[0] leading-[32px] whitespace-nowrap">
                Affordable
              </p>
            </div>
            <div className="absolute w-[492px] h-[44px] top-[517px] left-[1007px]">
              <img
                className="absolute w-[40px] h-[44px] top-0 left-0"
                alt="Done all alt round"
                src="/images/hero/Done_all_alt_round_fill.png"
              />
              <div className="absolute w-[438px] top-[4px] left-[52px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[20px] tracking-[0] leading-[32px] whitespace-nowrap">
                Made by teachers
              </div>
            </div>
            <div className="absolute w-[492px] h-[44px] top-[589px] left-[1007px]">
              <img
                className="absolute w-[40px] h-[44px] top-0 left-0"
                alt="Done all alt round"
                src="/images/hero/Done_all_alt_round_fill.png"
              />
              <div className="absolute w-[438px] top-[4px] left-[52px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[20px] tracking-[0] leading-[32px] whitespace-nowrap">
                K-Education touches
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[1920px] h-[460px] top-[4770px] left-0 bg-white">
          <div className="flex flex-col w-[1440px] h-[244px] items-center gap-[64px] px-[144px] py-0 relative top-[107px] left-[240px]">
            <div className="flex flex-col w-[1110px] items-center gap-[8px] relative flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[48px] text-center tracking-[0] leading-[44px]">
                Our Clients
              </div>
            </div>
            <div className="relative w-[1440px] h-[117.46px] ml-[-144.00px] mr-[-144.00px]">
              <img
                className="absolute w-[117px] h-[117px] top-0 left-0"
                alt="Collegiate academy"
                src="/images/hero/client1.png"
              />
              <img
                className="absolute w-[174px] h-[54px] top-[32px] left-[155px]"
                alt="Logo daum"
                src="/images/hero/client2.png"
              />
              <img className="absolute w-[117px] h-[117px] top-0 left-[366px]" alt="Image" src="/images/hero/client3.png" />
              <img
                className="w-[155px] left-[522px] absolute h-[117px] top-0 object-cover"
                alt="Screen shot"
                src="/images/hero/client4.png"
              />
              <img
                className="w-[148px] left-[714px] absolute h-[117px] top-0 object-cover"
                alt="Screen shot"
                src="/images/hero/client5.png"
              />
              <img
                className="absolute w-[310px] h-[54px] top-[32px] left-[1130px]"
                alt="Kakaotalk photo"
                src="/images/hero/client7.png"
              />

              <img
                className="absolute w-[193px] h-[54px] top-[32px] left-[900px] object-cover"
                alt="Image"
                src="/images/hero/client6.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[1920px] h-[762px] top-[1600px] left-0 bg-[#f6f4ff]">
          <div className="absolute w-[742px] h-[155px] top-[60px] left-[589px] overflow-hidden">
            <p className="absolute w-[736px] top-[68px] left-[3px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[30px]">
              Eduo was founded with the purpose of providing an integrated platform<br/> to complement schools in their
              operations and classroom management.
            </p>
            <div className="absolute w-[517px] top-0 left-[112px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[48px] text-center tracking-[0] leading-[44px]">
              Our Services
            </div>
          </div>
          <div className="absolute w-[360px] h-[440px] top-[234px] left-[384px] rounded-[20px] overflow-hidden">
            <div className="relative h-[440px]">
              <div className="absolute w-[360px] h-[440px] top-0 left-0">
                <div className="relative w-[362px] h-[442px] -top-px -left-px bg-white rounded-[20px]" />
              </div>
              <div className="absolute top-[260px] left-[162px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] text-center tracking-[0] leading-[normal]">
                SIS
              </div>
              <p className="absolute w-[320px] top-[320px] left-[20px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[30px]">
                Essential tools for efficient school operations at your fingertips
              </p>
              <img
                className="absolute w-[200px] h-[108px] !left-[80px] !top-[93px] object-cover"
                alt="Students discussion"
                src="/images/hero/saly_1.png"
              />
              {/* <Saly className="!absolute !left-[80px] !top-[93px]" /> */}
            </div>
          </div>
          <div className="absolute w-[360px] h-[440px] top-[234px] left-[1176px] rounded-[20px] overflow-hidden">
            <div className="relative h-[440px]">
              <div className="absolute w-[360px] h-[440px] top-0 left-0">
                <div className="relative w-[362px] h-[442px] -top-px -left-px bg-white rounded-[20px]" />
              </div>
              <div className="left-[62px] absolute top-[260px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] text-center tracking-[0] leading-[normal]">
                College Counseling
              </div>
              <p className="left-[23px] absolute w-[320px] top-[320px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[30px]">
                Systematic counseling support through accumulated admissions data
              </p>
              <img
                className="absolute w-[200px] h-[200px] top-[28px] left-[80px] object-cover"
                alt="Students discussion"
                src="/images/hero/saly_3.png"
              />
            </div>
          </div>
          <div className="absolute w-[360px] h-[440px] top-[234px] left-[780px] rounded-[20px] overflow-hidden">
            <div className="relative h-[440px]">
              <div className="absolute w-[360px] h-[440px] top-0 left-0">
                <div className="relative w-[362px] h-[442px] -top-px -left-px bg-white rounded-[20px]" />
              </div>
              <img
                className="absolute w-[160px] h-[200px] top-[48px] left-[100px] object-cover"
                alt="Saly"
                src="/images/hero/saly_2.png"
              />
              <div className="left-[157px] absolute top-[260px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] text-center tracking-[0] leading-[normal]">
                LMS
              </div>
              <p className="left-[20px] absolute w-[320px] top-[320px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[30px]">
                Accredited courses prepared and taught by qualified instructors
              </p>
            </div>
          </div>
        </div>
        <div className="absolute w-[1920px] h-[2408px] top-[2362px] left-0">
          <div className="absolute w-[1920px] h-[2408px] top-0 left-0 bg-white">
            <div className="absolute w-[580px] h-[50px] top-[118px] left-[144px]">
              <div className="relative w-[578px] h-[50px]">
                <div className="absolute w-[455px] top-0 left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[48px] tracking-[0] leading-[50.4px]">
                  A Sneak Peek into
                </div>
                <img
                  className="absolute w-[132px] h-[44px] top-0 left-[446px] object-cover"
                  alt="Image"
                  src="/images/logo/EDUO_LOGO.png"
                />
              </div>
            </div>
            <div className="absolute w-[1920px] h-[1840px] top-[568px] left-0 bg-[url(/images/hero/Background2.png)] bg-cover bg-[50%_50%]">
              <div className="absolute w-[383px] h-[152px] top-[1462px] left-[346px]">
                <div className="absolute top-0 left-[60px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[24px] tracking-[0] leading-[32px] whitespace-nowrap">
                  For Administrators
                </div>
                <p className="absolute top-[44px] left-[42px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#cccccc] text-[20px] tracking-[0] leading-[36px]">
                  Faculty and student database
                  <br />
                  Administrative documents
                  <br />
                  Scheduling
                  <br />
                  Automated transcripts
                </p>
                <img
                   className="!absolute !w-[40px] !h-[40px] !top-0 !left-0"
                  alt="Image"
                  src="/images/hero/Book_check.png"
                />
                {/* <BookCheck className="!absolute !w-[40px] !h-[40px] !top-0 !left-0" /> */}
              </div>
              <div className="absolute w-[383px] h-[152px] top-[1462px] left-[769px]">
                <div className="absolute top-0 left-[56px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[24px] tracking-[0] leading-[32px] whitespace-nowrap">
                  For Teachers
                </div>
                <p className="absolute top-[44px] left-[42px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#cccccc] text-[20px] tracking-[0] leading-[36px]">
                  Faculty and student database
                  <br />
                  Administrative documents
                  <br />
                  Scheduling
                  <br />
                  Automated transcripts
                </p>
                <img
                  className="!absolute !w-[40px] !h-[40px] !top-0 !left-0"
                  alt="Image"
                  src="/images/hero/Sertificate.png"
                />
                {/* <Sertificate className="!absolute !w-[40px] !h-[40px] !top-0 !left-0" /> */}
              </div>
              <div className="absolute w-[383px] h-[152px] top-[1462px] left-[1192px]">
                <div className="absolute top-0 left-[56px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[24px] tracking-[0] leading-[32px] whitespace-nowrap">
                  For Students
                </div>
                <p className="absolute top-[44px] left-[42px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#cccccc] text-[20px] tracking-[0] leading-[36px]">
                  Faculty and student database
                  <br />
                  Administrative documents
                  <br />
                  Scheduling
                  <br />
                  Automated transcripts
                </p>
                <img
                   className="!absolute !w-[40px] !h-[40px] !top-0 !left-0"
                  alt="Image"
                  src="/images/hero/Group.png"
                />
                {/* <Group
                  className="!absolute !left-0 !top-0"
                  ellipse="ellipse-47-2.svg"
                  ellipseClassName="!border-[unset]"
                  img="ellipse-48-2.svg"
                  rectangle="rectangle-4160-2.svg"
                  subtract="subtract-2.svg"
                  subtract1="subtract-3.svg"
                /> */}
              </div>
              <div className="absolute top-[1242px] left-[822px] [font-family:'Poppins-Black',Helvetica] font-black text-white text-[48px] text-center tracking-[0] leading-[58px] whitespace-nowrap">
                Why Eduo?
              </div>
              <p className="absolute top-[1312px] left-[587px] [font-family:'Poppins-Black',Helvetica] font-black text-white text-[32px] text-center tracking-[0] leading-[58px] whitespace-nowrap">
                We provide the solution to all your problems.
              </p>
              <div onClick={() => {setOpen(true)}}  className="cursor-pointer absolute w-[940px] h-[540px] top-[542px] left-[490px] bg-[url(/images/hero/image23.png)] bg-[100%_100%]">
                <img className="  absolute w-[242px] h-[242px] top-[171px] left-[349px]" alt="Button" src="/images/hero/Button.png" />
              </div>
              <img
                
                className="absolute w-[160px] h-px top-[1160px] left-[880px]" 
                alt="Button play"
                src="images/hero/Line.png"
              />
              {/* <img className="absolute w-[160px] h-px top-[1160px] left-[880px]" alt="Line" src="line-8.svg" /> */}
              <div className="absolute w-[317px] top-[1744px] left-[855px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[32px] tracking-[0] leading-[normal]">
                ...and more!
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-[940px] items-center justify-center gap-[36px] p-[40px] absolute top-[278px] left-[490px] bg-white rounded-[20px] overflow-hidden shadow-[0px_0px_9px_2px_#0000000d]">
            <img className="relative w-[848px] h-[608px] mt-[-4.00px] object-cover" alt="Cas" src="/images/hero/CAS.png" />
            <div className="relative w-[473px] h-[48px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[32px] tracking-[0] leading-[normal]">
              Collegiate Academy of Seoul
            </div>
            <div className="relative w-[146px] h-[36px]">
              <div className="relative w-[144px] h-[36px] bg-white rounded-[20px] border-2 border-solid border-black flex items-center justify-center">
                <div className="absolute[font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[18px] tracking-[0] leading-[normal]">
                  View Work
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[1923px] h-[1670px] top-[5230px] left-0">
          <div className="absolute w-[1922px] h-[1380px] top-0 left-px">
            <div className="relative h-[1382px] -top-px -left-px bg-[#f0f0f0]">
          <div className="absolute top-[91px] left-[241px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[48px] tracking-[0] leading-[normal]">
            Success Stories
          </div>
          <img
            className="top-[211px] left-[396px] absolute w-[200px] h-[160px] object-cover"
            alt="Img"
            src="images/hero/start.png"
          />
          <img
            className="top-[721px] left-[1421px] absolute w-[200px] h-[160px] object-cover"
            alt="Img"
            src="images/hero/end.png"
          />
          <div className="absolute w-[1044px] h-[316px] top-[291px] left-[640px]">
            <div className="relative w-[1040px] h-[316px]">
              <p className="absolute w-[1040px] top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[40px] tracking-[-0.80px] leading-[64px]">
                Eduo is one of the best tools I’ve utilized to teach my classes. It helps me to focus on what really
                matters for my students.
              </p>
              <p className="absolute w-[888px] top-[230px] left-[129px] [font-family:'Poppins-Bold',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
                <span className="font-bold">
                  Alexa
                  <br />
                </span>
                <span className="[font-family:'Poppins-Medium',Helvetica] font-medium">
                  Teacher at Collegiate Academy of Seoul
                </span>
              </p>
              <div className="absolute w-[100px] h-[100px] top-[216px] left-0 bg-[#d9d9d9] rounded-[50px]" />
            </div>
          </div>
          <div className="absolute w-[1048px] h-[382px] top-[766px] left-[368px]">
            <p className="absolute w-[1041px] top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[40px] tracking-[-0.80px] leading-[64px]">
              Eduo is easy to navigate even for those who are not used to using these tools. It helped our school become
              digitized and efficient by optimizing administrative tasks.
            </p>
            <p className="absolute w-[910px] top-[296px] left-[134px] [font-family:'Poppins-Bold',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
              <span className="font-bold">
                Tim
                <br />
              </span>
              <span className="[font-family:'Poppins-Medium',Helvetica] font-medium">
                Principal at Azabu Christian Academy
              </span>
            </p>
            <div className="absolute w-[100px] h-[100px] top-[282px] left-0 bg-[#d9d9d9] rounded-[50.05px/50px]" />
          </div>
        </div>
          </div>
          <div className="absolute w-[1920px] h-[460px] top-[1290px] left-0">
            <div className="absolute w-[1922px] h-[360px] top-[100px] left-0">
              <div className="relative w-[1920px] h-[360px] bg-white">
                <img
                  className="absolute w-[228px] h-[76px] top-[80px] left-[165px] object-cover"
                  alt="Image"
                  src="/images/logo/EDUO_LOGO.png"
                />
                <p className="absolute top-[180px] left-[166px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
                  Copyright © 2024 Eduo Learning
                  <br />
                  All Rights Reserved.
                </p>
                <div className="absolute w-[233px] h-[211px] top-[111px] left-[1067px]">
                  <p className="absolute w-[229px] top-[69px] left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
                    12, Dogok-ro 2-gil, Gangnam-gu, Seoul, Republic of Korea
                  </p>
                  <div className="absolute w-[113px] top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0] leading-[normal]">
                    Address
                  </div>
                </div>
                <div className="absolute w-[233px] h-[165px] top-[111px] left-[1307px]">
                  <div className="absolute w-[81px] top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0] leading-[normal]">
                    Office
                  </div>
                  <p className="absolute w-[229px] top-[69px] left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
                    Monday - Friday
                    <br />
                    9AM - 6PM
                  </p>
                </div>
                <div className="absolute w-[233px] h-[165px] top-[111px] left-[1547px]">
                  <p className="absolute w-[229px] top-[69px] left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
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
                  <div className="absolute w-[112px] top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0] leading-[normal]">
                    Contact
                  </div>
                </div>
              </div>
            </div>
            <img className="absolute w-[1920px] h-[100px] top-0 left-0" alt="Wave" src="/images/hero/wave2.png" />
          </div>
        </div>
      </div>
    </div> 
    
  );
};

export default Hero;

// import React from "react";
// import { BookCheck } from "./BookCheck";
// import { Group } from "./Group";
// import { Saly } from "./Saly";
// import { Sertificate } from "./Sertificate";

// export const EduoWebLanding = (): JSX.Element => {
//   return (
    
//   );
// };

