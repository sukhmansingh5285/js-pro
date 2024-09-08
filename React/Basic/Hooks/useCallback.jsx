// when parent component re-renders, child component re-renders too. so, if there a function that's not going to change (unless change in dependecy). we use useCallback.'
// as it stores the value in the cache and don't have to compute again and again. This can be particularly useful when passing functions as props to child components, preventing unnecessary re-renders of those children.

import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Click me</button>;
});

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default App;

/*
In Summary
React.memo: Memoizes a functional component to prevent unnecessary re-renders. It only re-renders the 
component if its props change.
useCallback: Memoizes a function to prevent unnecessary re-creations, especially useful when 
passing functions as props to memoized components.
*/