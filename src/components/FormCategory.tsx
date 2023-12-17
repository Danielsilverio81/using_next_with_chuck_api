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
        setSelectedCategory(event.target.value)
        const res: ApiObjectRes = await fetch(`${urlCategoryChoice}=${selectedCategory}`).then(res => res.json())
        setApiRes(res)
    }

    useEffect(()=>{
        fetchCategory()
    }, [])
    return (
        <div>
            <form
            className="">
                {responseCategory?.map((category, id)=> (
                    <div key={id}>
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
            {apiRes && (
                <div>
                <h2>Fato Escolhido</h2>
                <span>{apiRes?.value}</span>
                </div>
            )}
        </div>
    )
}

export default FormCategoryFetch