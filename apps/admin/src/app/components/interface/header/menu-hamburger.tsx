"use client";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";

import { atom, useAtomValue, useSetAtom } from "jotai";

export const menuIsOpen = atom(false);

export const MenuHamburger = () => {
  const setValueMenuIsOpen = useSetAtom(menuIsOpen);
  const menuOpen = useAtomValue(menuIsOpen);

  return (
    <button
      onClick={() => setValueMenuIsOpen((prev) => !prev)}
      className="mr-4 flex items-center justify-center bg-transparent text-xl lg:hidden dark:text-white text-black"
    >
      {menuOpen ? (
        <BiMenu className="h-8 w-8" />
      ) : (
        <BiMenuAltRight className="h-8 w-8" />
      )}
    </button>
  );
};
