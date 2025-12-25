import { useState } from "react";
import { MainTemplate } from "../../components/MainTemplate";

import "./styles.css";
import { Play, Square } from "lucide-react";

export function Timer() {
  interface timer {
    allTimeInSeconds: number;
    actualTimeInSeconds: number;
    isPaused: boolean;
  }

  interface selectedTimer {
    hoursSelected: number;
    minutesSelected: number;
    secondsSelected: number;
  }

  const [timer, setTimer] = useState<timer>();
  const [selectedTimer, setSelectedTimer] = useState<selectedTimer>();

  function doIhaveTime() {
    const hours = selectedTimer?.hoursSelected;
    const minutes = selectedTimer?.minutesSelected;
    const seconds = selectedTimer?.secondsSelected;
    if (hours || minutes || seconds) {
      return true;
    } else {
      return false;
    }
  }

  function putAllMyTimeTogether() {
    const doWeHaveAnyTime = doIhaveTime();
    if (doWeHaveAnyTime && selectedTimer) {
      const everyInputValue =
        selectedTimer.hoursSelected * 3600 +
        selectedTimer.minutesSelected * 60 +
        selectedTimer.secondsSelected;

      return everyInputValue;
    } else {
      return 0;
    }
  }

  function handleTimer() {
    const allTimeInSeconds = putAllMyTimeTogether();
    console.log(typeof allTimeInSeconds);
    setTimer({
      allTimeInSeconds: allTimeInSeconds,
      actualTimeInSeconds: 0,
      isPaused: false,
    });

    console.log(timer);
  }

  function formatTimer(timerNameType: string) {
    const doWeHaveAnyTime = doIhaveTime();
    if (doWeHaveAnyTime) {
      if (timerNameType == "hours") {
        const newHours = selectedTimer?.hoursSelected;
        return String(newHours).padStart(2, "0");
      } else if (timerNameType == "minutes") {
        const newMinutes = selectedTimer?.minutesSelected;
        return String(newMinutes).padStart(2, "0");
      } else if (timerNameType == "seconds") {
        const newSeconds = selectedTimer?.secondsSelected;
        return String(newSeconds).padStart(2, "0");
      }
    }

    return "00";
  }

  return (
    <MainTemplate>
      <div className="container">
        <section className="timer">
          <span className="hours">{formatTimer("hours")}</span>
          <span className="separator">:</span>
          <span className="minutes">{formatTimer("minutes")}</span>
          <span className="separatorSmall">:</span>
          <span className="seconds">{formatTimer("seconds")}</span>
        </section>

        <section className="setTimerValues">
          <div className="inputTimerSet">
            <h4>HH:</h4>
            <input
              type="range"
              className="setTimerHours"
              min={0}
              max={11}
              step={1}
              onChange={(e) => {
                setSelectedTimer({
                  hoursSelected: parseFloat(e.target.value),
                  minutesSelected: selectedTimer?.minutesSelected
                    ? selectedTimer.minutesSelected
                    : 0,
                  secondsSelected: selectedTimer?.secondsSelected
                    ? selectedTimer.secondsSelected
                    : 0,
                });
              }}
            />
          </div>

          <div className="inputTimerSet">
            <h4>MM:</h4>
            <input
              type="range"
              className="setTimerHours"
              min={0}
              max={59}
              step={1}
              onChange={(e) => {
                setSelectedTimer({
                  hoursSelected: selectedTimer?.hoursSelected
                    ? selectedTimer.hoursSelected
                    : 0,
                  minutesSelected: parseFloat(e.target.value),
                  secondsSelected: selectedTimer?.secondsSelected
                    ? selectedTimer.secondsSelected
                    : 0,
                });
              }}
            />
          </div>

          <div className="inputTimerSet">
            <h4>SS:</h4>
            <input
              type="range"
              className="setTimerHours"
              min={0}
              max={59}
              step={1}
              onChange={(e) => {
                setSelectedTimer({
                  hoursSelected: selectedTimer?.hoursSelected
                    ? selectedTimer.hoursSelected
                    : 0,
                  minutesSelected: selectedTimer?.minutesSelected
                    ? selectedTimer.minutesSelected
                    : 0,
                  secondsSelected: parseFloat(e.target.value),
                });
              }}
            />
          </div>
        </section>

        <section className="timerActions">
          <button onClick={handleTimer} className="playOrPauseBtn">
            <Play className="iconInsideTheButton" />
          </button>

          <button onClick={handleTimer} className="stopBtn">
            <Square className="iconInsideTheButton" />
          </button>
        </section>
      </div>
    </MainTemplate>
  );
}
