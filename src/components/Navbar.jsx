import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import IconButton from "../components/Icon"


import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full flex items-center justify-between lg:pt-3 lg:px-36 lg:mx-16 gap-4">
        <div className='flex flex-shrink-0 items-center lg:px-8 lg:mx-10'>          
        </div>
        <div className='m-8 flex gap-4 items-center justify-center text-2xl'>
          <a className="hover:text-violet-800 active:text-violet-500" href="https://www.linkedin.com/in/sreedev-v-021a6827b/">
            <IconButton text="Linkedin">
              <FaLinkedin size={25}/>
            </IconButton>
          </a>
          <a className="hover:text-violet-800 active:text-violet-500" href="https://github.com/Sreedev767">
            <IconButton text="Github">
              <FaGithub size={25}/>
            </IconButton>
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar;