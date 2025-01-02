"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { waterFragmentShader } from "@/assets/shaders/fragmentShader";
import { vertexShader } from "@/assets/shaders/vertexShader";

export default function Blob() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);

      const container = containerRef.current;
      container?.appendChild(renderer.domElement);
      
      const clock = new THREE.Clock();
      const mouse = new THREE.Vector2(0, 0); 
      const target = new THREE.Vector2(0, 0);

      const blobMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0.0 },
          mousePos: { value: mouse },
        },
        vertexShader,
        fragmentShader: waterFragmentShader,
      });
      
      const geometry = new THREE.CircleGeometry(1.25, 800);
      const blob = new THREE.Mesh(geometry, blobMaterial);
      scene.add(blob);
      camera.position.z = 3;

      const updateBlobScale = () => {
          const scale = Math.min(window.innerWidth, window.innerHeight) / 600;
          blob.scale.set(scale, scale, scale);
      };
      updateBlobScale();

      const handleMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      };
      window.addEventListener("mousemove", handleMouseMove);

      const handleResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        updateBlobScale();
      };
      window.addEventListener("resize", handleResize);

      const animate = () => {
        requestAnimationFrame(animate);
        // Voeg easing toe aan de muispositie
        target.x += (mouse.x - target.x) * 0.1;
        target.y += (mouse.y - target.y) * 0.1;

        blobMaterial.uniforms.uTime.value = clock.getElapsedTime();
        blobMaterial.uniforms.mousePos.value = target;

        renderer.render(scene, camera);
        updateBlobScale();
      };
      animate();

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
        container?.removeChild(renderer.domElement);
      };
    }, []);
  
  return (
    <div
      ref={containerRef}
      className="overflow-hidden w-full h-full fixed top-[1.5rem] bottom-0 z-[-1]"
    />
  );
};
