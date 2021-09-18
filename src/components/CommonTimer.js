import React from "react";

export const CommonTimers = ({ onSetMinute }) => {
  const miuntes = [10, 20];

  return (
    <div className="ui horizontal large selection list">
      {miuntes.map((minute) => (
        <div className="item" key={minute}>
          <div className="content">
            <div className="header" onClick={() => onSetMinute(minute)}>
              {minute}mins
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
