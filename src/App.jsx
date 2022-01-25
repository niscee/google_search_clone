import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RouteCollection from "./components/RouteCollection";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dakr:text-gray-200 min-h-screen relative">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <RouteCollection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
