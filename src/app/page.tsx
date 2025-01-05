import { ArrowDown } from "@/assets/icons/arrowDown";
import ProjectsSection from "./components/projects-section";

export default function Home() {
  return (
    <>
      <section className="h-[90vh] w-full flex flex-col justify-center items-start px-[10vw]">
        <div className="text-white w-full flex flex-col text-h1 md:text-xxl">
          <div>
            <p>Ranim</p>
            <p>Mohammad</p>
          </div>
          <div className="md:text-h1 text-h3 flex gap-2 justify-end items-center">
            <ArrowDown />
            <p>scroll</p>
          </div>
        </div>
      </section>
      <ProjectsSection />
    </>
  );
}
