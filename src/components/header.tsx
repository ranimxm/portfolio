"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() { 
  const [navActive, setNavActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setNavActive(!navActive);
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const navigation = document.querySelector(".nav") as HTMLElement;
    const menu = document.querySelector(".menu");

    menu?.addEventListener("click", () => {
      navigation.style.setProperty("--childenNumber", navigation.children.length.toString());
    });
  }, []);

  return (
    <header className="flex items-center justify-between p-4 px-8 text-h4 text-white bg-background">
      <div className="flex flex-col items-start justify-center">
        <p>Ranim</p>
        <p>Mohammad</p>
      </div>
      <nav className="z-[99]">
        <ul
          className={` nav nav-list flex flex-row gap-4 ${
            navActive ? "active" : ""
          }`}
        >
          <li className="p-2">
            <Link href="/" className="hover-link" onClick={toggleMenu}> Home </Link>
          </li>
        </ul>
        <div
          className={`menu ${
            menuActive ? "active" : ""
          } hidden cursor-pointer relative flex-col items-center justify-between w-[23px] h-[18px] m-[20px]`}
          onClick={toggleMenu}
        >
          <span className="w-full h-[2px] rounded-full bg-white transition origin-left duration-300 ease-linear"></span>
          <span className="w-full h-[2px] rounded-full bg-white transition origin-left duration-300 ease-linear"></span>
          <span className="w-full h-[2px] rounded-full bg-white transition origin-left duration-300 ease-linear"></span>
        </div>
      </nav>
    </header>
  );
}
