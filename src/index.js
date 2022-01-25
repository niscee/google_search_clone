import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ResultsContextProvider } from "./contexts/ResultsContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ResultsContextProvider>
        <App />
      </ResultsContextProvider>
    </Router>
  </React.StrictMode>,

  document.getElementById("root")
);
