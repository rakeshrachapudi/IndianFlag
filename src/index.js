import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";
import { useState, useEffect, useRef } from "react";

const Flag = () => {
  const [audio] = useState(new Audio("/ThemeSong.mp3"));
  const [playing, setPlaying] = useState(false);

  const handlePlayAudio = () => {
    audio.loop = true;
    audio.play();
    setPlaying(true);
  };

  return (
    <div className="main-page">
      <div className="falling-flowers">
        {Array.from({ length: 100 }).map((_, index) => (
          <img
            key={index}
            src="flower-2bg.png"
            alt="Falling Flower"
            className="falling-flower"
          />
        ))}
      </div>

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
      <div className="title-container">
        <p className="title">Happy 78th Independence Day</p>
      </div>
      {!playing && (
        <img onClick={handlePlayAudio} className="play-button"></img>
      )}
    </div>
  );
};

ReactDOM.render(<Flag />, document.getElementById("root"));
