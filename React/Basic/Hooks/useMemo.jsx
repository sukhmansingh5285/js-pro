//used to store complex data(which requires complex solutions), whereas useState is used to store simpler data
//useMemo => used to store value of a very complicated functions that we can't afford to run on every render/time, until there's a change in dependency.
import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for(let i=0; i<100; i++){
      console.log("hello")                  // heavy computation, that we don't want to render again&again
    }
    return num*2;
  };

  const memoizedValue = useMemo(()=>expensiveCalculation(count), [count])
  return (
    <div>
     <p>Count : {count}</p>
     <button className='bg-gray-400 p-1 m-1' onClick={()=>setCount(count+1)}>Increment Value</button>
     <p>Value of memoizedValue: {memoizedValue}</p>
    </div>
  )
}

export default App