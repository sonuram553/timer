import React, { useEffect, useState, useRef } from "react";
import { CommonTimers } from "./CommonTimers";
import { DisplayTimer } from "./DisplayTimmer";
import { TimeField } from "./TimeField";
import timerSound from "../assets/drumming-ambience-572.wav";
import { usePrevious } from "../customHooks/usePrevious";

export const Timer = () => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [reset, setReset] = useState(false);
  const [paused, setPaused] = useState(false);
  const audioRef = useRef(null);
  const prevSecond = usePrevious(second);

  const onSetMinute = (minute) => {
    if (minute === "") return;
    setMinute(+minute);
    setSecond(0);
    setPaused(false);
    setReset(false);
  };

  const resetTimer = () => {
    setMinute(0);
    setSecond(0);
    setPaused(false);
    setReset(true);
    stopSound();
  };

  const togglePaused = () => {
    if (minute === 0 && second === 0) return null;
    setPaused((paused) => !paused);
  };

  useEffect(() => {
    if (!reset && prevSecond !== 0) {
      if (minute === 0 && second === 0) {
        playSound();
      }
    }
  }, [minute, second]);

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

  const playSound = () => {
    audioRef.current?.play();
  };

  const stopSound = () => {
    const audioElem = audioRef.current;
    if (!audioElem) return;
    audioElem.pause();
    audioElem.currentTime = 0;
  };

  return (
    <main>
      <section className="timer ui segment">
        <audio
          style={{ display: "none" }}
          ref={audioRef}
          src={timerSound}
        ></audio>
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
