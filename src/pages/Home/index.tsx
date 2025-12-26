import { Link } from "react-router-dom";
import { MainTemplate } from "../../components/MainTemplate";
import styles from "./styles.module.css";
import {
  calcIcon,
  cambioIcon,
  tasksIcon,
  timerIcon,
  weather,
} from "../../assets";

export function Home() {
  const pages = [
    {
      name: "Calculadora",
      path: "/Calc",
      icon: calcIcon,
    },
    {
      name: "Conversor de moedas",
      path: "/Cambio",
      icon: cambioIcon,
    },
    {
      name: "Gerenciador de tarefas",
      path: "/Tasks",
      icon: tasksIcon,
    },
    {
      name: "Temporizador",
      path: "/Timer",
      icon: timerIcon,
    },
    {
      name: "Clima",
      path: "/Weather",
      icon: weather,
    },
  ];

  return (
    <>
      <MainTemplate>
        {pages.map((item, index) => (
          <Link key={index} to={item.path} className={styles.imgApp}>
            {<img src={item.icon} alt={`icone do aplicativo ${item.name}`} />}
          </Link>
        ))}
      </MainTemplate>
    </>
  );
}
