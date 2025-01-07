import { AnimatedText } from "@/components/animated-text";
import Blob from "@/components/blob";
import Header from "@/components/header";

export default async function AboutPage() {

  return (
    <>
      <Header isLight />
      <main className="bg-white text-black w-full" style={{ clipPath: 'inset(0 0 0 0)' }}>
        <div className="px-[10vw] w-full z-[10]">
          <section className="w-full flex flex-col">
            <div className=" h-full p-[5vw] border-l-[1px] border-r-[1px]  w-full border-borderLine flex flex-col text-h1 md:text-xxl flex flex-col justify-center items-start
            relative after:absolute after:content-[''] after:w-[300vw] after:bottom-[0] after:h-[1px] after:left-[-200px] after:bg-borderLine"
            >
              <h1> About me </h1>
              <p className="text-h2 md:text-xl">hii</p>
            </div>
            <section className="border-borderLine border-r-[1px] border-l-[1px] w-full flex flex-col gap-8  ">
              <div className="flex justify-center w-full flex-row gap-8 border-b-[1px] border-borderLine">
                <AnimatedText className="text-h4 md:text-h3 p-[5vw]"  text="hoo"/>

              </div>

            </section>
          </section>
        </div>
        <Blob isLight />
      </main>
    </>
  );
}
