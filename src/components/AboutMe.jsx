import React from 'react';
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";
import about from '../assets/about.png'

const AboutMe = () => {
  return (
    <div id='aboutme' className='pb-16'>
      <motion.h1
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1}}
      className='mt-16 mb-12 text-center font-thin lg:text-4xl text-3xl'>
        About
        <span className='text-neutral-500'> Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:0.8}}
          className="w-full lg:w-1/2 lg:ps-60 ">
            <img src={about} alt="" height="400" width="400"/>
        </motion.div>
        <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:100}}
          transition={{duration:0.8}}
          className="w-full lg:w-1/2 lg:p-8 p-2">
          <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start">
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text lg:text-3xl text-2xl tracking-tight text-transparent pt-8">Full stack developer</span>
            <p className='my-2 max-w-xl py-8 font-light lg:text-[16px] text-[14px]'>{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
