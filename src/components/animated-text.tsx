"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";


type AnimatedText = {
    text: string,
    className? : string
    isLink? : boolean
}

export const AnimatedText = ({text, className, isLink}: AnimatedText) => {
    const textRef = useRef<HTMLDivElement>(null);
    
    useEffect (() => {
      gsap.registerPlugin(ScrollTrigger);
      if (!textRef.current) return;
      
      const targetElement = textRef.current.querySelector("p, a");
      if (!targetElement) return;
      const splitText = new SplitType(targetElement as HTMLElement, { types: "chars" });

      gsap.fromTo(splitText.chars,
      { color: "#4f46e5" },
      {
        color: "rgb(37, 37, 37)",  
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: textRef.current,  
          start: "top 50%",
          end: "top 30%",
          scrub: 1,
          toggleActions: "reverse none none reverse",
        },
        ease: "power2.out",
      }
    );        
  }, [])

  return (
    <>
    {isLink ? (
      <div className={`${className} text`} ref={textRef}>
        <a href={text} target="_blank" rel="noopener noreferrer" className="hover-link font-semibold">
          {text}
        </a>
      </div>
    ) : (
      <div className={`text`} ref={textRef}>
        <p className={className}>{text}</p>
      </div>
    )
  }
    </>
  )
}
