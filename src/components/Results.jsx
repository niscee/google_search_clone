import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router";
import { ResultContext } from "../contexts/ResultsContextProvider";
import Loading from "./Loading";

const Results = () => {
  const resultContext = useContext(ResultContext);
  const { results, isLoading, getResults, searchTerm } = resultContext;
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/image") {
      getResults("images");
    } else if (location.pathname === "/") {
      getResults("search");
    } else if (location.pathname === "/news") {
      getResults("news");
    } else {
      getResults("search");
    }
  }, [searchTerm, location.pathname]);

  if (!results) return <p>No Data Available</p>;
  if (isLoading) return <Loading />;

  // search page frontend.
  const SearchLayout = () => {
    return (
      <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
        {results ? (
          results.map((result, index) => {
            return (
              <div key={index} className="md:w-2/5 w-full">
                <a href={result.link} target="_blank" rel="noreferrer">
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                    {result.title}
                  </p>
                </a>
                <p className="text-sm dark:text-white-300">
                  {result.description}
                </p>
              </div>
            );
          })
        ) : (
          <p>we dont have it</p>
        )}
        {/* {results?.map(({ link, title }, index) => {
          return (
            <div key={index} className="md:w-2/5 w-full">
              <p className="text-sm dark:text-blue-300">
                {link.length > 30 ? link.substring(0, 30) : link}
              </p>
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          );
        })} */}
      </div>
    );
  };

  // news page frontend.
  const NewsLayout = () => {
    return (
      <div className="flex flex-wrap justify-between space-y-6 sm:px-56 text-center">
        {results?.map(({ links, link, source, id, title }, index) => {
          return (
            <div key={index} className="md:w-2/5 w-full">
              <a
                href={link}
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
      return (
        <div className="px-4 pb-32">
          <SearchLayout />
        </div>
      );
    case "/news":
      return (
        <div className="px-4 pb-32">
          <NewsLayout />
        </div>
      );
    case "/image":
      return (
        <div className="px-4 pb-32">
          <ImageLayout />
        </div>
      );
    default:
      return (
        <div className="px-4 pb-32">
          <p>error</p>
        </div>
      );
  }
};

export default Results;
