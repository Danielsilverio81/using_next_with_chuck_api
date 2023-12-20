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
        const capitalizedRes = res.map(category => category.charAt(0).toUpperCase() + category.slice(1))
        setResponseCategory(capitalizedRes)
    }

    const handleCategoryJoke = async (event:React.ChangeEvent<HTMLInputElement>) => {
        const category = event.target.value.toLowerCase();
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
            className="flex flex-col md:flex-row flex-wrap md:gap-2  md:my-4 text-green-700 text-xs md:text-lg">
                {responseCategory?.map((category, id)=> (
                    <div className="md:m-2 md:p-1"
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
                <h2 className="text-white text-2xl">Fato Escolhido</h2>
                <span className="text-sm md:text-lg p-4 text-center text-indigo-950">
                {apiRes?.value}</span>
              </>
                )}
         </div>
       </>
    )
}

export default FormCategoryFetch