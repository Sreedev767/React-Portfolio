import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id='experience'>
      <motion.h2
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1}}
        className='lg:my-16 my-12 text-center font-thin text-4xl'>Experience</motion.h2>
      
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-4 flex flex-wrap lg:justify-center md:justify-center">

            <motion.div
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: -100}}
              transition={{duration: 1}}
              className="w-full lg:w-1/4 md:w-1/4 p-4">
              <p className='text-sm text-neutral-400 font-thin'>{experience.year}</p>
            </motion.div>

            <motion.div
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: 100}}
              transition={{duration: 1}}
              className="w-full max-w-xl lg:w-3/4 md:w-3/4 lg:hover:bg-neutral-800 lg:hover:bg-opacity-35 rounded-2xl cursor-pointer font-thin p-4">
              <h6 className='mb-2 font-semibold'>{experience.role} -{" "}
                <span className='text-purple-100'>{experience.company}</span>
              </h6>
              <p className='mb-4 text-neutral-400'>{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 lg:text-sm text-[11px] font-medium text-violet-700'>{tech}</span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
