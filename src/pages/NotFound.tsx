import styles from "./styles.module.css";

import { MainTemplate } from "../template/MainTemplate";

export function NotFound() {
  return (
    <>
      <MainTemplate>
        <div className={styles.notFound}>
          <h1>🚨 Página Não Encontrada (404 Not Found) 🚨</h1>
          <p>
            Puxa! Parece que você se perdeu nas tarefas e a página que você
            procurava no Multitask desapareceu! 👻 Não se preocupe, acontece com
            os melhores multitaskers!
          </p>
          <p>
            Clique no link abaixo para retornar à Home do aplicativo e continuar
            gerenciando suas tarefas como um(a) profissional! 💪 ➡️
            <a href="!#">Home🏠</a>
          </p>
        </div>
      </MainTemplate>
    </>
  );
}
