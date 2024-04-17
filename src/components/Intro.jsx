import React from 'react'
import { motion } from "framer-motion"
import { BiDownload } from "react-icons/bi";
import CV from '../assets/CV.pdf'

export const container =(delay)=>({
  hidden:{ x:-100, opacity:0},
  visible:{ x:0,opacity:1,
    transition:{duration:1,delay:delay}
  },
  hidden2:{ y:0, opacity:0},
  visible2:{ y:0,opacity:1,
    transition:{duration:1.5,delay:delay}
  },
  hidden3:{ y:100, opacity:0},
  visible3:{ y:0,opacity:1,
    transition:{duration:0.5,delay:delay}
  },
})



const Intro = () => {
  return (
    <div className='h-[80vh] lg:ms-16'>
      <div className="flex flex-col items-start lg:px-40 lg:mb-32 px-6 ">   

           <motion.span 
           variants={container(0)}
           initial="hidden"
           animate="visible"
           className="font-mono bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-md lg:text-2xl tracking-tight text-transparent mt-16 ">hi, i'm sreedev.</motion.span>

           <motion.h1 
           variants={container(1.5)}
           initial="hidden"
           animate="visible"
           className=' tracking-tight text-4xl lg:text-5xl md:text-4xl mt-1 '>i build stuff for the web 
           </motion.h1>

           <motion.h1 
           variants={container(1.8)}
           initial="hidden"
           animate="visible"
           className=' tracking-tight text-4xl lg:text-5xl md:text-4xl pb-4 mt-1'>
           using react, javascript and node. 
           </motion.h1>

           <motion.a 
           variants={container(2.8)}
           initial="hidden2"
           animate="visible2"
           href="https://drive.google.com/drive/folders/17HblJCT6TSGOWh0--VSHmuiWGxt5tdUS?usp=sharing" download target='blank'>
            <div className='p-2 mt-2 gap-4 text-[9px] md:text-sm lg:text-md flex flex-wrap items-center rounded-lg text-neutral-300 hover:text-violet-800 active:animate-bounce hover:cursor-pointer border border-neutral-800 border-y-transparent hover:shadow-inner hover:shadow-violet-900 active:text-violet-500 font-light'>
              <p>Download CV</p>
              <BiDownload/>  
            </div>          
          </motion.a>
         </div>
         
    </div>
  )
}

export default Intro