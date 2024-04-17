import React from 'react';
import { motion } from "framer-motion";
import { PROJECTS } from '../constants';
import Slider from "react-slick";
import { Typography } from "@material-tailwind/react";

const Projects = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='lg:mt-60 py-40 font-thin'>
      <div className='h-100 pb-4 my-1' id='projects'>
        <motion.h1
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:-100}}
          transition={{duration:1}}
          className='lg:my-16 my-12 text-center font-thin text-4xl'>Projects</motion.h1>
      </div>
      <div className='lg:px-20 lg:mx-20'>
        <Slider {...settings}>
          {PROJECTS.map((project, index) => (
            <div key={index} className='h-[40vh] lg:p-10 lg:hover:bg-neutral-800 lg:hover:bg-opacity-35 rounded-2xl'>
              <motion.div
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:100}}
                transition={{duration:1}}
                className="mb-2 h-1/2 ">
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {project.title}
                </Typography>
                <Typography className='text-neutral-400'>
                  {project.description}
                </Typography>
              </motion.div>
              <motion.div
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:100}}
                transition={{duration:1}}
                className='py-24'>
                {project.technologies.map((tech, index) => (
                  <span key={index} className='mr-2 rounded bg-neutral-900 p-2 lg:text-[10px] md:text-[10px] text-[11px] font-medium text-violet-700'>{tech}</span>
                ))}
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
