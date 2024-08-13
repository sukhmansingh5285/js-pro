// used when whenever u want to reference a value that dosen't need to be rendered

// it dosen't re-render, almost same as useState

import { useRef } from "react";

function DemoRef () {
  const countRef = useRef(0);
  
  const handleIncrement = () => {
    setCount(count+1);
    countRef.current++;   // countRef.current is the way you can access, as u know useRef creates an object, so countRef is object
  }
}

 