//used to store complex data(which requires complex solutions), whereas useState is used to store simpler data
import React, { useMemo, useState } from 'react';

function App() {
  let fullmarks = 600;
  const [marks, setMarks] = useState(549);
  const percent = useMemo(()=>{
    return ((marks/fullmarks)*100);
  },marks)

  return (
    <div>
      <p>Sukhman Marks: {marks}</p>
      <button onClick={() => setMarks(marks + 10)}>Add 10</button>
      <p>Sukhman Percentage: {percent} %</p>
    </div>
  );
}

export default App;
