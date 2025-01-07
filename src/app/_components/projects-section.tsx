import { ChevronRight } from "@/assets/icons/chevronRight";
import { AnimatedText } from "@/components/animated-text";
import Blob from "@/components/blob";
import projects from "@/data/projects.json";
import Link from "next/link";

export default function ProjectsSection() {
    return (
        <section className="overflow-hidden w-full bg-white flex flex-col justify-center items-start border-borderLine border-t-[1px]"
            style={{ clipPath: 'inset(0 0 0 0)' }}
        >
            <Blob isLight/>
            <div className="px-[10vw] w-full z-[10]">
                <section className="text-black h-full w-full flex flex-col">
                    <div className="border-l-[1px] border-r-[1px]  w-full border-borderLine flex flex-col text-h1 md:text-xxl h-[65vh] flex flex-col justify-center items-start
                    relative after:absolute after:content-[''] after:w-[300vw] after:bottom-[0] after:h-[1px] after:left-[-200px] after:bg-borderLine"
                    >
                        <AnimatedText text="Projects" className="p-[5vw]"/>
                    </div>
                    <section className="border-borderLine border-r-[1px] border-l-[1px] w-full">
                        <ol className="flex justify-center w-full flex-col">
                            {projects.map((project, index) => (
                                <li key={project.id}>
                                    <Link href={`/projects/${project.slug}`} key={project.id}  className={`group hover:cursor-pointer flex flex-col md:flex-row 
                                        ${index === projects.length -1 ? "border-b-0" : "border-b-[1px]"} border-borderLine h-[80vh] md:h-[50vh] items-center gap-2 p-2 md:p-5`}>
                                        <figure className=" h-[50vh] md:h-full md:w-[30%] w-full px-[2vw]">
                                            <img src={project.image} alt={project.title} className="h-full w-auto object-cover"/>
                                        </figure>
                                        <div className="flex flex-col md:flex-row w-full md:w-[70%] justify-between px-[2vw] md:items-center">
                                            <figcaption className="md:p-[3em] grow-[1] text-h2 flex flex-col gap-8">
                                                <AnimatedText text={project.title} />
                                                <AnimatedText text={project.framework} />
                                            </figcaption>
                                            <div className="px-5 md:block hidden">
                                                <ChevronRight className="text-black group-hover:text-mainTheme group-hover:-translate-x-4 ease-out duration-300"/>
                                            </div>
                                        </div>
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
