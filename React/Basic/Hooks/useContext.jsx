// createContext
import { createContext, useContext, useState } from "react";

const Theme_con = createContext('light');
const Auth_Con = createContext(null);

function Button(){
  const theme = useContext(Theme_con);
}

function as(){
  const currentUser = useContext(Auth_Con);
}
/////////////////////////////////////////////////////////

function App () {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value = {theme}>
      <Page /> // hypothetical component
    </ThemeContext.Provider>
  );
}

// how to use useContext in Page or any component within it
function Child () {
  const new_theme = useContext(ThemeContext);
  return <button className="{new_theme}" />;
}




