"use client"

import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Link from "next/link";

const linkStyles = `hover:text-white text-sm md:text-2xl`

const HamburguerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
       onClick={toggleMenu}>
        <GiHamburgerMenu />
      </button>
      {isOpen && (
        <ul className="flex gap-4 text-xs">
          <li>
            <Link className={linkStyles} href="/">
              Home page
            </Link>
          </li>
          <li>
            <Link className={linkStyles} href="/jokes">
              Fatos
            </Link>
          </li>
          <li>
            <Link className={linkStyles} href="/jokescategory">
              Fatos por categoria
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default HamburguerMenu