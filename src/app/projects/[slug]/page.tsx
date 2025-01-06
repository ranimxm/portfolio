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
      <main className="bg-white text-black w-full" style={{ clipPath: 'inset(0 0 0 0)' }}>
        <div className="px-[10vw] w-full z-[10]">
          <section className="text-black w-full flex flex-col">
            <div className=" h-[80vh] p-[5vw] border-l-2 border-r-2  w-full border-borderLine flex flex-col text-h1 md:text-xxl flex flex-col justify-center items-start
            relative after:absolute after:content-[''] after:w-[300vw] after:bottom-[0] after:h-[2px] after:left-[-200px] after:bg-borderLine"
            >
              <h1> {project.title} </h1>
              <p className="text-h2 md:text-xl">{project.framework}</p>
            </div>
            <section className="border-borderLine border-r-2 border-l-2 w-full flex flex-col gap-8  ">
              <div className="flex justify-center w-full flex-col w-[70%] border-b-2 border-borderLine">
                <AnimatedText className="text-h4 md:text-h3 p-[5vw]"  text={project.description}/>
              </div>
              <div className={`grid gap-4 py-[10vh] px-[5vw] ${project.columns === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
                {project.images?.map((image, index) => (
                    <div key={index} className=" w-full h-full md:h-[80vh]">
                      <img
                        src={image}
                        alt={`Picture ${index + 1} from ${project.title}`}
                        className="h-full w-full"
                      />
                    </div>
                  ))}
              </div>
            </section>
          </section>
        </div>
        <Blob isLight />
      </main>
    </>
  );
}
