import React from 'react';
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { container } from './Intro';
import { motion } from 'framer-motion';

const AnimatedTab = ({ label, isActive, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`cursor-pointer w-[50px] h-[50px] flex items-center justify-center relative ${
        isActive ? '' : 'hover:text-white/40'
      }`}
    >
      {isActive && (
        <motion.span
          layoutId="bubble"
          className="absolute inset-0 z-10 bg-white mix-blend-difference rounded-full"
          transition={{ type: "spring", bounce: 0.3, duration: 0.7 }}
        />
      )}
      {label}
    </motion.button>
  );
};

const Navbar2 = () => {
  const tabs = [
    { id: "/aboutme", label: <BiUser /> },
    { id: "/experience", label: <BsClipboardData /> },
    { id: "/", label: <BiHomeAlt /> },
    { id: "/projects", label: <BsBriefcase /> },
    { id: "/contact", label: <BsChatSquare /> }
  ];

  const [activeTab, setActiveTab] = React.useState(tabs[2].id);

  return (
    <motion.nav
      variants={container(2.1)}
      initial="hidden3"
      animate="visible3"
      className='overflow-hidden z-50 fixed bottom-2 w-full'
    >
      <div className="container mx-auto">
        <div className='flex flex-wrap justify-between items-center w-full bg-black/15 h-[66px] backdrop-blur-lg rounded-full max-w-[460px] mx-auto px-5 text-2xl'>
          {tabs.map(tab => (
            <Link
              key={tab.id}
              to={tab.id}
              spy={true}
              smooth={true}
              className='cursor-pointer'
              activeClass='active'
              offset={-70}
              onClick={() => setActiveTab(tab.id)}
            >
              <AnimatedTab
                label={tab.label}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar2;
