// createContext, useContext , Provider, value
// ThemeContext.js
import React, { createContext } from 'react';

const ThemeContext = createContext('light');

export default ThemeContext;

// App.js
import React from 'react';
import ThemeContext from './ThemeContext';
import ChildComponent from './ChildComponent';

const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <ChildComponent />
    </ThemeContext.Provider>
  );
};

export default App;


// ChildComponent.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ChildComponent = () => {
  const theme = useContext(ThemeContext);
  return <div>The current theme is {theme}</div>;
};

export default ChildComponent;