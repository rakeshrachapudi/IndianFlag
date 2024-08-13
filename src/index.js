import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";

const Flag = () => {
  return (
    <div className="indian-flag-container">
      <div className="flagpole">
        <div className="flagpole-ball-1"></div>
        <div className="flagpole-ball-2"></div>
        <div className="flagpole-stick"></div>
        <div className="flagpole-steps">
          <div className="flagpole-steps-1"></div>
          <div className="flagpole-steps-2"></div>
          <div className="flagpole-steps-3"></div>
        </div>
      </div>
      <div className="flag-container">
        <div className="flag-orange"></div>
        <div className="flag-white">
          <div className="ashoka-chakra">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="chakra-line"
                style={{
                  transform: `rotate(${i * 15}deg)`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="flag-green"></div>
      </div>
    </div>
  );
};

ReactDOM.render(<Flag />, document.getElementById("root"));
