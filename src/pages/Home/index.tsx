import { Link } from "react-router-dom";
import { MainTemplate } from "../../components/MainTemplate";
import styles from "./styles.module.css";

export function Home() {
  const pages = ["Calc", "Cambio", "Tasks", "Timer"];

  return (
    <>
      <MainTemplate>
        {pages.map((item, index) => (
          <Link key={index} to={`/${item}`} className={styles.imgApp}>
            <img src={`./${item}.png`} alt={`icone do aplicativo ${item}`} />
          </Link>
        ))}
      </MainTemplate>
    </>
  );
}
