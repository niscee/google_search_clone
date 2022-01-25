import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "All 🕵" },
  { url: "/news", text: "News 📰" },
  { url: "/image", text: "Images 🖼️" },
];

const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }, index) => {
        return (
          <NavLink
            key={index}
            to={url}
            className="m-2"
            activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
          >
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Links;
