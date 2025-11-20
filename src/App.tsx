import BodyApp from './components/BodyApp/BodyApp';
import ButtonApp from './components/ButtonApp/ButtonApp';
import Heading from './components/Heading/Heading';
import './styles/global.css';

export default function App() {

  return (
    <>
      <Heading>
        Multitask APP
      </Heading>

      <BodyApp>
        <ButtonApp src="./Calc.png"/>
        <ButtonApp src="./ConversorImg.png"/>
        <ButtonApp src="./task.png"/>
        <ButtonApp src="./timer.png"/>
      </BodyApp>

    </>
  )
}

