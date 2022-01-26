import React from "react";
import { NavLink } from "react-router-dom";


const links = [
  { url: "/", text: "All 🕵" },
  { url: "/news", text: "News 📰" },
  { url: "/image", text: "Images 🖼️" },
];

const Links = () => {
  return (
    <div className="flex justify-center items-center mt-4 dark:text-blue-300">
      {links.map(({ url, text }, index) => {
        return (
          <NavLink key={index} to={url} className="m-3" activeclass="active">
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Links;
