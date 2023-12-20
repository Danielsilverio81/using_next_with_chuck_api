import { useState } from "react"

const HamburguerMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            
        </div>
    )
}