import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router";
import { ResultContext } from "../contexts/ResultsContextProvider";
import Loading from "./Loading";
import { Link, Outlet } from "react-router-dom";

const Results = () => {
  const resultContext = useContext(ResultContext);
  const { results, isLoading, getResults, searchTerm } = resultContext;
  const location = useLocation();

  useEffect(() => {
    console.log(searchTerm);
    if (location.pathname === "/image") {
      // getResults("images");
    } else if (location.pathname === "/news") {
      // getResults("news");
    } else {
      // getResults("search");
    }
  }, [searchTerm, location.pathname]);

  if (!results) return <p>No Data Available</p>;
  if (isLoading) return <Loading />;

  // search page frontend.
  const SearchLayout = () => {
    return (
      <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
        {results?.map(({ link, title }, index) => {
          return (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm dark:text-blue-300">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          );
        })}
      </div>
    );
  };

  // news page frontend.
  const NewsLayout = () => {
    return (
      <div className="flex flex-wrap justify-between space-y-6 sm:px-56 text-center">
        {results?.map(({ links, source, id, title }, index) => {
          return (
            <div key={id} className="md:w-2/5 w-full">
              <a
                href={source?.href}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <p className="text-lg dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <div className="flex-gap-4">
                <a href={source?.href} targe="_blank" rel="noreferrer">
                  {source?.href}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // image page frontend.
  const ImageLayout = () => {
    return (
      <div className="flex flex-wrap justify-center items-center">
        {results?.map(({ image, link: { href, title } }, index) => (
          <a
            className="sm:p-3 p-5"
            href={href}
            key={index}
            target="_blank"
            rel="noreferrer"
          >
            <img src={image?.src} alt={title} loading="lazy" />
            <p className="w-36 break-words text-sm mt-2 dark:text-blue-300">
              {title}
            </p>
          </a>
        ))}
      </div>
    );
  };

  switch (location.pathname) {
    case "/":
      return <SearchLayout />;
    case "/search":
      return <SearchLayout />;
    case "/news":
      return <NewsLayout />;
    case "/image":
      return <ImageLayout />;
    default:
      return <p>error</p>;
  }
};

export default Results;
