import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="pt-5 pb-4 bg-gray-100 drop-shadow-lg flex-wrap justify-center sm:justify-between items-center min-w-full sticky top-0 z-10 dark:bg-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-x-5  w-[80%] m-auto">
        <Link to="/">
          <p className="text-3xl tracking-wider font-bold text-blue-600 py-2 px-2 rounded dark:text-blue-300">
            GOGL 🔎
          </p>
        </Link>
        <Search />
        <button
          className="text-xl dark:bg-gray-50 text-blue-500 font-bold bg-white border rounded-md px-6 py-2 hover:shadow-xl"
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? "Light 🕯" : "Dark 🌚"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
