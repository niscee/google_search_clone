import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap justify-center sm:justify-between items-center border-b-4 dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-3xl bg-gray-400 tracking-wider font-bold text-white py-2 px-2 rounded dark:bg-gray-200 dark:text-gray-900">
            Gogl 🔎
          </p>
        </Link>
        <button
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-4 py-2 hover:shadow-xl"
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? "Light 🕯" : "Dark 🌚"}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
