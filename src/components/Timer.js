import React, { useEffect, useState } from "react";

import { CommonTimers } from "./CommonTimers";
import { DisplayTimer } from "./DisplayTimmer";
import { TimeField } from "./TimeField";

export const Timer = () => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [paused, setPaused] = useState(false);

  const onSetMinute = (minute) => {
    setSecond(0);
    setMinute(minute);
    setPaused(false);
  };

  const resetTimer = () => {
    setSecond(0);
    setMinute(0);
    setPaused(false);
  };

  const togglePaused = () => {
    if (minute === 0 && second === 0) return null;
    setPaused((paused) => !paused);
  };

  useEffect(() => {
    if (paused) return null;

    const id = setTimeout(() => {
      if (second === 0) {
        if (minute !== 0) {
          setMinute((minute) => minute - 1);
          setSecond(59);
        }
      } else setSecond((second) => second - 1);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [minute, second, paused]);

  return (
    <main>
      <section className="timer ui segment">
        <TimeField onSetMinute={onSetMinute} />
        <CommonTimers onSetMinute={onSetMinute} />
        <DisplayTimer
          minute={minute}
          second={second}
          paused={paused}
          togglePaused={togglePaused}
          resetTimer={resetTimer}
        />
      </section>
    </main>
  );
};
