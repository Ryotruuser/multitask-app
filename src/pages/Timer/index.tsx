import { useState } from "react";
import { MainTemplate } from "../../components/MainTemplate";

import "./styles.css";
import { Play, Square } from "lucide-react";

export function Timer() {
  interface timer {
    tempoTotal: number;
    tempoAtual: number;
    isPaused: boolean;
  }
  const [timer, setTimer] = useState<timer>();

  function handleTimer() {
    console.log(timer);
  }

  function formatTimer(timerNameType: string) {
    if (timer?.tempoTotal) {
      if (timerNameType == "hours") {
        const newHours = Math.floor(timer?.tempoTotal / 3600);
        return String(newHours).padStart(2, "0");
      } else if (timerNameType == "minutes") {
        const newMinutes = Math.floor((timer?.tempoTotal % 3600) / 60);
        return String(newMinutes).padStart(2, "0");
      } else if (timerNameType == "seconds") {
        const newSeconds = Math.floor(timer?.tempoTotal % 60);
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
          <input
            type="range"
            className="setTimerHours"
            min={0}
            max={720}
            step={0.1}
            onChange={(e) =>
              setTimer({
                tempoTotal: parseFloat(e.target.value) * 60,
                tempoAtual: parseFloat(e.target.value) * 60,
                isPaused: false,
              })
            }
          />
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
