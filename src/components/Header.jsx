import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1,type:'spring'}}
    >
      <Link to='/'>   
      <div className="logo">
        <svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <path 
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </svg>
      </div>
      </Link>
      <div className="title">
        <h1>Pizza Joint</h1>
      </div>
    </motion.header>
  )
}

export default Header;