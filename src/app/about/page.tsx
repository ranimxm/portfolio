import { AnimatedText } from "@/components/animated-text";
import Blob from "@/components/blob";
import Header from "@/components/header";
import { LoadinText } from "@/components/loadin-text";
import type { Metadata } from "next";
import experience from "@/data/experience.json";
import { ArrowRight } from "@/assets/icons/arrow-right";

export const metadata: Metadata = {
  title: "About | Ranim Mohammad",
  description: "About page for you and me",
};

export default async function AboutPage() {

  return (
    <>
      <Header isLight />
      <main className="bg-white text-black w-full" style={{ clipPath: 'inset(0 0 0 0)' }}>
        <div className="md:px-[8vw] px-[5vw] w-full z-[10]">
          <section className="w-full flex flex-col">
            <section className="h-full p-[5vw] border-l-[1px] border-r-[1px] w-full border-borderLine flex flex-col text-h1 md:text-xxl flex flex-col justify-center items-start relative after:absolute after:content-[''] after:w-[300vw] after:bottom-[0] after:h-[1px] after:left-[-200px] after:bg-borderLine">
              <LoadinText text="About Me" className="text-h1 md:text-l" />
              <LoadinText text="Hi, I’m Ranim!" className="text-h2 md:text-xl"/>
            </section>
            <section className="h-full border-borderLine border-r-[1px] border-l-[1px] w-full flex flex-col gap-8">
              <div className="flex justify-center w-full flex-col md:flex-row gap-2 md:gap-8 border-borderLine">
                <AnimatedText text="A frontend developer focused on web development with a passion for creating user-friendly and efficient digital solutions. 
                Currently, I’m in my final year of ICT Media Design, specializing in frontend development and JavaScript. 
                While I’m always open to new challenges, I find satisfaction in designing intuitive user experiences and building scalable applications."
                  className="text-h4 md:text-h3 p-[5vw] " />
                <AnimatedText
                  className="text-h4 md:text-h3 p-[5vw] border-t-[1px] md:border-t-0 md:border-l-[1px] border-borderLine"
                  text="I’m organized and focused. Although I’m critical of my work, I aim for tangible results within tight deadlines. 
                  At the same time, I keep learning and improving to achieve my goals. My learning curve in problem-solving with JavaScript and improving my English continues to grow, and I’m not afraid to push my boundaries."
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
                                hover:cursor-pointer hover:before:-translate-y-full hover:text-white">
                      <div key={index} className={`p-[2vw] flex flex-row justify-between ${index === experience.length - 1 ? "border-b-0" : "border-b-[1px]"} items-center gap-2 p-2 md:p-5
                      group relative overflow-hidden before:absolute before:top-full before:left-0 before:h-full before:w-full
                      before:bg-mainTheme before:transition-transform before:duration-500 
                      hover:cursor-pointer hover:before:-translate-y-full hover:text-white
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
          </section>
        </div>
        <Blob isLight />
      </main>
    </>
  );
}
