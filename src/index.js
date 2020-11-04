import React from "react";
import ReactDOM from "react-dom";

import "./assets/main.scss";
import { Button } from "../lib/components";

const wrapper = document.getElementById("root");

const App = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Button></Button>
    </div>
  );
};

wrapper ? ReactDOM.render(<App />, wrapper) : false;
