import { Link } from "react-router-dom";
import BodyApp from "../BodyApp/BodyApp";
import Heading from "../Heading/Heading";
import { ArrowLeft } from "lucide-react";

import "./styles.css";

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  const home = "/";
  const url = window.location.href;

  function isThisHome() {
    if (
      url.includes("Calc") ||
      url.includes("Cambio") ||
      url.includes("Tasks") ||
      url.includes("Timer")
    ) {
      return false;
    } else {
      return true;
    }
  }

  function whatPageisThis() {
    if (url.includes("Calc")) {
      return "Calculadora";
    } else if (url.includes("Cambio")) {
      return "Conversor";
    } else if (url.includes("Tasks")) {
      return "Tarefas";
    } else if (url.includes("Timer")) {
      return "Temporizador";
    }
  }

  return (
    <>
      <Heading>
        {isThisHome() ? (
          <Link to={home}>
            <span>multitask</span> app
          </Link>
        ) : (
          <Link to={home}>
            <ArrowLeft /> {whatPageisThis()}
          </Link>
        )}
      </Heading>

      <BodyApp>{children}</BodyApp>
    </>
  );
}
