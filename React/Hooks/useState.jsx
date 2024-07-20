// just like let,const but useState is stored all acroos the react program, 

import { useState } from "react";

const [count, setCount] = useState(0);

return(
  <button onClick={()=>setCount(count+1)}>Increase</button>
)