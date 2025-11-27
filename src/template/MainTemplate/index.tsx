import BodyApp from "../../components/BodyApp/BodyApp";
import Heading from "../../components/Heading/Heading";

type MainTemplateProps = {
    children: React.ReactNode;
}

export function MainTemplate({children}: MainTemplateProps){
    return (
    <>
        <Heading>Multitask APP</Heading>
        <BodyApp>{children}</BodyApp>
    </>
    )
}