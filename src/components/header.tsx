"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { isLight } from "@/types/is-light";

export default function Header({ isLight }: isLight) { 
  const [navActive, setNavActive] = useState(false);

  const toggleMenu = useCallback(() => {
    setNavActive((prev) => !prev);
  }, []);
  
  const headerClasses = isLight
    ? "flex items-center justify-between p-4 px-8 text-h3 border-borderLine border-solid border-b-[1px] bg-white text-black z-[90] relative"
    : "flex items-center justify-between p-4 px-8 text-h3 text-white z-[90] relative";

  const spanClasses = isLight ? "bg-background" : "bg-white";
  const backgroundClasses = isLight ? "bg-white" : "bg-background";
  useEffect(() => {
    const navigation = document.querySelector(".nav") as HTMLElement;
    const menu = document.querySelector(".menu");

    menu?.addEventListener("click", () => {
      navigation.style.setProperty("--childenNumber", navigation.children.length.toString());
    });
  }, []);

  return (
    <header className={`${headerClasses} ${navActive ? backgroundClasses : ""}`}>
      <div className="flex flex-col items-start justify-center">
        <Link href="/" className="hover-link"> 
          <p>Ranim</p>
          <p>Mohammad</p>
        </Link>
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
            navActive ? "active" : ""
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
