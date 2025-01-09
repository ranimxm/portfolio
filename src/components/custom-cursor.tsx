"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

export const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cursorElement = document.querySelector(".custom-cursor");

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursorElement, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out",
            });
        };

        const handleMouseEnter = (e: MouseEvent) => {
            const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
            const isInsideLink = elementUnderCursor?.closest("a");
            if (isInsideLink) {
                setIsVisible(true);
                gsap.to(cursorElement, { scale: 1.5, duration: 0.3, ease: "power2.out" }); 
            }
        };

        const handleMouseLeave = (e: MouseEvent) => {
            const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
            const isLeavingLink = !(elementUnderCursor?.closest("a"));
            if (isLeavingLink) {
                setIsVisible(false);
                gsap.to(cursorElement, { scale: 1, duration: 0.3, ease: "power2.out" });
            }
        };

        window.addEventListener("mousemove", moveCursor);
        document.body.addEventListener("mouseover", handleMouseEnter);
        document.body.addEventListener("mouseout", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.body.removeEventListener("mouseover", handleMouseEnter);
            document.body.removeEventListener("mouseout", handleMouseLeave);
        };
    }, []);

    return (
        <div className={`custom-cursor fixed pointer-events-none z-[99] w-5 h-5 bg-white rounded-full mix-blend-difference
            duration-[0.5s] ease-[cubic-bezier(0.22,1,0.36,1)]
            ${isVisible ? "block" : "hidden"}`}/>
    );
};
