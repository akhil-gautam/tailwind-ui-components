import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.scss";

const wrapper = document.getElementById("root");
const App = () => {
  return <div className="w-auto shadow-2xl h-12">My react componentaaa</div>;
};
wrapper ? ReactDOM.render(<App />, wrapper) : false;
