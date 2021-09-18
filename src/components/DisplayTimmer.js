import React from "react";

export const DisplayTimer = ({
  minute,
  second,
  paused,
  togglePaused,
  resetTimer,
}) => {
  return (
    <div className="display-timer">
      <p>
        {padNumber(minute)}:{padNumber(second)}
      </p>

      <button className="circular ui icon button" onClick={togglePaused}>
        <i className={`icon ${paused ? "play" : "pause"}`}></i>
      </button>

      <button className="circular ui icon button" onClick={resetTimer}>
        <i className="icon undo"></i>
      </button>
    </div>
  );
};

const padNumber = (num) => {
  if (num < 10) return `0${num}`;
  return num;
};
