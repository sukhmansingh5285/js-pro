// when parent component re-renders, child component re-renders too. so, if there a function that's not going to change (unless change in dependecy). we use useCallback.'
// as it stores the value in the cache and don't have to compute again and again. This can be particularly useful when passing functions as props to child components, preventing unnecessary re-renders of those children.

import { useCallback } from "react";

const memoized = useCallback(()=>{
  // apply whatever u want
},[]);