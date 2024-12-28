"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

type AnimatedText = {
    text: string,
    className? : string
}

export const AnimatedText = ({text, className}: AnimatedText) => {
    const textRef = useRef<HTMLDivElement>(null);
    
    useEffect (() => {
        gsap.registerPlugin(ScrollTrigger);
        const scroll = gsap.timeline({
            scrollTrigger: {
              trigger: textRef.current,
              scrub: 1,
              start: "top bottom",
              end: "top center",
            },
          });
          if (textRef.current){
            scroll.to({}, { duration: 0.05 });
            scroll.to(textRef.current.querySelector("p"), {
              backgroundPositionX: 0,
              ease: "power2.out",
            });
          }
    }, [])

    return (
        <div className="text" ref={textRef}>
            <p className={`${className}`}>
                {text}
            </p>
        </div>
    )
}
