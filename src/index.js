import React from "react";
import ReactDOM from "react-dom";

import "./assets/main.scss";
import { NoImageActionCard } from "../lib/components";

const wrapper = document.getElementById("root");

const App = () => {
  return <div className="flex items-center justify-center w-full h-full"></div>;
};

wrapper ? ReactDOM.render(<App />, wrapper) : false;
