"use client";
import { ReactNode } from "react";

import { useAtomValue } from "jotai";

import { menuIsOpen } from "../menu-hamburger";

export const Navbar = ({ children }: { children: ReactNode }) => {
  const menuOpen = useAtomValue(menuIsOpen);

  return (
    <nav
      className={`flex-1 absolute top-16 right-0 -z-40 mt-0.5 w-full p-4 px-4 duration-700 lg:static items-center bg-white dark:bg-zinc-900 justify-center flex max-w-[1920px] ${
        menuOpen
          ? "translate-y-0"
          : "translate-y-[-200%] bg-transparent lg:translate-y-0"
      }`}
    >
      {children}
    </nav>
  );
};
