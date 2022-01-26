import React, { useContext, useState } from "react";
import Links from "./Links";
import { ResultContext } from "../contexts/ResultsContextProvider";

const Search = () => {
  const { searchTermHandler } = useContext(ResultContext);
  const [text, setText] = useState("");

  // search term change handler.
  const textChangeHandler = (text) => {
    setText(text);
  };

  // submit handler.
  const submitHandler = (e) => {
    e.preventDefault();
    searchTermHandler(text);
  };

  return (
    <div className="flex flex-col basis-3/5 md:basis-2/4">
      <form onSubmit={submitHandler}>
        <div className="flex flex-col md:flex-row">
          <input
            type="text"
            value={text}
            placeholder="Search..."
            onChange={(e) => {
              textChangeHandler(e.target.value);
            }}
            className="outline-none py-2 px-2 md:w-full bg-gray border-0 border-b-2 text-black"
          />
          {text && (
            <button
              className="bg-white p-2"
              onClick={() => {
                setText("");
              }}
            >
              ❌
            </button>
          )}
          <button
            type="submit"
            className="bg-blue-500 py-1 md:px-3 md:py-0 text-white"
            title="search"
          >
            🔍
          </button>
        </div>
      </form>
      <Links />
    </div>
  );
};

export default Search;
