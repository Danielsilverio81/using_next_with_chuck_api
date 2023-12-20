"use client"

import React, { useEffect, useState } from "react"

const urlCategory = process.env.NEXT_PUBLIC_URLAPICHUCKCATEGORY
const urlCategoryChoice = process.env.NEXT_PUBLIC_URLAPICHUCKCATEGORYCHOICE

interface ApiObjectRes {
    id: string
    value: string
}

const FormCategoryFetch = () => {
    const [responseCategory, setResponseCategory] = useState<string[]>([])
    const [selectedCategory, setSelectedCategory] = useState('');
    const [apiRes, setApiRes] = useState<ApiObjectRes | null>(null)
    const fetchCategory = async () => {
        const res:string[] = await fetch(`${urlCategory}`).then(res => res.json())
        setResponseCategory(res)
    }

    const handleCategoryJoke = async (event:React.ChangeEvent<HTMLInputElement>) => {
        const category = event.target.value;
        setSelectedCategory(category);
        const res: ApiObjectRes = await fetch(`${urlCategoryChoice}=${category}`).then(res => res.json())
        setApiRes(res)
    }

    useEffect(()=>{
        fetchCategory()
    }, [])
    return (
       <>
        <div className="flex flex-col">
            <form
            className="flex flex-wrap gap-2 my-5">
                {responseCategory?.map((category, id)=> (
                    <div className="m-2 p-2"
                     key={id}
                    >
                        <label htmlFor={category}>{category}</label>
                        <input type="radio"
                         id={`${id}`}
                         name={category}
                         value={category}
                         checked = {selectedCategory === category}
                         onChange={handleCategoryJoke} />
                    </div>
                ))}
            </form>
        </div>
        <div className="m-2 p-5 w-4/5 h-72 border-2 border-orange-300">
            {apiRes && (
              <>
                <h2>Fato Escolhido</h2>
                <span className="text-sm md:text-lg p-4 text-center text-emerald-200">{apiRes?.value}</span>
              </>
                )}
         </div>
       </>
    )
}

export default FormCategoryFetch