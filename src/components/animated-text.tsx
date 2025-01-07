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
      if (!textRef.current) return;

      gsap.fromTo(textRef.current.querySelector("p"),
      { color: "#4f46e5" },
      {
        color: "rgb(37, 37, 37)",  
        duration: 1,
        stagger: 0.2,
        scrub: 1,
        scrollTrigger: {
          trigger: textRef.current,  
          start: "top bottom",
          end: "top center",
          toggleActions: "restart none none reverse",
        },
        ease: "power2.out",
      }
    );        
  }, [])

  return (
    <div className={`${className} text`} ref={textRef}>
      <p>{text}</p>
    </div>
  )
}
