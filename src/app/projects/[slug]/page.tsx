import { ArrowLink } from "@/assets/icons/arrow-link";
import { AnimatedText } from "@/components/animated-text";
import Blob from "@/components/blob";
import Header from "@/components/header";
import { LoadinText } from "@/components/loadin-text";
import projects from "@/data/projects.json";
import Image from "next/image";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{ slug: string; }>;
}
export async function generateMetadata({ params }: ProjectPageProps) {
  const {slug} = await params;
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
  const {slug} = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound(); 
  }
  const desktopImages = project.images?.filter(img => img.type === "desktop") || [];
  const mobileImages = project.images?.filter(img => img.type === "mobile") || [];


  return (
    <>
      <Header isLight />
      <main className="bg-white text-black w-full" style={{ clipPath: 'inset(0 0 0 0)' }}>
        <div className="md:px-[8vw] px-[5vw] w-full z-[10]">
          <section className="w-full flex flex-col">
            <div className=" h-full p-[5vw] border-l-[1px] border-r-[1px]  w-full border-borderLine flex flex-col text-h1 md:text-xxl flex flex-col justify-center items-start
            relative after:absolute after:content-[''] after:w-[300vw] after:bottom-[0] after:h-[1px] after:left-[-200px] after:bg-borderLine work-item"
            >
              <LoadinText text={<>{project.title[0]}<br />{project.title[1]}</>} className="text-h1 md:text-l"/>
              <LoadinText text={project.framework} className="text-fontColor text-h2 md:text-xl"/>
            </div>
            <section className="border-borderLine border-r-[1px] border-l-[1px] w-full flex flex-col gap-8  ">
              <div className="flex justify-center w-full flex-col md:flex-row md:gap-8 gap-6 border-b-[1px] border-borderLine">
                <AnimatedText className="text-h4 md:text-h3 md:p-[5vw] p-[3vw]" text={project.summary}/>
                {project.link && (
                  <div className="flex flex-row justify-center items-center gap-2 md:w-[70%] w-full md:p-[3vw] p-[5vw] border-t-[1px] md:border-t-0 md:border-l-[1px] border-borderLine">
                    <AnimatedText className="text-h4 md:text-h3 " text={project.link} isLink={true} />
                    <ArrowLink />
                  </div>
                )}
              </div>
              {project.video && (
                <div className="w-full py-[5vh] px-[3vw] md:px-[5vw]">
                  <div className="w-full md:aspect-video bg-none aspect-[9/16]">
                    <video autoPlay muted loop playsInline className="w-full h-full object-contain" poster={project.thumbnail}>
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}
                <AnimatedText className="text-h4 md:text-h3 pb-[5vh] px-[5vw]" text={project.description} />
                {desktopImages.length > 0 && (
                  <div className="grid gap-4 py-[5vh] md:px-[5vw] px-[3vw] grid-cols-1">
                    {desktopImages.map((image, index) => (
                      <div key={`desktop-${index}`} className="w-full h-auto">
                        <Image
                          width={1500}
                          height={0}
                          src={image.src}
                          alt={`Desktop screenshot ${index + 1} from ${project.title}`}
                          className="h-full w-full"
                        />
                      </div>
                    ))}
                  </div>
                )}
                {mobileImages.length > 0 && (
                  <div className="grid gap-4 py-[5vh] md:px-[5vw] px-[3vw] grid-cols-1 md:grid-cols-2">
                    {mobileImages.map((image, index) => (
                      <div key={`mobile-${index}`} className="w-full h-auto">
                        <Image
                          width={750}
                          height={0}
                          src={image.src}
                          alt={`Mobile screenshot ${index + 1} from ${project.title}`}
                          className="h-full w-full"
                        />
                      </div>
                    ))}
                  </div>
                )}
            </section>
          </section>
        </div>
        <Blob isLight />
      </main>
    </>
  );
}
