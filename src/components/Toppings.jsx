import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { motion } from 'framer-motion';

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];
  const parenetElement={
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{ 
        ease: "easeOut",
         duration: 1 , 
         delay: 1,
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
    <motion.div className="toppings container "
      variants={parenetElement}
      exit='exit'
      animate='visible'
      initial='hidden'
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping,index) => {
          const delay = index * 0.4; 
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
            variants={children}
             transition={{ ease: "easeOut", duration: 1 ,delay,type:'spring'}}>
              <span className={`${pizza.toppings.includes(topping) ? 'active' : ''}`}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button className='hover:bg-white hover:text-black hover:transition-all'
         initial={{x:'-100vw'}}
         animate={{x:0}}
         transition={{type:'spring',duration:1,delay:2}}
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
    </>
  )
}

export default Toppings;