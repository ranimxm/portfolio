"use client";

import { ArrowDown } from "@/assets/icons/arrow-down";
import ProjectsSection from "./_components/projects-section";
import Blob from "@/components/blob";
import Header from "@/components/header";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");
    if (section === "projects") {
      const projectsSection = document.querySelector(".projects-section");
      projectsSection?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState({}, document.title, "/");
    }
  }, [searchParams]);
  
  return (
    <>
      <Header />
      <Blob />
      <section className="h-[90vh] w-full flex flex-col justify-center items-start px-[10vw]">
        <div className="text-white w-full flex flex-col text-h1 md:text-xxl">
          <div>
            <p>Ranim</p>
            <p>Mohammad</p>
          </div>
          <div className="md:text-h1 text-h3 flex gap-2 justify-end items-center">
            <p>scroll</p>
            <ArrowDown />
          </div>
        </div>
      </section>
      <ProjectsSection />
    </>
  );
}
