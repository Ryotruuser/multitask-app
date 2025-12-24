import { ArrowRightLeft } from "lucide-react";
import { MainTemplate } from "../../components/MainTemplate";
import "./styles.css";

export function Cambio() {
  return (
    <MainTemplate>
      <div className="container">
        <section className="coinChange inputSection">
          <div className="realCambio">
            <div className="cambioText">
              <img src="./brImage.png" alt="bandeira brasil" />
              <h4>Real</h4>
            </div>

            <div className="inputPart">
              <span>R$</span>
              <input type="text" disabled value={1} />
            </div>
          </div>
          <ArrowRightLeft className="middleArrow" />
          <div className="dolarCambio">
            <div className="cambioText">
              <img src="./UsaImage.png" alt="bandeira eua" />
              <h4>Dollar</h4>
            </div>

            <div className="inputPart">
              <span>$</span>
              <input type="text" disabled value={0.19} />
            </div>
          </div>
        </section>

        <section className="coinChange">
          <img
            src="./eu.png"
            alt="bandeira da europa"
            className="countryFlag"
          />
          <div className="coinInfos">
            <div className="coinText">
              <h3>Euro</h3>
              <p>EUR</p>
            </div>
            <h2 className="currencyCambio">
              <span>€</span>0,1732
            </h2>
          </div>
        </section>

        <section className="coinChange">
          <img
            src="./japan.png"
            alt="bandeira do japao"
            className="countryFlag"
          />
          <div className="coinInfos">
            <div className="coinText">
              <h3>IENE</h3>
              <p>JPY</p>
            </div>
            <h2 className="currencyCambio">
              <span>JP¥</span>29,31
            </h2>
          </div>
        </section>

        <section className="coinChange">
          <img
            src="./china.png"
            alt="bandeira da china"
            className="countryFlag"
          />
          <div className="coinInfos">
            <div className="coinText">
              <h3>Renminbi</h3>
              <p>CNY</p>
            </div>
            <h2 className="currencyCambio">
              <span>¥</span>1,356
            </h2>
          </div>
        </section>
      </div>
    </MainTemplate>
  );
}
