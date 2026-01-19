import { ArrowRightLeft } from "lucide-react";
import { MainTemplate } from "../../components/MainTemplate";
import styles from "./styles.module.css";
import { brFlag, usFlag, jpFlag, cnFlag, euFlag } from "../../assets";
import { useState } from "react";

export function Cambio() {
  const [currency, setCurrency] = useState<"brl" | "usd">("brl");
  // const apiUrl =
  //   "https://economia.awesomeapi.com.br/json/last/USD?token=9ba9f7422b2a0070e031376ee1393c8ef5b766b5b507dc66e299e165685107ad";

  function handleChangeActualCurrency() {
    if (currency === "brl") {
      setCurrency("usd");
      return;
    }

    setCurrency("brl");
  }

  return (
    <MainTemplate>
      <div className={styles.container}>
        <section className={styles.coinChange}>
          <div
            className={`${styles.cambioPart} ${currency === "usd" ? styles.reverseDiv : ""}`}
          >
            <div className={styles.cambioSymbol}>
              <img
                src={currency === "brl" ? brFlag : usFlag}
                alt="bandeira brasil"
              />
            </div>

            <div
              className={` ${styles.inputPart} ${currency === "usd" ? styles.reverseInput : ""}`}
            >
              <span>{currency === "brl" ? "R$" : "$"}</span>
              <input type="text" />
            </div>
            <button className={styles.btnChange}>Converter</button>
          </div>
          <ArrowRightLeft
            className={styles.arrowCurrencyChange}
            onClick={handleChangeActualCurrency}
          />
        </section>
      </div>
    </MainTemplate>
  );
}
