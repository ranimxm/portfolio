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
      <section className="h-[90vh] w-full flex flex-col justify-center items-start px-[5vw] pb-2">
        <div className="text-white w-full flex flex-col text-h1 md:text-l">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <LoadinText text="I turn ideas into" />
              <LoadinText text="reliable" />
              <LoadinText text="digital solutions" />
            </div>
            <LoadinText className="italic text-h2 md:text-xl" text="Ranim Mohammad" />
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
