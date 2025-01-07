"use client";

import Link from "next/link";
import { ArrowLink } from "@/assets/icons/arrow-link";
import { ArrowUp } from "@/assets/icons/arrow-up";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-white py-[5vh] px-[5vw] text-black border-borderLine border-t-[1px] h-full">
            <div className="relative flex justify-end items-end">
                <button
                    onClick={scrollToTop}
                    className="flex text-center justify-center items-center translate-y-[-10vh] bg-white border-borderLine border-[1px] rounded-full p-4" >
                    <ArrowUp className="hover:text-mainTheme hover:-translate-y-2 ease-out duration-300" />
                </button>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0">
                <div>
                    <h2 className="text-xl">Ranim Mohammad</h2>
                    <p className="text-fontColor"> Digital projects with purpose</p>
                </div>
                <nav className="flex gap-10">
                    <ul className="space-y-2 text-h2">
                        <li>
                            <Link href="/" className="hover-link">Home</Link> 
                        </li>
                        <li>
                            <Link href="/about" className="hover-link">About</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex flex-col gap-2">
                    <ul className="text-fontColor">
                        <li className="flex gap-2 flex-row items-center hover-link justify-between">
                            <a href="mailto:ranimm01@hotmail.com" className="">Email </a>
                            <ArrowLink className="text-fontColor"/>
                        </li>
                        <li className="flex gap-2 flex-row items-center hover-link justify-between">
                            <a href="https://github.com/ranimxm" target="_blank">GitHub</a>
                            <ArrowLink className="text-fontColor"/>
                        </li>
                        <li className="flex gap-2 flex-row items-center hover-link justify-between">
                            <a href="https://www.linkedin.com/in/ranim-m" target="_blank">LinkedIn</a>
                            <ArrowLink className="text-fontColor"/>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-8 text-sm text-fontColor">© 2025 Ranim Mohammad. All Rights Reserved.</div>
        </footer>
    );
  };
  