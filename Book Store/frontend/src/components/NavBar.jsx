import React from 'react'
import { BiMenu } from "react-icons/bi";

function NavBar() {
    const onClick = () => {
        var el = document.querySelector('.nav-link')
        console.log(el.classList.toggle('hidden'))
    }
    return (
    <nav className="sticky flex items-center justify-between flex-wrap w-full bg-blue-500 pt-3 pl-6 pr-6 pb-3">
        <div className="flex items-center flex-shrink-0 text-white text-2xl font-bold mr-6">
            HT
        </div>
        <div className="block md:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-white text-2xl border-white hover:border-black hover:text-black cursor-pointer"
                onClick={onClick}
            >
                <BiMenu/>
            </button>
        </div>
        <div className="nav-link w-full block flex-grow md:flex md:items-center md:w-auto">
            <div className="text-sm md:flex-grow">
                <a href='/' className="block mt-4 md:inline-block md:mt-0 text-white hover:text-black mr-4">About Me</a>
                <a href='/bookstore' className="block mt-4 md:inline-block md:mt-0 text-white hover:text-black mr-4">Projects</a>
                <a href='/contact' className="block mt-4 md:inline-block md:mt-0 text-white hover:text-black mr-4">Contact Me</a>
            </div>
        </div>
    </nav>
  )
}

export default NavBar