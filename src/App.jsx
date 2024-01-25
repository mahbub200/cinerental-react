import { Fragment, useState } from "react";
import "./App.css";

import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";
function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [cartData, setCartData] = useState([]);
  return (
    <Fragment className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <Page></Page>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </Fragment>
  );
}

export default App;
