import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const buttonClassName =
  "inline-flex h-[42px] items-center justify-center rounded-[1000px] bg-[linear-gradient(90deg,#4558F2_0%,#8C2A94_100%)] px-[22px] font-mono text-[14px] font-medium leading-none text-white transition duration-200 hover:brightness-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#4558F2]/25";

type ButtonLinkoutProps =
  | ({
      as?: "button";
      children: ReactNode;
    } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      as: "a";
      children: ReactNode;
    } & AnchorHTMLAttributes<HTMLAnchorElement>);

const ButtonLinkout = (props: ButtonLinkoutProps) => {
  const { as = "button", children, className = "", ...rest } = props;
  const classes = `${buttonClassName} ${className}`.trim();

  if (as === "a") {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};

export default ButtonLinkout;
