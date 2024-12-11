export default function ProjectsSection() {
    return (
        <section className="w-full flex flex-col justify-center items-start bg-white border-borderLine border-t-2">
            <div className="px-[10dvw] w-full">
                <section className="text-black h-full w-full flex flex-col">
                    <div className="h-[70dvh] border-l-2 border-r-2  w-full border-borderLine flex flex-col text-h1 md:text-xxl h-[70dvh] flex flex-col justify-center items-start
                    relative after:absolute after:content-[''] after:w-[300dvw] after:bottom-[0] after:h-[2px] after:left-[-200px] after:bg-borderLine"
                    >
                        <p className="p-[5dvw]">Projects</p>
                    </div>
                    <section className="border-borderLine border-r-2 border-l-2 w-full
                    relative after:absolute after:content-[''] after:w-[300dvw] after:bottom-[0] after:h-[2px] after:left-[-200px] after:bg-borderLine
                    ">
                        <ol className="flex justify-center w-full gap-[2dvw] flex-col">
                            <li className="flex flex-col border-b-2 border-borderLine">
                                <div className="p-[3em] px-[5dvw] ">
                                    hiiii
                                </div>
                            </li>
                            <li className="flex flex-col border-b-2 border-borderLine">
                                <div className="p-[3em] px-[5dvw] ">
                                    hooo
                                </div>
                            </li>
                        </ol>
                    </section>
                    <section className="border-borderLine border-r-2 border-l-2 w-full">
                        <p>hiii</p>
                    </section>
                </section>
            </div>
        </section>
    );
}
