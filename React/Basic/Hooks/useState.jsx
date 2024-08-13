// just like let,const but useState is stored all acroos the react program, 

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>Count: {count}</p>
    </>
  );
}

export default Counter;