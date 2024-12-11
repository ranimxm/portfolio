import ProjectsSection from "./components/projects-section";

export default function Home() {
  return (
    <>
      <section className="h-[90dvh] w-full flex flex-col justify-center items-start px-[10dvw]">
        <div className="text-white w-full flex flex-col text-h1 md:text-xxl">
          <p>Ranim</p>
          <p>Mohammad</p>
        </div>
      </section>
      <ProjectsSection />
    </>
  );
}
