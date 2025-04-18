"use client";

import { useEffect, useRef, isValidElement } from "react";
import gsap from "gsap";
import SplitType from "split-type";

type AnimatedTextProps = {
    text: string | React.ReactNode;
    className?: string;
};

export const LoadinText = ({ text, className }: AnimatedTextProps) => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = textRef.current;
        if (!element) return;

        if (typeof text === "string") {
            const splitWords = new SplitType(element, {
                types: "words",
                wordClass: "word",
                tagName: "span"
            });

            splitWords.words?.forEach((word) => {
                new SplitType(word, {
                    types: "chars",
                    charClass: "char",
                    tagName: "span"
                });
            });

            gsap.fromTo((".char"), {
                opacity: 0,
                y: "110%",
                scale: 0.8
            }, {
                opacity: 1,
                y: "0%",
                scale: 1,
                duration: 1.2,
                stagger: {
                    each: 0.05,
                    from: "start"
                },
                ease: "cubic-bezier(0.22, 1, 0.36, 1)"
            });
        }

        else if (isValidElement(text)) {
            gsap.fromTo(element, {
                opacity: 0,
                y: "110%",
                scale: 0.8
            }, {
                opacity: 1,
                y: "0%",
                scale: 1,
                duration: 1.2,
                stagger: {
                    each: 0.05,
                    from: "start"
                },
                delay: 2,
                ease: "cubic-bezier(0.22, 1, 0.36, 1)"
            });
        }
    }, [text]);

    return (
        <div className={`overflow-hidden ${className || ""}`}>
            <p ref={textRef} className="whitespace-pre-wrap">
                {text}
            </p>
        </div>
    );
};
