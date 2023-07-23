import React from 'react';
import { Link } from 'react-router-dom';
import { easeInOut, motion } from "framer-motion";

const Home = () => {
  return (
    <>
    <motion.div className="home container" 
      exit={{x:'-100vw'}}
   transition={{ ease: "easeOut"}}
    >
      <motion.h2 
  animate={{y:0,opacity:1}}
  initial={{y:93,opacity:0}}
   transition={{ ease: "easeOut", duration: 1 , delay: 3.2}}
 >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button className='hover:bg-white hover:text-black hover:transition-all' animate={{scale:1.2,opacity:1}}
        initial={{opacity:0}}
         transition={{ ease: "easeOut", duration: 1 , delay: 4}}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
    </>
  )
}

export default Home;