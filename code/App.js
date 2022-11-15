import React from "react";
import * as d3 from "d3";
import logo from "../dist/biggboss-icon.jpg";

const App = () => {
  return (
    <>
      <div className="main-header">
        <img src={logo} />
        <p id="title">BIGG BOSS 16</p>
      </div>

      <div>
        <svg className="contestant" id="McStan" viewBox="  0 0 100 100">
          <circle
            cx={15}
            cy={15}
            r={10}
            stroke="red"
            strokeWidth="0.2"
            fill="grey"
          />
        </svg>
      </div>
    </>
  );
};

export default App;
