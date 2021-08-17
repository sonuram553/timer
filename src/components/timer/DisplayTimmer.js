import React from "react";

export const DisplayTimer = ({ minute, second, paused, setPaused }) => {
  return (
    <div className="display-timer">
      <p>
        {padNumber(minute)}:{padNumber(second)}
      </p>
      <div>
        <button onClick={() => setPaused((paused) => !paused)}>
          {paused ? "Play" : "Pause"}
        </button>
      </div>
    </div>
  );
};

const padNumber = (num) => {
  if (num < 10) return `0${num}`;
  return num;
};
