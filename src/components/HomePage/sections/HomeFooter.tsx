import Image from "next/image";

import { EduoLogo } from "../assets";

const legalLinks = [
  { label: "결제 안내", href: "https://www.eduo-learning.com/payment-info" },
  { label: "환불 정책", href: "https://www.eduo-learning.com/refund-policy" },
  {
    label: "이용약관",
    href: "https://www.eduo-learning.com/termandconditions",
  },
  {
    label: "개인정보처리방침",
    href: "https://www.eduo-learning.com/privacypolicy",
  },
];

const HomeFooter = () => {
  return (
    <footer className="border-t border-black/5 px-6 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto flex max-w-[1152px] flex-col gap-12 sm:gap-14">
        <nav className="flex gap-10 font-sans text-[16px] font-medium leading-[1.2]">
          <a href="/company">Company</a>
          <a href="/we-built-for">We built for</a>
        </nav>
        <div className="flex flex-col gap-8 border-b border-black/10 pb-10 sm:pb-12">
          <Image
            src={EduoLogo}
            alt="EDUO"
            className="h-10 w-auto object-contain"
          />
          <nav
            aria-label="Legal and policy links"
            className="flex flex-wrap gap-x-6 gap-y-3 font-sans text-[14px] font-medium leading-[1.4] text-[#252833]"
          >
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#7037d8]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-2 font-sans text-[13px] font-normal leading-[1.65] text-[#626874]">
          <p>
            상호명: 주식회사 에듀오러닝 <span aria-hidden="true">|</span>{" "}
            대표자: 홍대근
          </p>
          <p>
            사업자등록번호: 804-88-03391 <span aria-hidden="true">|</span>{" "}
            통신판매업 신고번호: 제2026-서울강남-03146호
          </p>
          <p>
            사업장 주소: 서울특별시 강남구 영동대로 602, 6층 K276호 (삼성동,
            삼성동 미켈란 107)
          </p>
          <p>
            대표 전화:{" "}
            <a
              href="tel:+821066249181"
              className="underline underline-offset-2 hover:text-[#7037d8]"
            >
              010-6624-9181
            </a>{" "}
            <span aria-hidden="true">|</span> 고객지원:{" "}
            <a
              href="mailto:support@eduolearning.com"
              className="underline underline-offset-2 hover:text-[#7037d8]"
            >
              support@eduolearning.com
            </a>
          </p>
          <p className="mt-3 font-['Roboto_Mono'] text-[12px] leading-[1.4] tracking-[-0.01em] text-[#7A7E86]">
            Copyright © EDUO Learning Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
