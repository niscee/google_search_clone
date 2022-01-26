import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RouteCollection from "./components/RouteCollection";
import "./style.css";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-white-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen relative">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <RouteCollection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
