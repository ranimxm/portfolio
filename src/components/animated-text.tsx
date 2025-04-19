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
      const splitText = new SplitType(targetElement as HTMLElement, { types: "words" });

      gsap.fromTo(splitText.words,
      { color: "#4f46e5" },
      {
        color: "rgb(37, 37, 37)",  
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: textRef.current,  
          start: "top 85%",
          end: "top 85%",
          scrub: 1,
          toggleActions: "reverse none none reverse",
        },
        ease: "power2.out",
        onComplete: () => {
          if (textRef.current?.closest(".group:hover")) {
            splitText.words?.forEach((word) => (word.style.color = ""));
          }
        },
        }
      );  

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }      
    }, [])
  
  

  return (
    <>
    {isLink ? (
      <div className={`${className} text`} ref={textRef}>
        <a href={text} target="_blank" rel="noopener noreferrer" className="hover-link">
          View project
        </a>
      </div>
    ) : (
      <div className={`text group-hover:text-white z-[10] ${className}`} ref={textRef}>
        <p >{text}</p>
      </div>
    )
  }
    </>
  )
}
