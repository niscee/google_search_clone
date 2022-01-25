import React, { createContext, useState } from "react";

export const ResultContext = createContext();
const BASEURL = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultsContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("BorussiaDortmund");

  // fetching api regarding user search.
  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${BASEURL}/${type}/q=${searchTerm}&num=50`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "EU",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "eb7ee4d12fmshf4411ac76263c0ap12baf2jsn56248111f8e7",
      },
    });
    const data = await response.json();
    console.log(data);

    if (type === "search") {
      setResults(data.results);
    } else if (type === "images") {
      setResults(data.image_results);
    } else if (type === "news") {
      setResults(data.entries);
    }

    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};
