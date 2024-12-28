import { ChevronRight } from "@/assets/icons/chevronRight";
import Blob from "@/components/blob";

export default function ProjectsSection() {
    return (
        <section className="overflow-hidden w-full bg-white flex flex-col justify-center items-start border-borderLine border-t-2"
            style={{ clipPath: 'inset(0 0 0 0)' }}
        >
            <Blob />
            <div className="px-[10vw] w-full z-[10]">
                <section className="text-black h-full w-full flex flex-col">
                    <div className="h-[70vh] border-l-2 border-r-2  w-full border-borderLine flex flex-col text-h1 md:text-xxl h-[70vh] flex flex-col justify-center items-start
                    relative after:absolute after:content-[''] after:w-[300vw] after:bottom-[0] after:h-[2px] after:left-[-200px] after:bg-borderLine"
                    >
                        <p className="p-[5vw]">Projects</p>
                    </div>
                    <section className="border-borderLine border-r-2 border-l-2 w-full
                    relative after:absolute after:content-[''] after:w-[300vw] after:bottom-[0] after:h-[2px] after:left-[-200px] after:bg-borderLine
                    ">
                        <ol className="flex justify-center w-full flex-col">
                            <li className="flex flex-col md:flex-row border-b-2 border-borderLine h-[90vh] md:h-[50vh] items-center gap-2 p-2 md:p-5">
                                <figure className=" h-[50vh] md:h-full md:w-[30%] w-full">
                                    <div className="h-full w-auto bg-mainTheme"></div>
                                </figure>
                                <figcaption className="md:p-[3em] grow-[1] px-[5vw] text-h2 flex flex-col gap-2">
                                    <p>Lorem ipsum</p>
                                    <p>React Native, EJS, whatever</p>
                                </figcaption>
                                <div className="px-5 md:block hidden">
                                    <p> <ChevronRight/> </p>
                                </div>
                            </li>
                        </ol>
                    </section>
                    {/* footer here just a placeholder */}
                    <section className="border-borderLine border-r-2 border-l-2 w-full ">
                        <p>hiii</p>
                    </section>
                </section>
            </div>
        </section>
    );
}
