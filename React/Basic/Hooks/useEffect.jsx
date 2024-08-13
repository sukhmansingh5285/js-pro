import { useEffect } from "react";

useEffect(()=>{},[])  
useEffect(()=>{
  // The code that we want to run

  // Optional return function
}, []) //dependany array(also optional), // if not provided dependencies, it will run at least once




// practice code
import React, {useState, useEffect} from 'react';

export function App(props) {
  const[count, setCount] = useState(56);
  const[coun, setCoun] = useState(0);

  useEffect(()=>{
    console.log(`value of count is ${count/2}`)
  },[count,coun])

  function handleClick(){
    setCount((prev)=>{return prev+1})
  }

  function handleClic(){
    setCoun(prev => prev+1)
  }

  return (
    <div className='App'>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleClic}>Increment</button>
      <h2>hey bro, {count}</h2>
      <h2>hey new bro, {coun}</h2>
    </div>
  );
}