import Blob from "@/components/blob";
import Header from "@/components/header";
import projects from "@/data/projects.json";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: { id: string };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const {id} = await(params);
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return notFound(); 
  }

  return (
    <>
      <Header />
      <main className="bg-white text-black h-[90vh] w-full">
        <h1 className="text-xxl ">{project.title}</h1>
        <p className="text-xl">{project.framework}</p>
      </main>
      <Blob />
    </>
  );
}
