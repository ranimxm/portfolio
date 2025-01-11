import { ArrowDown } from "@/assets/icons/arrow-down";
import ProjectsSection from "./_components/projects-section";
import Blob from "@/components/blob";
import Header from "@/components/header";
import { LoadinText } from "@/components/loadin-text";

export default function Home() {
  return (
    <>
      <Header />
      <Blob />
      <section className="h-[90vh] w-full flex flex-col justify-center items-start px-[10vw]">
        <div className="text-white w-full flex flex-col text-h1 md:text-xxl">
          <div>
            <LoadinText text="Ranim" />
            <LoadinText text="Mohammad" />
          </div>
          <div className="md:text-h1 text-h3 flex gap-2 justify-end items-center">
            <p>scroll</p>
            <ArrowDown />
          </div>
        </div>
      </section>
      <ProjectsSection />
    </>
  );
}
