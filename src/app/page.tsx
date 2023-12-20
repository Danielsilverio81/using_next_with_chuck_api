import Image from "next/image";
import chuckImage from "../../public/The Wolf.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h1 className=" text-orange-400 text-xs md:text-lg text-center">
        Você ja conhece tudo sobre a Lenda viva de Chuck Norris?
      </h1>
      <div className="text-gray-300 mx-auto mt-5 flex flex-wrap md:flex-nowrap  bg-black w-fit md:w-3/4 p-2">
        <Image
        className=" h-36 w-24 mx-auto md:mx-1 md:h-auto md:w-80"
          src={chuckImage}
          alt="Picture of the Chuck Norris"
        />
        <div className="flex flex-col items-center">
          <p className=" p-2 m-2 text-sm lg:text-3xl text-center">
            Um fato curioso sobre esta lenda aguarda você!
          </p>
          <Link href='/jokes'
          className="mt-2 md:mt-10 text-sm lg:text-xl bg-amber-300 text-zinc-800 p-2 rounded-md">Vamos lá</Link>
        </div>
      </div>
    </section>
  );
}
