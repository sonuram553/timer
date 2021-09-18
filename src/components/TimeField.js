import React, { useState } from "react";

export const TimeField = ({ onSetMinute }) => {
  const [num, setNum] = useState("");
  
  const onSubmit = (e) => {
    e.preventDefault();
    onSetMinute(+num);
    setNum("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="ui action input time-field">
        <input
          type="number"
          placeholder="Enter minutes"
          value={num}
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />
        <button type="submit" className="ui button">
          Start
        </button>
      </div>
    </form>
  );
};
