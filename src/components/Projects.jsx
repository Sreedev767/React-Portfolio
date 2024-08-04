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
    <div id='projects' className='font-thin'>
      <div className='h-100 pb-5' >
        <motion.h1
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:-100}}
          transition={{duration:1}}
          className='mt-16 mb-12 text-center font-thin lg:text-4xl text-3xl'>Projects</motion.h1>
      </div>
      <div className='lg:px-20 lg:mx-20'>
        <Slider {...settings}>
          {PROJECTS.map((project, index) => (
            <div key={index} className='h-[40vh] lg:p-10 lg:hover:bg-neutral-800 lg:hover:bg-opacity-35 rounded-2xl'>
              <motion.div
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:100}}
                transition={{duration:1}}
                className="mb-2 px-5 h-1/2 text-[14px]">
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
                className='py-24 px-5'>
                {project.technologies.map((tech, index) => (
                  <span key={index} className='mr-2 p-2 rounded bg-neutral-900 text-[10px] font-medium text-violet-700'>{tech}</span>
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
