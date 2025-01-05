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
        <h1 className="text-xxl ">{project.title}</h1>
        <p className="text-xl">{project.framework}</p>
        <Blob isLight />
      </main>
    </>
  );
}
