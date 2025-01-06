import { AnimatedText } from "@/components/animated-text";
import Blob from "@/components/blob";
import Header from "@/components/header";
import projects from "@/data/projects.json";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: { slug: string };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const {slug} = await(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound(); 
  }

  return (
    <>
      <Header isLight />
      <main className="bg-white text-black h-[90vh] w-full" style={{ clipPath: 'inset(0 0 0 0)' }}>
        <div className="px-[10vw] w-full z-[10]">
          <section className="text-black h-full w-full flex flex-col">
            <div className="p-[5vw] border-l-2 border-r-2  w-full border-borderLine flex flex-col text-h1 md:text-xxl h-[65vh] flex flex-col justify-center items-start
            relative after:absolute after:content-[''] after:w-[300vw] after:bottom-[0] after:h-[2px] after:left-[-200px] after:bg-borderLine"
            >
              <h1 className="text-xxl"> {project.title} </h1>
              <p className="text-xl">{project.framework}</p>
            </div>
            <section className="border-borderLine border-r-2 border-l-2 w-full">
              <div className="flex justify-center w-full flex-col p-[5vw] w-[70%]">
                <AnimatedText className="text-h3" text={project.description} />
              </div>
            </section>
          </section>
        </div>
        <Blob isLight />
      </main>
    </>
  );
}
