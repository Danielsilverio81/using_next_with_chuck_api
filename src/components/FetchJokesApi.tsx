const url = process.env.NEXT_PUBLIC_URLAPICHUCK;

export type JokesResponse = {
  id: string;
  value: string;
};



const JokeComponent = async () => {
  await new Promise(resolve => setTimeout(resolve, 1500))

  const res: JokesResponse = await fetch(`${url}`, { cache: 'no-store' }).then(res => res.json())

  return (
    <>
      <span className="text-center text-sm md:text-2xl mx-auto p-2">{res?.value}</span>
    </>
  )
}


export default JokeComponent