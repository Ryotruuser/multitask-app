import { ArrowRightLeft } from "lucide-react";
import { MainTemplate } from "../../components/MainTemplate";
import styles from "./styles.module.css";
import { brFlag, usFlag, jpFlag, cnFlag, euFlag } from "../../assets";
import { useState } from "react";

export function Cambio() {
  const [inputBrl, setInputBrl] = useState("");
  const [inputUsd, setInputUsd] = useState("");
  const [activeInput, setActiveInput] = useState("");

  function getData() {
    fetch(
      "https://v6.exchangerate-api.com/v6/dfc82bc225184ad56a2217ed/latest/BRL"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  function handleInputBrl(e: React.ChangeEvent<HTMLInputElement>) {
    const inputUser = e.target.value;

    if (inputUser === "") {
      setInputBrl("");
      return;
    }

    if (!/^\d*\.?\d*$/.test(inputUser)) {
      return;
    }
  }

  function handleInputUsd(e: React.ChangeEvent<HTMLInputElement>) {
    const inputUser = e.target.value;

    if (inputUser === "") {
      setInputUsd("");
      return;
    }

    if (!/^\d*\.?\d*$/.test(inputUser)) {
      return;
    }

    setInputUsd(inputUser);
  }

  return (
    <MainTemplate>
      <div className={styles.container}>
        <section className={styles.coinChange || styles.inputSection}>
          <div className={styles.realCambio}>
            <div className={styles.cambioText}>
              <img src={brFlag} alt="bandeira brasil" />
              <h4>Real</h4>
            </div>

            <div className={styles.inputPart}>
              <span>R$</span>
              <input
                className={styles.brlInput}
                type="text"
                value={inputBrl}
                onChange={(e) => {
                  handleInputBrl(e);
                }}
              />
            </div>
          </div>
          <ArrowRightLeft className={styles.middleArrow} />
          <div className={styles.dolarCambio}>
            <div className={styles.cambioText}>
              <img src={usFlag} alt="bandeira eua" />
              <h4>Dollar</h4>
            </div>

            <div className={styles.inputPart}>
              <span>$</span>
              <input
                type="text"
                className={styles.usdInput}
                value={inputUsd}
                onChange={(e) => {
                  handleInputUsd(e);
                }}
              />
            </div>
          </div>
        </section>

        <section className={styles.coinChange}>
          <img
            src={euFlag}
            alt="bandeira da europa"
            className={styles.countryFlag}
          />
          <div className={styles.coinInfos}>
            <div className={styles.coinText}>
              <h3>Euro</h3>
              <p>EUR</p>
            </div>
            <h2 className={styles.currencyCambio}>
              <span>€</span>0,1732
            </h2>
          </div>
        </section>

        <section className={styles.coinChange}>
          <img
            src={jpFlag}
            alt="bandeira da japao"
            className={styles.countryFlag}
          />
          <div className={styles.coinInfos}>
            <div className={styles.coinText}>
              <h3>Euro</h3>
              <p>EUR</p>
            </div>
            <h2 className={styles.currencyCambio}>
              <span>€</span>0,1732
            </h2>
          </div>
        </section>

        <section className={styles.coinChange}>
          <img
            src={cnFlag}
            alt="bandeira da china"
            className={styles.countryFlag}
          />
          <div className={styles.coinInfos}>
            <div className={styles.coinText}>
              <h3>Euro</h3>
              <p>EUR</p>
            </div>
            <h2 className={styles.currencyCambio}>
              <span>€</span>0,1732
            </h2>
          </div>
        </section>
      </div>
    </MainTemplate>
  );
}
