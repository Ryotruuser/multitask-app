# 📱 Multitask App

> **Um Hub de Produtividade Centralizado e Modular.**

![Project Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73C92?style=for-the-badge&logo=vite&logoColor=white)

<div align="center">
  <img src="https://github.com/user-attachments/assets/31223055-4e21-4a5e-b0c6-63b8d27e3a2c" alt="Hub Home" height="600" />
</div>

---

## 📋 Sobre o Projeto

O **Multitask App** é uma Single Page Application (SPA) desenvolvida para reunir ferramentas essenciais do dia a dia em uma única interface limpa e intuitiva.

O objetivo principal deste projeto foi criar uma **arquitetura modular** onde cada funcionalidade (Calculadora, Câmbio, Tarefas, etc.) opera como uma micro-aplicação independente dentro do Hub, compartilhando o mesmo design system e lógica de roteamento.

A aplicação foi desenhada com a metodologia **Mobile-First**, garantindo performance e usabilidade perfeita em qualquer tamanho de tela.

## 🎨 Design & UI/UX

O conceito visual deste projeto foi originalmente idealizado e prototipado no **Figma**.

Durante o desenvolvimento, o design foi refinado e adaptado para garantir melhor usabilidade e seguir padrões modernos de código, demonstrando a capacidade de evoluir um protótipo estático para uma aplicação funcional e responsiva.

![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
> [🔗 Ver Protótipo Original no Figma](https://www.figma.com/design/JLNKnxlFDhyWhMHSKSCQtG/Multitask-app?node-id=0-1&t=j15QUAIlN9pWYkSE-1)

---

## 🚀 Funcionalidades

O Hub centraliza diversas micro-aplicações. Abaixo, detalhes de cada módulo:

| 🧮 Calculadora | 💱 Conversor de Moedas |
|:---:|:---:|
| <img src="https://github.com/user-attachments/assets/6a155d9b-654d-469a-8743-3fd160020dac" height="450" /> | <img src="https://github.com/user-attachments/assets/5fe0b61c-8c55-4ecd-8f59-e188433c8a58" height="450" /> |
| **Operações Rápidas**<br>Interface responsiva e lógica matemática precisa para o dia a dia. | **Câmbio em Tempo Real**<br>Suporte para BRL, USD, EUR e CNY com atualização dinâmica. |

| ✅ To-Do List | ⏱️ Temporizador |
|:---:|:---:|
| <img src="https://github.com/user-attachments/assets/e8e4cf27-4f87-44ea-b48b-c03e0a20fa0f" height="450" /> | <img src="https://github.com/user-attachments/assets/28fef07c-310c-4897-866b-97dbf548a489" height="450" /> |
| **Gerenciador de Tarefas**<br>CRUD Completo (Adicionar, Editar, Excluir) com persistência via `localStorage`. | **Foco e Produtividade**<br>Controle preciso de horas/min/seg com salvamento de estado. |

### ☁️ Previsão do Tempo (Em Breve)
Módulo em desenvolvimento para consulta climática em tempo real.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as melhores práticas do ecossistema React moderno:

- **[React](https://reactjs.org/)**: Biblioteca para construção da interface.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset JavaScript para tipagem estática e segurança.
- **[Vite](https://vitejs.dev/)**: Build tool ultrarrápida.
- **[React Router DOM](https://reactrouter.com/)**: Gerenciamento de rotas SPA.
- **[CSS Modules](https://github.com/css-modules/css-modules)**: Estilização escopada.
- **LocalStorage API**: Persistência de dados client-side.

---

## 📂 Estrutura do Projeto

A arquitetura escalável facilita a manutenção e adição de novos apps:

```bash
src/
├── assets/          # Imagens e ícones globais
├── components/      # Componentes reutilizáveis (Header, Templates)
├── pages/           # Módulos principais (cada app é uma pasta)
│   ├── Calc/
│   ├── Cambio/
│   ├── Home/
│   ├── Tasks/
│   ├── Timer/
│   └── Weather/
├── router.tsx       # Configuração central de rotas
└── styles/          # Estilos globais e variáveis CSS
```
---

## 📦 Como Rodar o Projeto

Para executar o Multitask App localmente em sua máquina:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/ryotruuser/multitask-app.git](https://github.com/ryotruuser/multitask-app.git)
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd multitask-app
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```
4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
5. **Acesse no navegador:** O projeto estará rodando em http://localhost:5173 (ou a porta indicada no terminal).

### 🤝 Autor: Desenvolvido por Renan Ramos.

Este projeto faz parte do meu portfólio de Desenvolvimento Full Stack / Front-end.
