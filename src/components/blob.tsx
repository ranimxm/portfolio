"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

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
          vertexShader: `
                uniform float uTime;
                varying vec2 vUv;

                void main() {
                    vUv = uv;
                    vec3 newPosition = position;

                    float ripple = sin((position.x * 5.0 + position.y * 5.0) + uTime * 1.0) * 0.06;
                    newPosition.z += ripple;

                    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
                }
            `,
          fragmentShader: `
                varying vec2 vUv;

                void main() {
                    vec2 center = vec2(0.5, 0.5);
                    float radius = 0.5; // straal van de cirkel
                    float dist = distance(vUv, center) / radius;

                    vec3 color;
                    if (dist < 0.4641) { //eerste cirkel (middelste) naar tweede
                        color = mix(vec3(0.70196, 0.64705, 1.0), vec3(0.95294, 0.74509, 1.0), dist / 0.4641); //mix kleuren mbv CSS percentages in figma (46,51%)
                    } else if (dist < 0.6783) { //tweede cirkel naar derde
                        color = mix(vec3(0.95294, 0.74509, 1.0), vec3(0.58823, 0.52156, 1.0), (dist - 0.4641) / (0.6783 - 0.4641));
                    } else if (dist < 0.8521) { //derde cirkel naar vierde
                        color = mix(vec3(0.58823, 0.52156, 1.0), vec3(0.23921, 0.2, 0.47058), (dist - 0.6783) / (0.8521 - 0.6783));
                    } else if (dist <= 1.0) { //vierde cirkel maar vijfde
                        color = mix(vec3(0.23921, 0.2, 0.47058), vec3(0.01176, 0.0, 0.22745), (dist - 0.8521) / (1.0 - 0.8521));
                    }

                    gl_FragColor = vec4(color, 1.0);
                }
            `,
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
