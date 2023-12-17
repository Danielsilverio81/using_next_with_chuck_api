"use client"
import { useEffect, useState } from "react";


const url = process.env.NEXT_PUBLIC_URLAPICHUCK;

export type JokesResponse = {
  id: string;
  value: string;
};



const JokeComponent = () => {
  const [joke, setJoke] = useState<JokesResponse | null>(null)

  const FetchJoke = async() => {
      const res: JokesResponse= await fetch(`${url}`, {cache: 'no-store'}).then((res) => res.json())
      setJoke(res)
  };

  useEffect(()=> {
    FetchJoke()
  },[])

  return (
    <>
    <span className="text-center text-2xl mx-auto p-2">{joke?.value}</span>
    </>
  )
}


export default JokeComponent