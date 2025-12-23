import { Link } from "react-router-dom";
import BodyApp from "../BodyApp/BodyApp";
import Heading from "../Heading/Heading";
import { ArrowLeft } from "lucide-react";

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

  return (
    <>
      <Heading>
        {isThisHome() ? (
          <Link to={home}>multitask app</Link>
        ) : (
          <Link to={home}>
            <ArrowLeft /> Voltar a home
          </Link>
        )}
      </Heading>

      <BodyApp>{children}</BodyApp>
    </>
  );
}
