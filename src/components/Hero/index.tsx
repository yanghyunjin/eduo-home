"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";

// import images to use 'Image' tag
import Hero1 from "/public/images/hero/hero1.png";
import Done_all_alt_round_fill from "/public/images/hero/Done_all_alt_round_fill.png";
import Client1 from "/public/images/hero/client1.png";
import Client2 from "/public/images/hero/client2.png";
import Client3 from "/public/images/hero/client3.png";
import Client4 from "/public/images/hero/client4.png";
import Client5 from "/public/images/hero/client5.png";
import Client6 from "/public/images/hero/client6.png";
import Client7 from "/public/images/hero/client7.png";
import Saly_1 from "/public/images/hero/saly_1.png";
import Saly_2 from "/public/images/hero/saly_2.png";
import Saly_3 from "/public/images/hero/saly_3.png";
import EDUO_LOGO from "/public/images/logo/EDUO_LOGO.png";
import Book_check from "/public/images/hero/Book_check.png";
import Certificate from "/public/images/hero/Certificate.png";
import Group from "/public/images/hero/Group.png";
import Button from "/public/images/hero/Button.png";
import Line from "/public/images/hero/Line.png";
import CAS from "/public/images/hero/CAS.png";
import Start from "/public/images/hero/start.png";
import End from "/public/images/hero/end.png";
import User1 from "/public/images/hero/user1.png";
import User2 from "/public/images/hero/user2.png";
import Wave2 from "/public/images/hero/wave_2.png";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex w-full flex-nowrap justify-center overflow-x-auto bg-white">
      <ModalVideo
        channel="custom"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        url="https://transcoded-edu-video.s3.ap-northeast-2.amazonaws.com/EDUO.mp4"
        // videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
      <div className="relative h-[7460px] w-screen overflow-hidden overflow-x-auto bg-white">
        {/* Section #1 */}
        <div className="absolute inset-0 top-[-265px] h-[1150px] w-[1920px] xl:top-[-350px]">
          <div className="relative top-[350px] flex h-[1000px] w-screen flex-col bg-[url(/images/hero/Background.png)] bg-cover bg-center bg-no-repeat xl:h-[800px] xl:bg-[100%_100%]">
            <div className="inset-0 flex flex-col items-center justify-center">
              <Image
                className="absolute top-[440px] top-[506px] h-[447px] w-[409.5px] object-cover object-center xl:left-[60%] xl:top-[206px] 2xl:left-[55%] 2xl:top-[106px] 2xl:h-[596px] 2xl:w-[546px] 3xl:left-[65%]"
                alt="Schoolgirl online"
                src={Hero1}
              />
              <div className="top-[60px] flex h-[372px] h-[500px] w-[1000px] flex-col items-center justify-center xl:absolute xl:left-[10%] xl:top-[256px]">
                <p className="left-0 w-[600px] text-[60px] font-normal leading-[60px] text-white [font-family:Poppins] md:w-[700px] xl:absolute xl:top-[28px] xl:w-[600px] 3xl:w-[1000px]">
                  <span className="font-semibold leading-[68px] tracking-[-1.20px]">
                    Transform your school with Eduo: <br />
                  </span>
                  <span className="text-[32px] font-medium leading-[32px] tracking-[-0.32px] [font-family:'Poppins']">
                    a single solution designed to streamline administrative
                    processes and enhance learning outcomes
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section #2 */}
        <div className="absolute left-0 top-[1100px] h-[800px] w-[1920px] xl:top-[800px]">
          <div className="relative inset-0 flex h-[200px] w-screen flex-col items-center justify-center bg-white">
            <div className="absolute top-[60px]">
              <p className=" left-[416px] top-[132px] w-[590px] text-center text-[40px] font-medium leading-[65px] tracking-[-1.00px] text-black [font-family:'Poppins'] md:w-[720px] xl:w-[1000px] 2xl:w-[1100px]">
                Empower your educators and inspire your students with our
                all-in-one education platform
              </p>
            </div>

            <div className="absolute top-[300px]">
              <div className="flex flex-col space-y-3 lg:flex-row lg:space-x-10">
                <div className="flex flex-col space-y-3">
                  <div className="flex flex-row items-center justify-center space-x-5">
                    <Image
                      className="h-[44px] w-[40px]"
                      alt="Done all alt round"
                      src={Done_all_alt_round_fill}
                    />
                    <div className="[font-family:'Poppins']]  w-[340px] text-[20px] font-medium leading-[32px] tracking-[0] text-black">
                      Access anytime, anywhere
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center space-x-5">
                    <Image
                      className="h-[44px] w-[40px]"
                      alt="Done all alt round"
                      src={Done_all_alt_round_fill}
                    />
                    <div className="[font-family:'Poppins']]  w-[340px] text-[20px] font-medium leading-[32px] tracking-[0] text-black">
                      Regular updates
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center space-x-5">
                    <Image
                      className="h-[44px] w-[40px]"
                      alt="Done all alt round"
                      src={Done_all_alt_round_fill}
                    />
                    <div className="[font-family:'Poppins']]  w-[340px] text-[20px] font-medium leading-[32px] tracking-[0] text-black">
                      Strong STEM, AP curriculum
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center space-x-5">
                    <Image
                      className="h-[44px] w-[40px]"
                      alt="Done all alt round"
                      src={Done_all_alt_round_fill}
                    />
                    <div className="[font-family:'Poppins']] w-[340px] text-[20px] font-medium leading-[32px] tracking-[0] text-black">
                      Distinct features for administrators, teachers, students,
                      and parents
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <div className="flex flex-row items-center justify-center space-x-5">
                    <Image
                      className="h-[44px] w-[40px]"
                      alt="Done all alt round"
                      src={Done_all_alt_round_fill}
                    />
                    <div className="[font-family:'Poppins']] w-[340px] text-[20px] font-medium leading-[32px] tracking-[0] text-black">
                      Intuitive and easy to use
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center space-x-5">
                    <Image
                      className="h-[44px] w-[40px]"
                      alt="Done all alt round"
                      src={Done_all_alt_round_fill}
                    />
                    <div className="[font-family:'Poppins']] w-[340px] text-[20px] font-medium leading-[32px] tracking-[0] text-black">
                      Affordable
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center space-x-5">
                    <Image
                      className="h-[44px] w-[40px]"
                      alt="Done all alt round"
                      src={Done_all_alt_round_fill}
                    />
                    <div className="[font-family:'Poppins']] w-[340px] text-[20px] font-medium leading-[32px] tracking-[0] text-black">
                      Made by teachers
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center space-x-5">
                    <Image
                      className="h-[44px] w-[40px]"
                      alt="Done all alt round"
                      src={Done_all_alt_round_fill}
                    />
                    <div className="[font-family:'Poppins']] w-[340px] text-[20px] font-medium leading-[32px] tracking-[0] text-black">
                      K-Education touches
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section #3 */}
        <div className="absolute left-0 top-[5252px] h-[460px] w-[1920px] bg-white">
          <div className="relative left-[240px] top-[107px] flex h-[244px] w-[1440px] flex-col items-center gap-[64px] px-[144px] py-0">
            <div className="relative flex w-[1110px] flex-[0_0_auto] flex-col items-center gap-[8px]">
              <div className="relative mt-[-1.00px] self-stretch text-center text-[48px] font-semibold leading-[44px] tracking-[0] text-black [font-family:'Poppins']">
                Our Clients
              </div>
            </div>
            <div className="relative ml-[-144.00px] mr-[-144.00px] h-[117.46px] w-[1440px]">
              <Image
                className="absolute left-0 top-0 h-[117px] w-[117px]"
                alt="Image"
                src={Client1}
              />
              <Image
                className="absolute left-[155px] top-[32px] h-[54px] w-[174px]"
                alt="Image"
                src={Client2}
              />
              <Image
                className="absolute left-[366px] top-0 h-[117px] w-[117px]"
                alt="Image"
                src={Client3}
              />
              <Image
                className="absolute left-[522px] top-0 h-[117px] w-[155px] object-cover"
                alt="Image"
                src={Client4}
              />
              <Image
                className="absolute left-[714px] top-0 h-[117px] w-[148px] object-cover"
                alt="Image"
                src={Client5}
              />
              <Image
                className="absolute left-[1130px] top-[32px] h-[54px] w-[310px]"
                alt="Image"
                src={Client6}
              />
              <Image
                className="absolute left-[900px] top-[32px] h-[54px] w-[193px] object-cover"
                alt="Image"
                src={Client7}
              />
            </div>
          </div>
        </div>

        {/* Section #4 */}
        <div className="no-scrollbar absolute left-0 top-[2100px] h-[762px] w-screen overflow-x-auto bg-[#f6f4ff] lg:top-[1800px] xl:top-[1500px]">
          <div className="absolute top-[60px] flex w-screen flex-col items-center justify-center overflow-hidden ">
            <div className="text-center text-[48px] font-semibold leading-[44px] tracking-[0] text-black [font-family:'Poppins']">
              Our Services <br />
              <br />
              <p className="top-[100px] w-[736px] text-center text-[20px] font-normal leading-[30px] tracking-[0] text-black [font-family:'Poppins']">
                Eduo was founded with the purpose of providing an integrated
                platform
                <br /> to complement schools in their operations and classroom
                management.
              </p>
            </div>
          </div>
          <div className="absolute top-[250px] w-[1280px] xl:w-screen">
            <div className="flex h-[440px] w-full flex-row items-center justify-center overflow-hidden">
              <div className="flex w-[400px] items-center justify-center rounded-[20px]">
                <div className="flex h-[442px] w-[362px] flex-col items-center justify-center space-y-12 rounded-[20px] bg-white">
                  <Image
                    className="m-11 h-[108px] w-[200px] object-cover"
                    alt="Saly"
                    src={Saly_1}
                  />
                  <div className="text-center text-[24px] font-medium leading-[normal] tracking-[0] text-black [font-family:'Poppins']">
                    SIS
                    <p className="text-center text-[16px] font-normal leading-[30px] tracking-[0] text-black [font-family:'Poppins']">
                      Essential tools for efficient school
                      <br /> operations at your fingertips
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-[400px] items-center justify-center rounded-[20px]">
                <div className="flex h-[442px] w-[362px] flex-col items-center justify-center space-y-12 rounded-[20px] bg-white">
                  <Image
                    className="h-[200px] w-[160px] object-cover"
                    alt="Saly"
                    src={Saly_3}
                  />
                  <div className="text-center text-[24px] font-medium leading-[normal] tracking-[0] text-black [font-family:'Poppins']">
                    LMS
                    <p className="text-center text-[16px] font-normal leading-[30px] tracking-[0] text-black [font-family:'Poppins']">
                      Accredited courses prepared and
                      <br /> taught by qualified instructors
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex w-[400px] items-center justify-center rounded-[20px]">
                <div className="flex h-[442px] w-[362px] flex-col items-center justify-center space-y-12 rounded-[20px] bg-white">
                  <Image
                    className="h-[200px] w-[200px] object-cover"
                    alt="Saly"
                    src={Saly_2}
                  />
                  <div className="text-center text-[24px] font-medium leading-[normal] tracking-[0] text-black [font-family:'Poppins']">
                    LMS
                    <p className="text-center text-[16px] font-normal leading-[30px] tracking-[0] text-black [font-family:'Poppins']">
                      Systematic counseling support through accumulated
                      admissions data
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section #5 */}
        {/* <div className="absolute left-0 top-[2400px] h-[2890px] w-[1920px] top-[2862px]"> */}
        <div className="absolute top-[2950px] z-10 h-[360px] w-[1920px] space-y-16 bg-white lg:top-[2600px] xl:top-[2350px]">
          <div className="flex w-screen items-center justify-center lg:ml-32 lg:justify-start">
            <div className="h-[50px] w-[580px]">
              <div className="relative h-[50px] w-[578px]">
                <div className="absolute left-0 top-0 w-[455px] text-[48px] font-semibold leading-[50.4px] tracking-[0] text-black [font-family:'Poppins']">
                  A Sneak Peek into
                </div>
                <Image
                  className="absolute left-[446px] top-0 h-[44px] w-[132px] object-cover"
                  alt="Image"
                  src={EDUO_LOGO}
                />
              </div>
            </div>
          </div>
          <div className="flex w-screen items-center justify-center">
            <div className="flex w-[600px] flex-wrap items-center justify-center gap-[36px] overflow-hidden rounded-[20px] bg-white p-[40px] shadow-[0px_0px_9px_2px_#0000000d] lg:w-[940px]">
              <Image
                className="relative mt-[-4.00px] h-[365px] w-[508px] object-cover lg:h-[608px] lg:w-[848px]"
                alt="Cas"
                src={CAS}
              />
              <div className="relative h-[48px] w-[473px] text-[32px] font-semibold leading-[normal] tracking-[0] text-black [font-family:'Poppins']">
                Collegiate Academy of Seoul
              </div>
            </div>
          </div>

          <div className="flex w-screen items-center justify-center">
            <div
              onClick={() => {
                setOpen(true);
              }}
              className="h-[335px] w-[600px] cursor-pointer rounded-[20px] bg-[url(/images/hero/image23.png)] bg-cover bg-[50%_50%] lg:h-[540px] lg:w-[940px]"
            >
              <div className="mt-24 flex items-center justify-center lg:mt-32">
                <Image
                  className="flex h-[170px] w-[170px] lg:h-[242px] lg:w-[242px]"
                  alt="Button"
                  src={Button}
                />
              </div>
            </div>
          </div>
          <div className="flex w-screen flex-col items-center justify-center space-y-5">
            <div className="whitespace-nowrap text-center text-[48px] font-extrabold leading-[58px] tracking-[0] text-white [font-family:'Poppins']">
              Why Eduo?
            </div>
            <p className="whitespace-nowrap text-center text-[32px] font-semibold leading-[58px] tracking-[0] text-white [font-family:'Poppins']">
              We provide the solution to all your problems.
            </p>
          </div>
          <div className="flex w-screen flex-col items-center justify-center space-y-5">
            <div className="flex">
              <Image className="h-px w-[160px]" alt="Button play" src={Line} />
            </div>
          </div>
          <div className="flex w-screen items-center justify-center">
            <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0">
              <div className="flex flex-col space-y-10">
                <div className="flex flex-col space-y-3">
                  <div className="ml-16 flex flex-row space-x-5">
                    <Image className="flex" alt="Image" src={Book_check} />

                    <div className="flex whitespace-nowrap text-[24px] font-bold leading-[32px] tracking-[0] text-white [font-family:'Poppins']">
                      For Administrators
                    </div>
                  </div>

                  <div className="flex">
                    <p className="ml-32 text-[20px] font-semibold leading-[36px] tracking-[0] text-[#cccccc] [font-family:'Poppins']">
                      • Faculty and student database
                      <br />
                      • Administrative documents
                      <br />
                      • Scheduling
                      <br />• Automated transcripts
                    </p>
                  </div>
                </div>
                <div className="flex flex-col space-y-3">
                  <div className="ml-16 flex flex-row space-x-5">
                    <Image className="flex" alt="Image" src={Book_check} />

                    <div className="flex whitespace-nowrap text-[24px] font-bold leading-[32px] tracking-[0] text-white [font-family:'Poppins']">
                      For Teachers
                    </div>
                  </div>

                  <div className="flex">
                    <p className="ml-32 text-[20px] font-semibold leading-[36px] tracking-[0] text-[#cccccc] [font-family:'Poppins']">
                      • Lesson planning support
                      <br />
                      • Tracking student progress
                      <br />
                      • Question generator
                      <br />• Attendance management
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-10">
                <div className="flex flex-col space-y-3">
                  <div className="ml-16 flex flex-row space-x-5">
                    <Image className="flex" alt="Image" src={Book_check} />

                    <div className="flex whitespace-nowrap text-[24px] font-bold leading-[32px] tracking-[0] text-white [font-family:'Poppins']">
                      For Students
                    </div>
                  </div>

                  <div className="flex">
                    <p className="ml-32 text-[20px] font-semibold leading-[36px] tracking-[0] text-[#cccccc] [font-family:'Poppins']">
                      • Comprehensive workspace
                      <br />
                      • Discussion board
                      <br />
                      • Video lectures with distraction prevention
                      <br />• College &amp; career counseling
                    </p>
                  </div>
                </div>
                <div className="flex flex-col space-y-3">
                  <div className="ml-16 flex flex-row space-x-5">
                    <Image className="flex" alt="Image" src={Book_check} />

                    <div className="flex whitespace-nowrap text-[24px] font-bold leading-[32px] tracking-[0] text-white [font-family:'Poppins']">
                      For Parents
                    </div>
                  </div>

                  <div className="flex">
                    <p className="ml-32 text-[20px] font-semibold leading-[36px] tracking-[0] text-[#cccccc] [font-family:'Poppins']">
                      • Check tuition and invoice <br />
                      • View grades and homework <br />
                      • Monitor attendance and discipline <br />• Access
                      calendar and other resources
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-screen items-center justify-center">
            <div className="w-[317px] text-center text-[32px] font-semibold leading-[normal] tracking-[0] text-white [font-family:'Poppins']">
              ...and more!
            </div>
          </div>
        </div>
        <div className="absolute top-[3350px] z-0 h-[2150px] w-screen bg-[url(/images/hero/Background2.png)] bg-cover bg-[50%_50%] bg-top lg:top-[3150px] lg:h-[1850px] xl:top-[2950px] " />

        {/* Section #6 */}
        <div className="absolute left-0 top-[5712px] h-[1748px] w-[1922px]">
          <div className="absolute left-0 top-0 h-[1380px] w-[1922px]">
            <div className="relative -left-px -top-px h-[1382px] bg-[#f0f0f0]">
              <div className="absolute left-[242px] top-[91px] w-[380px] text-[48px] font-semibold leading-[normal] tracking-[0] text-black [font-family:'Poppins']">
                Success Stories
              </div>
              <Image
                className="absolute left-[397px] top-[231px] h-[160px] w-[200px] object-cover"
                alt="Img"
                src={Start}
              />
              <Image
                className="absolute left-[1421px] top-[721px] h-[160px] w-[200px] object-cover"
                alt="Img"
                src={End}
              />
              <div className="absolute left-[641px] top-[311px] h-[316px] w-[1042px]">
                <div className="relative h-[316px] w-[1040px]">
                  <p className="absolute left-0 top-0 w-[1040px] text-[40px] font-medium leading-[64px] tracking-[-0.80px] text-black [font-family:'Poppins']">
                    Eduo is one of the best tools I’ve utilized to teach my
                    classes. It helps me to focus on what really matters for my
                    students.
                  </p>
                  <div className="absolute left-0 top-[216px] h-[100px] w-[1018px]">
                    <p className="absolute left-[128px] top-[14px] w-[888px] text-[24px] font-normal leading-[normal] tracking-[0] text-black [font-family:'Poppins']">
                      <span className="font-bold">
                        Alexa
                        <br />
                      </span>
                      <span className="font-medium [font-family:'Poppins']">
                        Teacher at Collegiate Academy of Seoul
                      </span>
                    </p>
                    <div className="absolute left-0 top-0 inline-flex flex-col items-center justify-center gap-[10px]">
                      <div className="relative h-[100px] w-[100.1px] rounded-[50.05px/50px] bg-[#d9d9d9]" />
                      <Image
                        className="absolute left-0 top-0 h-[100px] w-[100px] object-cover"
                        alt="Element"
                        src={User1}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-[369px] top-[765px] h-[383px] w-[1048px]">
                <p className="absolute left-0 top-0 w-[1040px] text-[40px] font-medium leading-[64px] tracking-[-0.80px] text-black [font-family:'Poppins']">
                  Eduo is easy to navigate even for those who are
                  <br /> new to digital tools. It helped our school maximize
                  efficiency by digitizing records and optimizing administrative
                  tasks.
                </p>
                <p className="absolute left-[134px] top-[297px] w-[910px] text-[24px] font-normal leading-[normal] tracking-[0] text-black [font-family:'Poppins']">
                  <span className="font-bold">
                    Tim
                    <br />
                  </span>
                  <span className="font-medium [font-family:'Poppins']">
                    Principal at Azabu Christian Academy
                  </span>
                </p>
                <Image
                  className="absolute left-0 top-[283px] h-[100px] w-[100px]"
                  alt="Mask group"
                  src={User2}
                />
              </div>
            </div>
          </div>
          <div className="absolute left-0 top-[1288px] h-[460px] w-[1920px]">
            <div className="absolute left-0 top-[100px] h-[360px] w-[1922px]">
              <div className="relative h-[360px] w-[1920px] bg-white">
                <Image
                  className="absolute left-[165px] top-[80px] h-[76px] w-[228px] object-cover"
                  alt="Image"
                  src={EDUO_LOGO}
                />
                <p className="absolute left-[166px] top-[180px] text-[16px] font-normal leading-[normal] tracking-[0] text-black [font-family:'Poppins']">
                  Copyright © 2024 Eduo Learning
                  <br />
                  All Rights Reserved.
                </p>
                <div className="absolute left-[1067px] top-[111px] h-[211px] w-[233px]">
                  <p className="absolute left-0 top-[69px] w-[229px] text-[16px] font-normal leading-[normal] tracking-[0] text-black [font-family:'Poppins']">
                    12, Dogok-ro 2-gil, Gangnam-gu, Seoul, Republic of Korea
                  </p>
                  <div className="absolute left-0 top-0 w-[113px] text-[24px] font-medium leading-[normal] tracking-[0] text-black [font-family:'Poppins']">
                    Address
                  </div>
                </div>
                <div className="absolute left-[1307px] top-[111px] h-[165px] w-[233px]">
                  <div className="absolute left-0 top-0 w-[81px] text-[24px] font-medium leading-[normal] tracking-[0] text-black [font-family:'Poppins']">
                    Office
                  </div>
                  <p className="absolute left-0 top-[69px] w-[229px] text-[16px] font-normal leading-[normal] tracking-[0] text-black [font-family:'Poppins']">
                    Monday - Friday
                    <br />
                    9AM - 6PM
                  </p>
                </div>
                <div className="absolute left-[1547px] top-[111px] h-[165px] w-[233px]">
                  <p className="absolute left-0 top-[69px] w-[229px] text-[16px] font-normal leading-[normal] tracking-[0] text-black [font-family:'Poppins']">
                    <span className="text-[16px] font-normal tracking-[0] text-black [font-family:'Poppins']">
                      +82 0507-1493-7931
                    </span>
                    <a
                      href="https://pcmap.place.naver.com/place/1592159038/home?from=map&amp;fromPanelNum=1&amp;timestamp=202404142150#"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="underline"> </span>
                    </a>
                    <span className="text-[16px] font-normal tracking-[0] text-black [font-family:'Poppins']">
                      admin@casseoul.org
                    </span>
                  </p>
                  <div className="absolute left-0 top-0 w-[112px] text-[24px] font-medium leading-[normal] tracking-[0] text-black [font-family:'Poppins']">
                    Contact
                  </div>
                </div>
              </div>
            </div>
            <Image
              className="absolute left-0 top-0 h-[100px] w-[1920px]"
              alt="Wave"
              src={Wave2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
