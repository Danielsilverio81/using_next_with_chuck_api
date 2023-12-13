import Image from "next/image";
import chuckImage from "../../public/The Wolf.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="mx-2 my-2 text-orange-400 text-lg text-center">
        Você ja conhece tudo sobre a Lenda viva de Chuck Norris?
      </h1>
      <section className="text-gray-300 mx-auto mt-5 flex bg-black w-3/5 p-2">
        <Image
          src={chuckImage}
          height={200}
          width={300}
          alt="Picture of the Chuck Norris"
        />
        <div className="flex flex-col items-center">
          <p className=" p-3 text-4xl text-center">
            Um fato curioso sobre esta lenda aguarda você!
          </p>
          <Link href='/jokes'
          className="mt-10 text-xl bg-amber-300 text-zinc-800 p-2 rounded-md">Vamos lá</Link>
        </div>
      </section>
    </main>
  );
}
