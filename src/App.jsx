import React from "react";
import ReactDOM from "react-dom";
import PiGame from "./components/PiGame";

import "./index.css";

const App = () => (
  <div className="container">
    <PiGame/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
