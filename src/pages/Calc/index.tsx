import { MainTemplate } from "../../components/MainTemplate";
import "./styles.css";

export function Calc() {
  return (
    <MainTemplate>
      <div className="container">
        <input disabled value={2343} className="displayInput" />
        <div className="numbers">
          <section className="sectionButtons">
            <button className="numberButtons">7</button>
            <button className="numberButtons">8</button>
            <button className="numberButtons">9</button>
            <button className="operationButtons">%</button>
          </section>

          <section className="sectionButtons">
            <button className="numberButtons">4</button>
            <button className="numberButtons">5</button>
            <button className="numberButtons">6</button>
            <button className="operationButtons">X</button>
          </section>

          <section className="sectionButtons">
            <button className="numberButtons">1</button>
            <button className="numberButtons">2</button>
            <button className="numberButtons">3</button>
            <button className="operationButtons">-</button>
          </section>

          <section className="sectionButtons">
            <button className="zeroButton numberButtons">0</button>
            <button className="operationButtons">+</button>
          </section>

          <section className="sectionButtons">
            <button className="resultButton">=</button>
            <button className="operationButtons">c</button>
          </section>
        </div>
      </div>
    </MainTemplate>
  );
}
