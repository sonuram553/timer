import React from "react";

export const DisplayTimer = ({ minute, second, paused, setPaused }) => {
  return (
    <div className="display-timer">
      <p>
        {padNumber(minute)}:{padNumber(second)}
      </p>
      <button
        className="circular ui icon button"
        onClick={() => setPaused((paused) => !paused)}
      >
        <i className={`icon ${paused ? "play" : "pause"}`}></i>
      </button>
    </div>
  );
};

const padNumber = (num) => {
  if (num < 10) return `0${num}`;
  return num;
};
