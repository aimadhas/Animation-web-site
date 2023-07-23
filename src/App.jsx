import {  Routes, Route,useLocation } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import Order from './components/Order'
import Base from './components/Base' 
import Toppings from './components/Toppings'
import Intro from "./components/Intro";
import './App.css'
import { useState,useEffect } from 'react'
import { AnimatePresence } from "framer-motion";
import Model from "./components/Model";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showheader,setheader] = useState(false)
const location = useLocation()
  const [showpop,setshowpop] = useState(false)
  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }
  useEffect(() => {
    if (location.pathname === '/') {
      setheader(false);
    } else {
      setTimeout(()=>{
        setheader(true);
      },2500)
    }
  }, [location.pathname]);

  
  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }


  return (
    <AnimatePresence mode="sync" onExitComplete={()=>{setshowpop(false)}}  >
      {showheader && 
          <Header></Header> 
      }
          <Model showpop={showpop}></Model>
      <Routes location={location} key={location.key}>
         <Route path="/" element={<Intro></Intro>}></Route>
         <Route path="/home" element={<Home></Home>}></Route>
     <Route path="/base" element={<Base  addBase={addBase} pizza={pizza} ></Base>}></Route>
      <Route path="/toppings" element={<Toppings addTopping={addTopping}  pizza={pizza} ></Toppings>}></Route>
      <Route   path="/order" element={ <Order pizza={pizza} setshowpop={setshowpop} showpop={showpop}  />}></Route> 
      </Routes>
    </AnimatePresence>
  )
}

export default App
