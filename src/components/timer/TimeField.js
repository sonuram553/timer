import React from "react";

export const TimeField = () => {
  return (
    <div className="ui action input time-field">
      <input type="number" placeholder="Enter minutes" />
      <button className="ui button">Start</button>
    </div>
  );
};
