"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { fragmentShader } from "@/assets/shaders/fragmentShader";
import { vertexShader } from "@/assets/shaders/vertexShader";

export default function Blob() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const container = containerRef.current;
        container?.appendChild(renderer.domElement);

        const clock = new THREE.Clock();

        const blobMaterial = new THREE.ShaderMaterial({
          uniforms: {
            uTime: { value: 0.0 },
          },
          vertexShader,
          fragmentShader,
        });

        const geometry = new THREE.CircleGeometry(1, 150);
        const blob = new THREE.Mesh(geometry, blobMaterial);
        scene.add(blob);
        camera.position.z = 3;

        const updateBlobScale = () => {
            const scale = Math.min(window.innerWidth, window.innerHeight) / 500;
            blob.scale.set(scale, scale, scale);
        };
        updateBlobScale();

        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            updateBlobScale();
        };
        window.addEventListener("resize", handleResize);

        const animate = () => {
            requestAnimationFrame(animate);
            blobMaterial.uniforms.uTime.value = clock.getElapsedTime();
            renderer.render(scene, camera);
            updateBlobScale();
        };
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            container?.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full relative"/>
    );
};
