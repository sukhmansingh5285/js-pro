import { func } from "prop-types";
import React,{useReducer} from "react";

// count:0
// Increment(button)

function reducer(state, action){
  switch(action.type){
    case 'increment':
      return {...state,count: state.count+1};
      default:
        return state;
  }
}

function Counter () {
  const [state, dispatch] = useReducer(reducer, {count:0});

  return(
    <div>
    <p>Count: {state.count}</p>
    <button onClick={dispatch({type:'increment'})}>Increment</button>
    </div>
  )
}

/////////////////////////////////////////////////////
function ParentWrapper(){
  const shouldUseReducer = true;

  return(
    <div>
      {shouldUseReducer ? <Counter/> :<p>Conditional Count</p>}
    </div>
  );
}