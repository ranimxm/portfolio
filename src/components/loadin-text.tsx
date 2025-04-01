"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

type AnimatedTextProps = {
    text: string | React.ReactNode;
  className?: string;
};


export const LoadinText = ({ text, className }: AnimatedTextProps) => {
    const textRef = useRef(null);

    useEffect(() => {
        const element = textRef.current;
        if (element) {
            const splitText = new SplitType(element, { types: "chars" });
            
            gsap.fromTo(splitText.chars, {
                opacity: 0,
                y: "110%",
                transformOrigin: "left bottom",
                scale: 0.8,
            },
            {
                opacity: 1,
                y: "0%",
                duration: 1.4,
                scale: 1,
                delay: 0.4,
                stagger: 0.08,
                ease: "cubic-bezier(0.22, 1, 0.36, 1)",
            });
        }

    }, []);

    return (
        <div className={`overflow-hidden ${className || ""}`}>
            <p ref={textRef}>
                {text}
            </p>
        </div>
    );
};

