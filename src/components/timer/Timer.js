import React from "react";

import { CommonTimers } from "./CommonTimer";
import { DisplayTimer } from "./DisplayTimmer";
import { TimeField } from "./TimeField";

export const Timer = () => {
  return (
    <main className="ui segment">
      <TimeField />
      <CommonTimers />
      <DisplayTimer />
    </main>
  );
};
