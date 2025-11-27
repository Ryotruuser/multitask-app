import ButtonApp from "../components/ButtonApp/ButtonApp";
import { MainTemplate } from "../template/MainTemplate";

export function Home(){
    return (
        <>
            <MainTemplate>
                <ButtonApp src="./Calc.png"/>
                <ButtonApp src="./ConversorImg.png"/>
                <ButtonApp src="./task.png"/>
                <ButtonApp src="./timer.png"/>
            </MainTemplate>
        </>
    )

}