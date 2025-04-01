import { ChevronRight } from "@/assets/icons/chevron-right";
import { AnimatedText } from "@/components/animated-text";
import Blob from "@/components/blob";
import projects from "@/data/projects.json";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
    return (
        <section className="projects-section overflow-hidden w-full bg-white flex flex-col justify-center items-start border-borderLine border-t-[1px]"
            style={{ clipPath: 'inset(0 0 0 0)' }}
        >
            <Blob isLight/>
            <div className="px-[10vw] w-full z-[10]">
                <section className="text-black h-full w-full flex flex-col">
                    <div className="border-l-[1px] border-r-[1px]  w-full border-borderLine flex flex-col text-h1 md:text-xxl md:h-[65vh] h-[40vh] flex flex-col justify-center items-start
                    relative after:absolute after:content-[''] after:w-[300vw] after:bottom-[0] after:h-[1px] after:left-[-200px] after:bg-borderLine"
                    >
                        <AnimatedText text="Projects" className="p-[5vw]"/>
                    </div>
                    <section className="border-borderLine border-r-[1px] border-l-[1px] w-full">
                        <ol className="flex justify-center w-full flex-col">
                            {projects.map((project, index) => (
                                <li key={project.id} 
                                className="group relative overflow-hidden before:absolute before:top-full before:left-0 before:h-full before:w-full 
                                before:bg-[var(--bg-color)] before:transition-transform before:duration-500 
                                hover:cursor-pointer hover:before:-translate-y-full hover:text-white"
                                style={{
                                    '--bg-color': project.hoverColor
                                } as React.CSSProperties}>
                                    <Link href={`/projects/${project.slug}`} key={project.id}  className={`flex flex-col md:flex-row project-item
                                        ${index === projects.length -1 ? "border-b-0" : "border-b-[1px]"} border-borderLine h-[80vh] md:h-[50vh] items-center gap-2 p-2 md:p-5
                                         `}>
                                        <figure className=" h-[50vh] z-[30] md:h-full md:w-[30%] w-full px-[2vw] overflow-hidden">
                                            <Image src={project.image} width={500} height={0} alt={project.title[0]} className="h-full w-auto object-cover transform transition-transform duration-300 group-hover:scale-110"/>
                                        </figure>
                                        <figcaption className="flex flex-col md:flex-row w-full md:w-[70%] justify-between px-[2vw] md:items-center">
                                            <div className="md:p-[3em] grow-[1] text-h2 flex flex-col md:gap-8 gap-4 group-hover:-translate-x-4 ease-out duration-300">
                                                <p>{project.title}</p>
                                                <p className="text-fontColor group-hover:text-white">{project.framework}</p>
                                            </div>
                                            <div className="px-5 md:block hidden">
                                                <ChevronRight className="text-black group-hover:text-white group-hover:-translate-x-4 ease-out duration-300"/>
                                            </div>
                                            <div className="pt-5 md:hidden flex flex-row gap-2 group-hover:-translate-x-4 ease-out duration-300">
                                                <p>View more</p>
                                                <ChevronRight className="text-black group-hover:text-white group-hover:-translate-x-4 ease-out duration-300" />
                                            </div>

                                        </figcaption>
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </section>
                </section>
            </div>
        </section>
    );
}
