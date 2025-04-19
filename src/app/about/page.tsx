import { AnimatedText } from "@/components/animated-text";
import Blob from "@/components/blob";
import Header from "@/components/header";
import { LoadinText } from "@/components/loadin-text";
import type { Metadata } from "next";
import experience from "@/data/experience.json";
import { ArrowRight } from "@/assets/icons/arrow-right";
import { ArrowLeft } from "@/assets/icons/arrow-left";
import { ArrowCopy } from "@/assets/icons/arrow-copy";
import { FigmaIcon } from "@/assets/icons/figma";
import { TypescriptIcon } from "@/assets/icons/typescript";
import { GitIcon } from "@/assets/icons/git";
import { FlutterIcon } from "@/assets/icons/flutter";
import { ReactIcon } from "@/assets/icons/react";
import { VueIcon } from "@/assets/icons/vue";

export const metadata: Metadata = {
  title: "About | Ranim Mohammad",
  description: "Description about the author of the website, Ranim Mohammad.",
};

export default async function AboutPage() {

  return (
    <>
      <Header isLight />
      <main className="bg-white text-black w-full" style={{ clipPath: 'inset(0 0 0 0)' }}>
        <div className="md:px-[8vw] px-[5vw] w-full z-[10]">
          <section className="w-full flex flex-col">
            <section className="h-full p-[5vw] border-l-[1px] border-r-[1px] w-full border-borderLine flex flex-col text-h1 md:text-xxl flex flex-col justify-center items-start relative after:absolute after:content-[''] after:w-[300vw] after:bottom-[0] after:h-[1px] after:left-[-200px] after:bg-borderLine">
              <LoadinText text="Hi, I’m Ranim!" className="text-h1 md:text-l" />
              <LoadinText text="A UX/UI and frontend developer" className="text-h2 md:text-xl"/>
            </section>
            <section className="h-full border-borderLine border-r-[1px] border-l-[1px] w-full flex flex-col gap-8">
              <div className="flex justify-center w-full flex-col md:flex-row gap-2 md:gap-8 border-borderLine">
                <AnimatedText text="I'm Ranim, a final-year ICT & Media Design student. My focus is on solving problems through code while maintaining a user-centered approach to design. I enjoy both the technical aspects of development and understanding how people interact with digital products.
                My approach to design emphasizes functionality and user experience. When working on websites or applications, I consider both the practical purpose and how users will engage with the interface. My education has provided me with a balance of technical skills and design thinking."
                  className="text-h4 md:text-h3 p-[5vw] md:w-[50%] w-full" />
                <AnimatedText
                  className="text-h4 md:text-h3 p-[5vw] border-t-[1px] md:border-t-0 md:border-l-[1px] border-borderLine md:w-[50%] w-full"
                  text="Outside of my studies, I spend time: Sketching, mostly rough drafts and concepts, working out at Basic Fit and enjoying time with cats. I value continuous improvement through self-reflection and iterative learning in both my professional and personal development."
                />
              </div>
            </section>
            <section>
              <section className="h-full p-[10vw] px-[5vw] border-l-[1px] border-r-[1px] w-full border-borderLine flex flex-col border-b-[1px] text-h1 md:text-xxl flex flex-col justify-center items-start relative
              before:absolute before:content-[''] before:w-[300vw] before:top-[0] before:h-[1px] before:left-[-200px] before:bg-borderLine
              ">
                <AnimatedText text="Work experience" className="text-h1 md:text-l" />
              </section>
              <section className="border-borderLine border-r-[1px] border-l-[1px] w-full">
                <ol className="flex justify-center w-full flex-col">
                  {experience.map((exp, index) => (
                    <li key={index}
                      className="group relative overflow-hidden before:absolute before:top-full before:left-0 before:h-full before:w-full 
                                before:bg-mainTheme before:transition-transform before:duration-500 
                                hover:cursor-pointer hover:before:-translate-y-full">
                      <div key={index} className={`p-[2vw] flex flex-row justify-between ${index === experience.length - 1 ? "border-b-0" : "border-b-[1px]"} items-center gap-2 p-2 md:p-5
                      group relative overflow-hidden before:absolute before:top-full before:left-0 before:h-full before:w-full
                       before:transition-transform before:duration-500 
                      hover:cursor-pointer hover:before:-translate-y-full
                      `}>
                        <div className="flex flex-col md:flex-row gap-2 justify-center items-start md:items-center">
                          <ArrowRight className="md:block hidden" />
                          <AnimatedText text={exp.position} className="font-bold text-h4 md:text-h3" />
                          <AnimatedText text={exp.company} className="text-h4 md:text-h3" />
                        </div>
                        <AnimatedText text={exp.period} className="text-h4 md:text-h3 " />
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            </section>
            <section className="relative before:absolute before:content-[''] before:w-[300vw] before:top-[0] before:h-[1px] before:left-[-200px] before:bg-borderLine">
              <section className="h-full w-full p-[10vw] px-[5vw] border-l-[1px] border-r-[1px] border-borderLine flex md:flex-row flex-col gap-[2vw] md:gap-[5vw] justify-center items-start relative">
                <AnimatedText text="Tooling set" className="text-h1 md:text-l md:w-[50%] w-full" />
                <AnimatedText text="The common tools or skills I use for my projects." className="text-h2 md:text-h1 md:w-[50%] w-full" />
              </section>

              <section className="border-borderLine border-r-[1px] border-l-[1px] w-full relative py-[2vw]">
                <ol className="grid gap-4 px-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                  {[...Array(6)].map((_, i) => (
                    <li
                      key={i}
                      className="border-borderLine border-[1px] aspect-square w-[80%] flex flex-col justify-between items-center p-2 relative">
                      <ArrowLeft className="absolute top-2 left-2 transform rotate-[-135deg] w-4 h-4" />
                      <ArrowCopy className="absolute bottom-2 right-2 transform rotate-[45deg] w-4 h-4" />
                      <div className="w-full h-full flex items-center justify-center p-4">
                        {i === 0 && <FigmaIcon className="w-full h-full max-w-[80px] max-h-[80px]" />}
                        {i === 1 && <TypescriptIcon className="w-full h-full max-w-[80px] max-h-[80px]" />}
                        {i === 2 && <GitIcon className="w-full h-full max-w-[80px] max-h-[80px]" />}
                        {i === 3 && <VueIcon className="w-full h-full max-w-[80px] max-h-[80px]" />}
                        {i === 4 && <FlutterIcon className="w-full h-full max-w-[80px] max-h-[80px]" />}
                        {i === 5 && <ReactIcon className="w-full h-full max-w-[80px] max-h-[80px]" />}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            </section>           
          </section>
        </div>
        <Blob isLight />
      </main>
    </>
  );
}
