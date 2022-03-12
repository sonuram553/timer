import React, { useState } from "react";

export const TimeField = ({ onSetMinute }) => {
  const [num, setNum] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onSetMinute(num);
    setNum("");
  };

  return (
    <form onSubmit={onSubmit} className="time-form">
      <div className="ui action input time-form__field">
        <input
          type="number"
          placeholder="Enter minutes"
          value={num}
          min="0"
          max="60"
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
