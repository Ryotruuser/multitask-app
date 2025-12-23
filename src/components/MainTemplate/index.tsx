import { Link } from "react-router-dom";
import BodyApp from "../BodyApp/BodyApp";
import Heading from "../Heading/Heading";

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Heading>
        <Link to={"/"}>multitask app</Link>
      </Heading>

      <BodyApp>{children}</BodyApp>
    </>
  );
}
