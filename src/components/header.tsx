"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { isLight } from "@/types/is-light";

export default function Header({ isLight }: isLight) { 
  const [navActive, setNavActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setNavActive(!navActive);
    setMenuActive(!menuActive);
  };
  const headerClasses = isLight
    ? "flex items-center justify-between p-4 px-8 text-h3 border-borderLine border-solid border-b-[1px] bg-white text-black z-[99] relative"
    : "flex items-center justify-between p-4 px-8 text-h3 text-white z-[99] relative";

  const spanClasses = isLight ? "bg-black" : "bg-white";
  const backgroundClasses = isLight ? "bg-white" : "bg-background";
  useEffect(() => {
    const navigation = document.querySelector(".nav") as HTMLElement;
    const menu = document.querySelector(".menu");

    menu?.addEventListener("click", () => {
      navigation.style.setProperty("--childenNumber", navigation.children.length.toString());
    });
  }, []);

  return (
    <header className={headerClasses}>
      <div className="flex flex-col items-start justify-center">
        <p>Ranim</p>
        <p>Mohammad</p>
      </div>
      <nav>
        <ul
          className={` nav nav-list flex flex-row gap-4 ${
            navActive ? "active" : "" 
          } ${backgroundClasses}`}
        >
          <li className="p-2">
            <Link href="/" className="hover-link" onClick={toggleMenu}> Home </Link>
          </li>
          <li className="p-2">
            <Link href="/about" className="hover-link" onClick={toggleMenu}> About </Link>
          </li>
        </ul>
        <div
          className={`menu ${
            menuActive ? "active" : ""
          } hidden cursor-pointer relative flex-col items-center justify-between w-[23px] h-[18px] m-[20px]`}
          onClick={toggleMenu}
        >
          <span className={`w-full h-[2px] rounded-full ${spanClasses} transition origin-left duration-300 ease-linear`}></span>
          <span className={`w-full h-[2px] rounded-full ${spanClasses} transition origin-left duration-300 ease-linear`}></span>
          <span className={`w-full h-[2px] rounded-full ${spanClasses} transition origin-left duration-300 ease-linear`}></span>
        </div>
      </nav>
    </header>
  );
}
