"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Circles() {
    const outerCircleRef = useRef(null);
    const innerCircleRef = useRef(null);

    useEffect(() => {
        gsap.to(outerCircleRef.current, {
            rotation: -360,
            duration: 45,
            repeat: -1,
            ease: "linear",
            transformOrigin: "50% 50%",
        });
        gsap.to(innerCircleRef.current, {
            rotation: 360,
            duration: 50,
            repeat: -1,
            ease: "linear",
            transformOrigin: "50% 50%",
        });
    }, []);

    return (
        <>
        <div ref={innerCircleRef} className="absolute border border-dashed border-gray-400/40 rounded-full w-[85vmin] h-[85vmin] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <div ref={outerCircleRef} className="absolute border-[1.6px] border-dashed border-gray-400/40 rounded-full w-[90vmin] h-[90vmin] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </>
  );
}
