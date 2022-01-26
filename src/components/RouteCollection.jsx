import React, { useState } from "react";
import Results from "./Results";
import { Routes, Route } from "react-router-dom";
import NoMatch from "./NoMatch";

const RouteCollection = () => {
  const routes_list = ["/", "/search", "/image", "/news"];
  return (
    <div className="p-4">
      <Routes>
        {routes_list.map((list, key) => {
          return <Route key={key} path={list} element={<Results />} />;
        })}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default RouteCollection;
