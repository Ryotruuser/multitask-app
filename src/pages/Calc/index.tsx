import React, { useState } from "react";
import { MainTemplate } from "../../components/MainTemplate";
import { evaluate } from "mathjs";
import "./styles.css";

export function Calc() {
  const [value, setValue] = useState<string[]>([]);
  const [pressed, setPressed] = useState<boolean>();

  function handleBtnValues(e: React.MouseEvent<HTMLButtonElement>) {
    const btnValue = e.currentTarget.value;
    setPressed(true);
    setValue((prevValue) => {
      if (!prevValue) return prevValue;

      return [...prevValue, btnValue];
    });
  }

  function handleResult() {
    const expression = value.map((v) => (v === "X" ? "*" : v)).join("");
    const result = evaluate(expression);
    setValue([String(result)]);
  }

  function handleClear() {
    setValue([]);
  }

  return (
    <MainTemplate>
      <div className="container">
        <input
          disabled
          value={pressed && value.length ? value.join("") : "0"}
          className="displayInput"
        />
        <div className="numbers">
          <section className="sectionButtons">
            <button
              className="numberButtons"
              value={"7"}
              onClick={(e) => handleBtnValues(e)}
            >
              7
            </button>
            <button
              className="numberButtons"
              value={"8"}
              onClick={(e) => handleBtnValues(e)}
            >
              8
            </button>
            <button
              className="numberButtons"
              value={"9"}
              onClick={(e) => handleBtnValues(e)}
            >
              9
            </button>
            <button
              className="operationButtons"
              value={"%"}
              onClick={(e) => handleBtnValues(e)}
            >
              %
            </button>
          </section>

          <section className="sectionButtons">
            <button
              className="numberButtons"
              value={"4"}
              onClick={(e) => handleBtnValues(e)}
            >
              4
            </button>
            <button
              className="numberButtons"
              value={"5"}
              onClick={(e) => handleBtnValues(e)}
            >
              5
            </button>
            <button
              className="numberButtons"
              value={"6"}
              onClick={(e) => handleBtnValues(e)}
            >
              6
            </button>
            <button
              className="operationButtons"
              value={"X"}
              onClick={(e) => handleBtnValues(e)}
            >
              X
            </button>
          </section>

          <section className="sectionButtons">
            <button
              className="numberButtons"
              value={"1"}
              onClick={(e) => handleBtnValues(e)}
            >
              1
            </button>
            <button
              className="numberButtons"
              value={"2"}
              onClick={(e) => handleBtnValues(e)}
            >
              2
            </button>
            <button
              className="numberButtons"
              value={"3"}
              onClick={(e) => handleBtnValues(e)}
            >
              3
            </button>
            <button
              className="operationButtons"
              value={"-"}
              onClick={(e) => handleBtnValues(e)}
            >
              -
            </button>
          </section>

          <section className="sectionButtons">
            <button
              className="zeroButton numberButtons"
              value={"0"}
              onClick={(e) => handleBtnValues(e)}
            >
              0
            </button>
            <button
              className="operationButtons"
              value={"+"}
              onClick={(e) => handleBtnValues(e)}
            >
              +
            </button>
          </section>

          <section className="sectionButtons">
            <button className="resultButton" value={"="} onClick={handleResult}>
              =
            </button>
            <button
              className="operationButtons"
              value={"C"}
              onClick={handleClear}
            >
              c
            </button>
          </section>
        </div>
      </div>
    </MainTemplate>
  );
}
