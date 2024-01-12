"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

type NavlinkProps = ComponentProps<typeof Link>;

export const Navlink = ({ ...props }: NavlinkProps) => {
  const pathName = usePathname();
  const current = pathName === props.href;

  return (
    <li className="cursor-pointer list-none">
      <Link
        className={`relative border-blue-main from-[#0379ff] to-[#01337e] px-3 font-medium uppercase text-[#fff] duration-500 hover:text-blue-main lg:border-l-0 lg:pl-0 lg:after:absolute lg:after:-bottom-[5px] lg:after:left-0 lg:after:h-[1.5px] lg:after:w-0 lg:after:bg-gradient-to-r lg:after:duration-500 lg:after:content-[''] lg:hover:after:w-[100%] ${
          current &&
          "lg:text-blue-main bg-blue-main lg:bg-transparent text-white rounded-md p-1 px-3"
        }`}
        {...props}
      />
    </li>
  );
};
