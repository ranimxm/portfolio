import { AnimatedText } from "@/components/animated-text";
import Blob from "@/components/blob";
import Header from "@/components/header";
import { LoadinText } from "@/components/loadin-text";
import projects from "@/data/projects.json";
import Image from "next/image";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: { slug: string };
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const {slug} = await(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The project you are looking for does not exist.",
    };
  }

  return {
    title: `${project.title} | Ranim Mohammad`,
    description: "Details about the project.",
  };
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
      <main className="bg-white text-black w-full" style={{ clipPath: 'inset(0 0 0 0)' }}>
        <div className="px-[10vw] w-full z-[10]">
          <section className="w-full flex flex-col">
            <div className=" h-full p-[5vw] border-l-[1px] border-r-[1px]  w-full border-borderLine flex flex-col text-h1 md:text-xxl flex flex-col justify-center items-start
            relative after:absolute after:content-[''] after:w-[300vw] after:bottom-[0] after:h-[1px] after:left-[-200px] after:bg-borderLine"
            >
              <LoadinText text={project.title} className="text-h1 md:text-l"/>
              <LoadinText text={project.framework} className="text-h2 md:text-xl"/>
            </div>
            <section className="border-borderLine border-r-[1px] border-l-[1px] w-full flex flex-col gap-8  ">
              <div className="flex justify-center w-full flex-col md:flex-row gap-8 border-b-[1px] border-borderLine">
                <AnimatedText className="text-h4 md:text-h3 p-[5vw]" text={project.summary}/>
                {project.link &&(
                  <AnimatedText className="text-h4 md:text-h3 md:w-[70%] w-full p-[5vw] border-t-[1px] md:border-t-0 md:border-l-[1px] border-borderLine" text={project.link} isLink={true}/>
                )}
              </div>
              <div className={`grid gap-4 py-[10vh] px-[5vw] ${project.columns === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
                {project.images?.map((image, index) => (
                    <div key={index} className=" w-full h-full md:h-[80vh]">
                      <Image width={500} height={0}
                        src={image}
                        alt={`Picture ${index + 1} from ${project.title}`}
                        className="h-full w-full"
                      />
                    </div>
                  ))}
              </div>
              <div>
                <AnimatedText className="text-h4 md:text-h3 pb-[5vh] px-[5vw]" text={project.description}/>
              </div>
            </section>
          </section>
        </div>
        <Blob isLight />
      </main>
    </>
  );
}
