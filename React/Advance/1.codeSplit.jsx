// component as promise, lazyload and suspense
// Static Import: import {} from './...'; - Loads the module at the initial load time., line 6 -> loads on demand(dynamic loading)

import React, {Suspense} from 'react'
// code splitting / Dynamic Import:-
import('./1math').then((result)=>{
  console.warn("result", result.add(20,30));
})
// use React.lazy to lazily load the component, use Suspense component to wrap the imported component and provides the fallback UI when component is loading
const About = React.lazy(()=>import("./About")) // now to use lazyLoad, we need suspension, 

const codeSplit = () => {
  return (
    <Suspense fallback={<div>Wait to load</div>}> 
      <About />
    </Suspense>
  );
};

export default codeSplit

//////////////////////////////////////////////////////////////////////FRAGMENTS////////////////////////////////////////////////////////////////////////////////

// fragments removes an extra element in the DOM (generally the div)