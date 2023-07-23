import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Intro() {
  const parentelemnt ={
    hidden:{
      scale:1
    },
    visible:{
      scale:[1,1.5,1.,1.5,1],
      transition:{duration:0.4,ease:'easeInOut',delay:2},
      when:"afterChildren",
    }
  }
  const buttonelemnt ={
    hidden:{
      y:20,opacity:0
    },
    visible:{
      y:0,opacity:1,
      transition:{delay:2.8,duration:0.8,type:'spring'}
    },
    hover:{
      scale: 1.2,textShadow:"0px 0px 8px rgb(255,255,255)", boxShadow:'0px 0px 8px rgb(255,255,255)',
      transition:{duration:0.8,type:'spring'}
    },
    exit:{
      y:20,opacity:0,
      transition:{ease:'easeOut',type:'spring',delay:2}
    }
  }
  return (
    <div className='w-full h-screen flex justify-center items-center gap-5 flex-col'>
        <motion.svg className="pizza-intro " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
        variants={parentelemnt}
        initial='hidden'
        animate='visible'
        exit='exit'
        drag
  dragTransition={{ min: 0, max: 0 }}
        >
          <motion.path
          initial={{
            opacity:0,
            pathLength:0
          }}
          animate={{
            opacity:1,
            pathLength:1
          }}
          transition={{duration:2,ease:'easeInOut'}}
          exit={{pathLength:0,opacity:0}}

            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
          initial={{
            opacity:0,
            pathLength:0
          }}
          animate={{
            opacity:1,
            pathLength:1
          }}
          transition={{duration:2,ease:'easeInOut'}} 
          exit={{pathLength:0,opacity:0}}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
        <Link to='/home'>        
        <motion.button
        variants={buttonelemnt}
        initial='hidden'
        animate='visible'
        whileHover="hover"
        exit='exit'
        >start</motion.button>
        </Link>
      </div>
  )
}
