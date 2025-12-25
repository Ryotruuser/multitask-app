import { useState } from "react";
import { MainTemplate } from "../../components/MainTemplate";

import "./styles.css";
import { Play, Square } from "lucide-react";

export function Timer() {
  const [input, setInput] = useState(0);

  function handleTimer() {
    console.log(input);
  }
  return (
    <MainTemplate>
      <div className="container">
        <section className="timer">
          <span className="hours">09</span>
          <span className="separator">:</span>
          <span className="minutes">59</span>
          <span className="separatorSmall">:</span>
          <span className="seconds">58</span>
        </section>

        <section className="setTimerValues">
          <input
            type="range"
            className="setTimerHours"
            min={0}
            max={100}
            value={input}
            onChange={(e) => setInput(parseInt(e.target.value))}
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
