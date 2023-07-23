import React from 'react';
import Header from './Header';
import { motion,AnimatePresence } from 'framer-motion';
import { useState,useEffect } from 'react';

const Order = ({ pizza,setshowpop }) => {

  useEffect(()=>{
    setTimeout(()=>{
      setshowpop(true)
    },4000)
  },[])



  const ParentElement = {
    hidden:{
      x:'100vw'
    },
    visible:{
      x:0,
      transition: {
        duration:1,
        type:'spring',
        delayChildren: 0.4, // child elements (list items) will start their animation after a 0.5-second delay when transitioning to the show state.
        when:"beforeChildren",
        staggerChildren: 0.8, // The time between each child's animation start
      }
    }

  }
  const childreen = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition: {
        duration:1,
        type:'spring'
      }
    }

  }
  return (
    <> 
    <motion.div
    variants={ParentElement}
    initial="hidden"
    animate='visible'
     className="container order">
      <h2>Thank you for your order :)</h2>
      <motion.p 
      variants={childreen}
      >You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childreen}>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
    </>
  )
}

export default Order;