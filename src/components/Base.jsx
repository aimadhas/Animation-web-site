import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { motion } from 'framer-motion';

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
  const parenetElement={
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{ 
        ease: "easeOut",
         duration: 1 , 
         delay: 2,
         delayChildren: 0.4, 
        when:"beforeChildren",
        staggerChildren: 0.8,
    }
      
    },
    exit:{
      x:'100vw',
      transition:{ease:'easeOut',type:'spring'}
    }
  }
  const children ={
    hidden:{
      y:93,opacity:0
    },
    visible:{
      y:0,opacity:1
    },
  }

  return (
    <>
    <motion.div className="base container"
    variants={parenetElement}
    exit='exit'
    animate='visible'
    initial='hidden'
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base,index)=> {
           const delay = index * 0.4; 
          return (
            <motion.li 
              variants={children}
             transition={{type:'spring', ease: "easeOut", duration: 1 ,delay}}
             key={base} onClick={() => addBase(base)}>
              <span className={`${pizza.base === base ? 'active' : ''}`}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
        initial={{x:'-100vw'}}
        animate={{x:0}}
        transition={{type:'spring',duration:1}}
        >
          <Link to="/toppings">
            <button className='hover:bg-white hover:text-black hover:transition-all'>Next</button>
          </Link>
        </motion.div>
      )}

    </motion.div>
    </>
  )
}

export default Base;