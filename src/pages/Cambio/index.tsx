import { ArrowRightLeft } from "lucide-react";
import { MainTemplate } from "../../components/MainTemplate";
import styles from "./styles.module.css";
import { brFlag, usFlag, jpFlag, cnFlag, euFlag } from "../../assets";
import { useState } from "react";

export function Cambio() {
  const [inputBrl, setInputBrl] = useState("");
  const [inputUsd, setInputUsd] = useState("");
  const [activeInput, setActiveInput] = useState<"brl" | "usd" | null>(null);

  const apiUrl =
    "https://economia.awesomeapi.com.br/json/last/USD?token=9ba9f7422b2a0070e031376ee1393c8ef5b766b5b507dc66e299e165685107ad";

  function handleInputBrl(e: React.ChangeEvent<HTMLInputElement>) {
    if (activeInput && activeInput !== "brl") return;

    const inputUser = e.target.value;

    if (inputUser === "") {
      setInputBrl("");
      setInputUsd("");
      setActiveInput(null);
      return;
    }

    if (!/^\d*\.?\d*$/.test(inputUser)) {
      return;
    }

    setActiveInput("brl");

    setInputBrl(inputUser);

    const brlNumber = parseFloat(inputUser);
    if (!isNaN(brlNumber)) {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const usdValue = data.USDBRL.bid;
          setInputUsd((brlNumber / usdValue).toFixed(2));
        });
    }
  }

  function handleInputUsd(e: React.ChangeEvent<HTMLInputElement>) {
    if (activeInput && activeInput !== "usd") return;

    const inputUser = e.target.value;

    if (inputUser === "") {
      setInputUsd("");
      setInputBrl("");
      setActiveInput(null);
      return;
    }

    if (!/^\d*\.?\d*$/.test(inputUser)) {
      return;
    }

    setActiveInput("usd");
    setInputUsd(inputUser);

    const usdNumber = parseFloat(inputUser);
    if (!isNaN(usdNumber)) {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const usdValue = data.USDBRL.bid;
          setInputBrl((usdNumber * usdValue).toFixed(2));
        });
    }
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
                onFocus={() => setActiveInput("brl")}
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
                onFocus={() => setActiveInput("usd")}
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
