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
    <div className="flex w-screen flex-nowrap justify-center bg-white">
      <ModalVideo
        channel="custom"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        url="https://transcoded-edu-video.s3.ap-northeast-2.amazonaws.com/EDUO.mp4"
        // videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
      <div className="relative h-[6020px] w-screen flex-col overflow-hidden bg-white sm:h-[8200px] lg:h-[7400px] xl:h-[6900px]">
        {/* Section #1 */}
        <div className="absolute inset-0 top-[-275px] h-[1150px] w-screen xl:top-[-350px]">
          <div className="relative top-[350px] flex h-[700px] w-screen flex-col bg-[url(/images/hero/Background.png)] bg-cover bg-center bg-no-repeat sm:h-[1000px] xl:h-[800px] xl:bg-[100%_100%]">
            <div className="inset-0 flex flex-col items-center justify-center">
              <Image
                className="absolute top-[270px] w-[309.5px] object-cover object-center sm:top-[440px] sm:h-[447px] sm:w-[409.5px] xl:left-[60%] xl:top-[206px] 2xl:left-[55%] 2xl:top-[106px] 2xl:h-[596px] 2xl:w-[546px] 3xl:left-[65%]"
                alt="Schoolgirl online"
                src={Hero1}
              />

              <div className="top-[60px] flex h-[300px] h-[372px] flex-col items-center justify-center sm:h-[500px] sm:w-[1000px] xl:absolute xl:left-[10%] xl:top-[256px]">
                <p className="ml-2 mr-2 items-center justify-center text-center text-[35px] font-normal leading-[35px] text-white [font-family:Poppins] sm:ml-0 sm:mr-0 sm:w-[600px] sm:text-left sm:text-[60px] sm:leading-[60px] md:w-[700px] xl:absolute xl:top-[28px] xl:w-[600px] 3xl:w-[1000px]">
                  <span className="font-semibold leading-[68px] tracking-[-1.20px]">
                    Transform your school with Eduo: <br />
                  </span>
                  <span className="text-[20px] font-medium tracking-[-0.32px] [font-family:'Poppins'] sm:text-[20px]  sm:text-[32px] sm:leading-[32px]">
                    a single solution designed to streamline administrative
                    processes and enhance learning outcomes
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section #2 */}
        <div className="absolute top-[750px] h-[800px] w-screen sm:top-[1100px] xl:top-[800px]">
          <div className="relative inset-0 flex h-[200px] w-screen flex-col items-center justify-center bg-white">
            <div className="absolute top-[60px]">
              <p className=" left-[416px] top-[132px] w-screen text-center text-[25px] font-medium leading-[65px] tracking-[-1.00px] text-black [font-family:'Poppins'] sm:w-[590px] sm:text-[40px] md:w-[720px] xl:w-[1000px] 2xl:w-[1100px]">
                Empower your educators and inspire your students with our
                all-in-one education platform
              </p>
            </div>

            <div className="absolute top-[300px]">
              <div className="flex flex-col space-y-3 lg:flex-row lg:space-x-10">
                <div className="flex flex-col items-center space-y-3">
                  <div className="flex flex-row items-center justify-center space-x-5">
                    <Image
                      className="ml-[13%] h-[44px] w-[40px]"
                      alt="Done all alt round"
                      src={Done_all_alt_round_fill}
                    />
                    <div className="[font-family:'Poppins']] w-[340px] text-[15px] font-medium leading-[32px] tracking-[0] text-black sm:text-[20px]">
                      Access anytime, anywhere
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center space-x-5">
                    <Image
                      className="ml-[13%] h-[44px] w-[40px]"
                      alt="Done all alt round"
                      src={Done_all_alt_round_fill}
                    />
                    <div className="[font-family:'Poppins']] w-[340px] text-[15px] font-medium leading-[32px] tracking-[0] text-black sm:text-[20px]">
                      Regular updates
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center space-x-5">
                    <Image
                      className="ml-[13%] h-[44px] w-[40px]"
                      alt="Done all alt round"
                      src={Done_all_alt_round_fill}
                    />
                    <div className="[font-family:'Poppins']]  w-[340px] text-[15px] font-medium leading-[32px] tracking-[0] text-black sm:text-[20px]">
                      Strong STEM, AP curriculum
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center space-x-5">
                    <Image
                      className="ml-[13%] h-[44px] w-[40px]"
                      alt="Done all alt round"
                      src={Done_all_alt_round_fill}
                    />
                    <div className="[font-family:'Poppins']] w-[340px] text-[15px] font-medium leading-[32px] tracking-[0] text-black sm:text-[20px]">
                      K-Education touches
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <div className="flex flex-row items-center justify-center space-x-5">
                    <Image
                      className="ml-[13%] h-[44px] w-[40px]"
                      alt="Done all alt round"
                      src={Done_all_alt_round_fill}
                    />
                    <div className="[font-family:'Poppins']] w-[340px] text-[15px] font-medium leading-[32px] tracking-[0] text-black sm:text-[20px]">
                      Intuitive and easy to use
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center space-x-5">
                    <Image
                      className="ml-[13%] h-[44px] w-[40px]"
                      alt="Done all alt round"
                      src={Done_all_alt_round_fill}
                    />
                    <div className="[font-family:'Poppins']] w-[340px] text-[15px] font-medium leading-[32px] tracking-[0] text-black sm:text-[20px]">
                      Affordable
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center space-x-5">
                    <Image
                      className="ml-[13%] h-[44px] w-[40px]"
                      alt="Done all alt round"
                      src={Done_all_alt_round_fill}
                    />
                    <div className="[font-family:'Poppins']] w-[340px] text-[15px] font-medium leading-[32px] tracking-[0] text-black sm:text-[20px]">
                      Made by teachers
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center space-x-5">
                    <Image
                      className="ml-[13%] h-[44px] w-[40px]"
                      alt="Done all alt round"
                      src={Done_all_alt_round_fill}
                    />
                    <div className="[font-family:'Poppins']] w-[340px] text-[15px] font-medium leading-[32px] tracking-[0] text-black sm:text-[20px]">
                      Distinct features for administrators, teachers, students,
                      and parents
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section #3 */}
        <div className="absolute top-[4300px] h-[460px] w-screen bg-white sm:top-[5500px] lg:top-[5100px] xl:top-[4800px]">
          <div className="absolute top-[60px] flex w-screen flex-col items-center justify-center">
            <div className="relative flex w-[1110px] flex-[0_0_auto] flex-col items-center gap-[8px]">
              <div className="relative mt-[-1.00px] self-stretch text-center text-[48px] font-semibold leading-[44px] tracking-[0] text-black [font-family:'Poppins']">
                Our Clients
              </div>
            </div>
          </div>

          <div className="no-scrollbar absolute top-[180px] ml-10 mr-10 flex flex-row items-center space-x-8 overflow-x-auto sm:ml-0 sm:mr-0 sm:w-full sm:space-x-2 xl:w-full xl:justify-center">
            <Image
              className="flex h-[117px] w-[117px]"
              alt="Image"
              src={Client1}
            />
            <Image
              className="flex h-[054px] w-[174px]"
              alt="Image"
              src={Client2}
            />
            <Image
              className="flex h-[117px] w-[117px]"
              alt="Image"
              src={Client3}
            />
            <Image
              className="flex h-[117px] w-[155px]"
              alt="Image"
              src={Client4}
            />
            <Image
              className="flex h-[117px] w-[148px]"
              alt="Image"
              src={Client5}
            />
          </div>
        </div>

        {/* Section #4 */}
        <div className="absolute left-0 top-[1600px] h-[800px] w-screen flex-col space-y-16 bg-[#f6f4ff] sm:top-[2000px] lg:top-[1700px] xl:top-[1500px]">
          <div className="top-[60px] flex w-screen flex-col items-center justify-center">
            <div className="mt-16 text-center text-[38px] font-semibold leading-[44px] tracking-[0] text-black [font-family:'Poppins'] sm:text-[48px]">
              Our Services <br />
              <br />
              <p className="top-[100px] ml-2 mr-2 text-center text-[14px] font-normal leading-[30px] tracking-[0] text-black [font-family:'Poppins'] sm:w-[536px] sm:text-[18px] sm:text-[20px] lg:w-[736px]">
                Eduo was founded with the purpose of providing an integrated
                platform to complement schools in their operations and classroom
                management.
              </p>
            </div>
          </div>

          <div className="no-scrollbar ml-10 mr-10 flex h-[440px] flex-row items-center space-x-16 overflow-x-auto sm:ml-10 sm:mr-10 xl:w-screen xl:justify-center">
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
                  College Counseling
                  <p className="text-center text-[16px] font-normal leading-[30px] tracking-[0] text-black [font-family:'Poppins']">
                    Systematic counseling support
                    <br />
                    through accumulated
                    <br />
                    admissions data
                  </p>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* Section #5 */}
        <div className="absolute top-[2450px] z-10 h-[360px] w-screen space-y-8 bg-white sm:top-[2850px] sm:space-y-16 lg:top-[2550px] xl:top-[2350px]">
          <div className="flex w-screen items-center justify-center lg:ml-32 lg:justify-start">
            <div className="h-[50px] w-screen sm:w-[580px]">
              <div className="relative flex h-[50px] items-center justify-center sm:w-[578px]">
                <div className="left-0 top-0 text-[38px] font-semibold leading-[50.4px] tracking-[0] text-black [font-family:'Poppins'] sm:absolute sm:w-[455px] sm:text-[48px]">
                  A Sneak Peek into
                </div>
                <Image
                  className="absolute top-[60px] h-[44px] w-[132px] object-cover sm:left-[446px] sm:top-0"
                  alt="Image"
                  src={EDUO_LOGO}
                />
              </div>
            </div>
          </div>

          <div className="flex w-screen items-center justify-center">
            <div className="flex hidden w-[600px] flex-wrap items-center justify-center gap-[36px] overflow-hidden rounded-[20px] bg-white p-[40px] shadow-[0px_0px_9px_2px_#0000000d] sm:flex lg:w-[940px]">
              <Image
                className="relative mt-[-4.00px] h-[365px] w-[508px] object-cover lg:h-[608px] lg:w-[848px]"
                alt="Cas"
                src={CAS}
              />
              <div className="relative h-[48px] w-[473px] text-[22px] font-semibold leading-[normal] tracking-[0] text-black [font-family:'Poppins'] sm:text-[32px]">
                Collegiate Academy of Seoul
              </div>
            </div>
          </div>

          <div className="flex w-screen items-center justify-center">
            <div
              onClick={() => {
                setOpen(true);
              }}
              className="h-[223px] w-[400px] cursor-pointer rounded-[20px] bg-[url(/images/hero/image23.png)] bg-cover bg-[50%_50%] sm:h-[335px] sm:w-[600px] lg:h-[540px] lg:w-[940px]"
            >
              <div className="mt-24 flex items-center justify-center lg:mt-32">
                <Image
                  className="flex h-[170px] w-[170px] lg:h-[242px] lg:w-[242px]"
                  alt="Button"
                  src={Button}
                />
              </div>

              <div className="relative block h-[48px] text-center text-[16px] font-semibold leading-[normal] tracking-[0] text-black [font-family:'Poppins'] sm:hidden">
                Collegiate Academy of Seoul
              </div>
            </div>
          </div>

          <div className="flex w-screen flex-col items-center justify-center space-y-5">
            <div className="mt-36 text-center text-[38px] font-extrabold leading-[58px] tracking-[0] text-white [font-family:'Poppins'] sm:text-[48px]">
              Why Eduo?
            </div>
            <p className="text-center text-[16px] font-semibold leading-[58px] tracking-[0] text-white [font-family:'Poppins'] sm:text-[32px]">
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
                  <div className="ml-12 flex flex-row space-x-5 sm:ml-16">
                    <Image className="flex" alt="Image" src={Book_check} />

                    <div className="flex whitespace-nowrap text-[24px] font-bold leading-[32px] tracking-[0] text-white [font-family:'Poppins']">
                      For Administrators
                    </div>
                  </div>

                  <div className="flex">
                    <p className="ml-24 text-[15px] font-semibold leading-[36px] tracking-[0] text-[#cccccc] [font-family:'Poppins'] sm:ml-32 sm:text-[20px]">
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
                  <div className="ml-12 flex flex-row space-x-5 sm:ml-16">
                    <Image className="flex" alt="Image" src={Group} />

                    <div className="flex whitespace-nowrap text-[24px] font-bold leading-[32px] tracking-[0] text-white [font-family:'Poppins']">
                      For Students
                    </div>
                  </div>

                  <div className="flex">
                    <p className="ml-24 text-[15px] font-semibold leading-[36px] tracking-[0] text-[#cccccc] [font-family:'Poppins'] sm:ml-32 sm:text-[20px]">
                      • Comprehensive workspace
                      <br />
                      • Discussion board
                      <br />
                      • Video lectures with distraction prevention
                      <br />• College &amp; career counseling
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-10">
                <div className="flex flex-col space-y-3">
                  <div className="ml-12 flex flex-row space-x-5 sm:ml-16">
                    <Image className="flex" alt="Image" src={Certificate} />

                    <div className="flex whitespace-nowrap text-[24px] font-bold leading-[32px] tracking-[0] text-white [font-family:'Poppins']">
                      For Teachers
                    </div>
                  </div>

                  <div className="flex">
                    <p className="ml-24 text-[15px] font-semibold leading-[36px] tracking-[0] text-[#cccccc] [font-family:'Poppins'] sm:ml-32 sm:text-[20px]">
                      • Lesson planning support
                      <br />
                      • Tracking student progress
                      <br />
                      • Question generator
                      <br />• Attendance management
                    </p>
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <div className="ml-12 flex flex-row space-x-5 sm:ml-16">
                    <Image className="flex" alt="Image" src={Group} />

                    <div className="flex whitespace-nowrap text-[24px] font-bold leading-[32px] tracking-[0] text-white [font-family:'Poppins']">
                      For Parents
                    </div>
                  </div>

                  <div className="flex">
                    <p className="ml-24 text-[15px] font-semibold leading-[36px] tracking-[0] text-[#cccccc] [font-family:'Poppins'] sm:ml-32 sm:text-[20px]">
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
        <div className="absolute top-[2900px] z-0 h-[1400px] h-[2150px] w-screen bg-[url(/images/hero/Background2.png)] bg-cover bg-[50%_50%] bg-top sm:top-[3350px] lg:top-[3250px] lg:h-[1850px] xl:top-[2950px] " />

        {/* Section #6 */}
        <div className="absolute top-[4700px] h-[1748px] w-screen sm:top-[5900px] lg:top-[5500px] xl:top-[5200px]">
          <div className="flex h-[2000px] flex-col space-y-8 bg-[#f0f0f0] sm:space-y-32 lg:h-[1600px] xl:h-[1400px]">
            <div className="mt-16 flex items-center justify-center sm:justify-start">
              <div className="text-[38px] font-semibold leading-[normal] tracking-[0] text-black [font-family:'Poppins'] sm:ml-32 sm:w-[380px] sm:text-[48px]">
                Success Stories
              </div>
            </div>

            <div className="flex w-screen items-center justify-center">
              <div className="ml-6 mr-6 flex flex-col items-center justify-center sm:ml-4 sm:mr-4 sm:w-[90%] sm:items-start sm:justify-start lg:flex-row">
                <div className="flex h-[100px] sm:h-[250px] sm:w-[250px]">
                  <Image
                    className="h-[80px] w-[100px] sm:h-[160px] sm:w-[200px]"
                    alt="Img"
                    src={Start}
                  />
                </div>

                <div className="flex flex-col space-y-5 sm:w-[550px] xl:mt-20 xl:w-[72%] 2xl:w-[75%] 3xl:w-[63%]">
                  <div className="flex">
                    <p className="text-[13px] font-medium leading-[24px] text-black [font-family:'Poppins'] sm:text-[40px] sm:leading-[64px]">
                      Eduo is one of the best tools I’ve utilized to teach my
                      classes. It helps me to focus on what really matters for
                      my students.
                    </p>
                  </div>
                  <div className="flex w-[120%] flex-row">
                    <div className="flex h-[50px] w-[60px] sm:h-[100px] sm:w-[120px]">
                      <Image
                        className="h-[50px] w-[50px] sm:h-[100px] sm:w-[100px]"
                        alt="Element"
                        src={User1}
                      />
                    </div>
                    <div className="flex items-center">
                      <p className="text-[12px] font-normal leading-[normal] tracking-[0] text-black [font-family:'Poppins'] sm:text-[20px]">
                        <span className="font-bold">
                          Alexa
                          <br />
                        </span>
                        <span className="font-medium [font-family:'Poppins']">
                          Teacher at Collegiate Academy of Seoul
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-screen items-center justify-center">
              <div className="sm:justify-star ml-6 mr-6 flex flex-col items-center justify-center sm:ml-4 sm:mr-4 sm:w-[90%]   sm:items-start lg:flex-row">
                <div className="flex flex-col space-y-5 sm:w-[560px] xl:mt-20 xl:w-[80%] 2xl:w-[65%] 3xl:w-[63%]">
                  <div className="flex">
                    <p className="text-[13px] font-medium leading-[24px] text-black [font-family:'Poppins'] sm:text-[40px] sm:leading-[64px]">
                      Eduo is easy to navigate even for those who are new to
                      digital tools. It helped our school maximize efficiency by
                      digitizing records and optimizing administrative tasks.
                    </p>
                  </div>
                  <div className="flex w-[120%] flex-row">
                    <div className="flex h-[50px] w-[60px] sm:h-[100px] sm:w-[120px]">
                      <Image
                        className="h-[50px] w-[50px] sm:h-[100px] sm:w-[100px]"
                        alt="Element"
                        src={User2}
                      />
                    </div>
                    <div className="flex items-center">
                      <p className="text-[12px] font-normal leading-[normal] tracking-[0] text-black [font-family:'Poppins'] sm:text-[20px]">
                        <span className="font-bold">
                          Tim
                          <br />
                        </span>
                        <span className="font-medium [font-family:'Poppins']">
                          Principal at Azabu Christian Academy
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex h-[100px] sm:h-[250px] sm:w-[250px]">
                  <Image
                    className="h-[80px] w-[100px] sm:h-[160px] sm:w-[200px]"
                    alt="Img"
                    src={End}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="no-scrollbar absolute top-[5400px] h-[1748px] w-screen overflow-x-auto sm:top-[7800px] lg:top-[7000px] xl:top-[6500px]">
          <div className="absolute top-[100px] flex w-[1280px] flex-col sm:top-[150px] sm:flex-row xl:w-full">
            <div className="flex h-[160px] w-[1280px] flex-col space-y-4 bg-white sm:ml-16 sm:h-[360px] sm:space-y-16">
              <div className="flex">
                <Image
                  className="ml-2 h-[38px] w-[114px] object-cover sm:h-[76px] sm:w-[228px]"
                  alt="Image"
                  src={EDUO_LOGO}
                />
              </div>
              <div className="flex">
                <p className="ml-2 text-[16px] font-normal leading-[normal] tracking-[0] text-black [font-family:'Poppins']">
                  Copyright © 2024 Eduo Learning
                  <br />
                  All Rights Reserved.
                </p>
              </div>
            </div>

            <div className="flex h-[360px] w-[1280px] flex-col bg-white sm:flex-row sm:justify-end">
              <div className="ml-2 flex h-[211px] w-[233px] flex-col space-y-5">
                <div className="flex">
                  <p className="w-[113px] text-[24px] font-medium leading-[normal] tracking-[0] text-black [font-family:'Poppins']">
                    Address
                  </p>
                </div>
                <div className="flex">
                  <p className="w-[229px] text-[16px] font-normal leading-[normal] tracking-[0] text-black [font-family:'Poppins']">
                    12, Dogok-ro 2-gil, Gangnam-gu, Seoul, Republic of Korea
                  </p>
                </div>
              </div>
              <div className="ml-2 flex h-[211px] w-[233px] flex-col space-y-5">
                <div className="flex">
                  <p className="w-[113px] text-[24px] font-medium leading-[normal] tracking-[0] text-black [font-family:'Poppins']">
                    Office
                  </p>
                </div>
                <div className="flex">
                  <p className="w-[229px] text-[16px] font-normal leading-[normal] tracking-[0] text-black [font-family:'Poppins']">
                    Monday - Friday
                    <br />
                    9AM - 6PM
                  </p>
                </div>
              </div>
              <div className="ml-2 flex h-[211px] w-[233px] flex-col space-y-5">
                <div className="flex">
                  <p className="w-[113px] text-[24px] font-medium leading-[normal] tracking-[0] text-black [font-family:'Poppins']">
                    Contact
                  </p>
                </div>
                <div className="flex">
                  <p className="w-[229px] text-[16px] font-normal leading-[normal] tracking-[0] text-black [font-family:'Poppins']">
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
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[1280px] xl:w-screen">
            <Image className="h-[100px]" alt="Wave" src={Wave2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
