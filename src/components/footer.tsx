import Link from "next/link";
import { ArrowLink } from "@/assets/icons/arrowLink";

export const Footer = () => {
    return (
        <footer className="bg-white py-[5vh] px-[5vw] border-borderLine border-t-[1px] h-full">
            <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0">
                <div>
                    <h2 className="text-xl">Ranim Mohammad</h2>
                    <p className="text-gray-400"> Digital projects with purpose</p>
                </div>
                <nav className="flex gap-10">
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="hover-link">Home</Link> 
                        </li>
                        <li>
                            <Link href="/about" className="hover-link">About</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex flex-col gap-2">
                    <ul>
                        <li className="flex gap-2 flex-row items-center hover-link justify-between">
                            <a href="mailto:ranimm01@hotmail.com" className="">Email </a>
                            <ArrowLink/>
                        </li>
                        <li className="flex gap-2 flex-row items-center hover-link justify-between">
                            <a href="https://github.com/ranimxm" target="_blank">GitHub</a>
                            <ArrowLink/>
                        </li>
                        <li className="flex gap-2 flex-row items-center hover-link justify-between">
                            <a href="https://www.linkedin.com/in/ranim-m" target="_blank">LinkedIn</a>
                            <ArrowLink/>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-8 text-sm text-gray-500">© 2025 Ranim Mohammad. All Rights Reserved.</div>
        </footer>
    );
  };
  