"use client";
import { useAtomValue } from "jotai";

import { Navlink } from "./nav-link";
import { NavigationMock } from "./nav-mock";
import { isActiveSearch } from "./search";

export const Navigation = () => {
  const searchIsUsed = useAtomValue(isActiveSearch);
  return (
    <ul
      className={`flex flex-col justify-between space-y-3 bg-transparent lg:flex-row lg:justify-end w-full lg:space-x-8 lg:space-y-0 ${
        searchIsUsed ? "lg:absolute right-[200%] top-[-200%]" : "sticky"
      }`}
    >
      {NavigationMock.map((nav) => (
        <Navlink key={nav.href} href={nav.href}>
          {nav.label}
        </Navlink>
      ))}
    </ul>
  );
};
