import JokeComponent from "@/components/FetchJokesApi"
import Image from "next/image"

const JokesPage = () => {
    return (
        <section>
            <h2 className="text-sm md:text-3xl text-center text-orange-400">Você Sabia</h2>
            <div className="mx-14 my-8 p-2 bg-slate-100 flex items-center">
                <Image
                className="border-2 border-black"
                src='/chuckremovebg.png' 
                width={250}
                height={250}
                alt="Chuck Norris anime image"/>
                <JokeComponent />
            </div>
        </section>
    )
}

export default JokesPage