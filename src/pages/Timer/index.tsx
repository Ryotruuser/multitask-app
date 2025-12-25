import { useState, useEffect } from "react";
import { MainTemplate } from "../../components/MainTemplate";

import "./styles.css";
import { Pause, Play, Square } from "lucide-react";

export function Timer() {
  interface timer {
    allTimeInSeconds: number;
    actualTimeInSeconds: number;
    isPaused: boolean;
    isRunning: boolean;
  }

  interface selectedTimer {
    hoursSelected: number;
    minutesSelected: number;
    secondsSelected: number;
  }

  const [timer, setTimer] = useState<timer>(() => {
    const timeInSecondasFromTheStorage = localStorage.getItem("timeInSeconds");
    return timeInSecondasFromTheStorage
      ? JSON.parse(timeInSecondasFromTheStorage)
      : {
          allTimeInSeconds: 0,
          actualTimeInSeconds: 0,
          isPaused: false,
          isRunning: false,
        };
  });
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
    if (timer && timer.isPaused) {
      setTimer((prevTimer) => {
        if (!prevTimer) return prevTimer;

        return {
          ...prevTimer,
          isPaused: false,
        };
      });

      return;
    }

    const allTimeInSeconds = putAllMyTimeTogether();
    if (!doIhaveTime()) {
      return;
    }
    setTimer({
      allTimeInSeconds: allTimeInSeconds,
      actualTimeInSeconds: allTimeInSeconds,
      isPaused: false,
      isRunning: true,
    });

    setSelectedTimer({
      hoursSelected: 0,
      minutesSelected: 0,
      secondsSelected: 0,
    });
  }

  useEffect(() => {
    if (!timer || timer.isPaused) {
      return;
    }

    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (!prevTimer) return prevTimer;
        if (prevTimer.actualTimeInSeconds <= 1) {
          return {
            ...prevTimer,
            actualTimeInSeconds: 0,
            isRunning: false,
          };
        }

        return {
          ...prevTimer,
          actualTimeInSeconds: prevTimer.actualTimeInSeconds - 1,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, timer?.isRunning, timer?.isPaused]);

  function formatTimer(timerUnit: string = "") {
    const doWeHaveAnyTime = doIhaveTime();

    if (timer?.isRunning) {
      if (timerUnit == "tHours") {
        const newHours = Math.floor(timer?.actualTimeInSeconds / 3600);
        return String(newHours).padStart(2, "0");
      } else if (timerUnit === "tMinutes") {
        const newMinutes = Math.floor((timer.actualTimeInSeconds % 3600) / 60);
        return String(newMinutes).padStart(2, "0");
      } else if (timerUnit === "tSeconds") {
        const newSeconds = Math.floor(timer.actualTimeInSeconds % 60);
        return String(newSeconds).padStart(2, "0");
      }
    }

    if (doWeHaveAnyTime) {
      if (timerUnit == "sHours") {
        const newHours = selectedTimer?.hoursSelected;
        return String(newHours).padStart(2, "0");
      } else if (timerUnit == "sMinutes") {
        const newMinutes = selectedTimer?.minutesSelected;
        return String(newMinutes).padStart(2, "0");
      } else if (timerUnit == "sSeconds") {
        const newSeconds = selectedTimer?.secondsSelected;
        return String(newSeconds).padStart(2, "0");
      }
    }

    return "00";
  }

  function handleStopTimer() {
    setTimer((prevTimer) => {
      if (!prevTimer) return prevTimer;
      return {
        allTimeInSeconds: 0,
        actualTimeInSeconds: 0,
        isRunning: false,
        isPaused: false,
      };
    });

    localStorage.setItem("timeInSeconds", "");

    setSelectedTimer({
      hoursSelected: 0,
      minutesSelected: 0,
      secondsSelected: 0,
    });
  }

  function handlePause() {
    setTimer((prevTimer) => {
      if (!prevTimer) return prevTimer;

      return {
        ...prevTimer,
        isPaused: true,
      };
    });
  }

  useEffect(() => {
    if (!timer.isRunning) {
      return;
    }
    localStorage.setItem("timeInSeconds", JSON.stringify(timer));
  }, [timer.isRunning, timer.actualTimeInSeconds, timer]);

  const pauseBtn = {
    backgroundColor: "red",
  };

  const playBtn = {
    backgroundColor: "rgba(0, 128, 0, 0.89)",
  };

  const stopBtnRunning = {
    opacity: "1",
  };

  const stopBtnStopped = {
    opacity: "0.2",
  };

  return (
    <MainTemplate>
      <div className="container">
        <section className="timer">
          <span className="hours">
            {timer?.isRunning ? formatTimer("tHours") : formatTimer("sHours")}
          </span>
          <span className="separator">:</span>
          <span className="minutes">
            {" "}
            {timer?.isRunning
              ? formatTimer("tMinutes")
              : formatTimer("sMinutes")}
          </span>
          <span className="separatorSmall">:</span>
          <span className="seconds">
            {" "}
            {timer?.isRunning
              ? formatTimer("tSeconds")
              : formatTimer("sSeconds")}
          </span>
        </section>

        <section className="setTimerValues">
          <div className="inputTimerSet">
            <h4>HH:</h4>
            <input
              type="range"
              className="setTimerHours"
              min={0}
              max={11}
              defaultValue={0}
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
              defaultValue={0}
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
              defaultValue={0}
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
          {!timer?.isRunning || timer.isPaused ? (
            <button
              onClick={handleTimer}
              className="playOrPauseBtn"
              style={playBtn}
            >
              <Play className="iconInsideTheButton" />
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="playOrPauseBtn"
              style={pauseBtn}
            >
              <Pause className="iconInsideTheButton" />
            </button>
          )}

          <button
            onClick={handleStopTimer}
            className="stopBtn"
            style={timer?.isRunning ? stopBtnRunning : stopBtnStopped}
          >
            <Square className="iconInsideTheButton" />
          </button>
        </section>
      </div>
    </MainTemplate>
  );
}
