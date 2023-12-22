import JokeComponent from "@/components/FetchJokesApi";
import Image from "next/image";
import { Suspense } from "react";

const containerImageStyle = "w-full mx-auto p-2 bg-slate-100 flex flex-col md:flex-row items-center"

const JokesPage = () => {
  return (
    <section className="w-[760px]">
      <h2 className="text-sm md:text-3xl text-center text-orange-400">
        Você Sabia
      </h2>
      <div className={containerImageStyle}>
        <Image
          className="border-2 border-black"
          src="/chuckremovebg.png"
          width={250}
          height={250}
          alt="Chuck Norris anime image"
        />
        <Suspense
          fallback={<p className="text-red-300">Carregando dados...</p>}
        >
          <JokeComponent />
        </Suspense>
      </div>
    </section>
  );
};

export default JokesPage;
