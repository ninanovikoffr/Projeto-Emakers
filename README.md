# Game Dame - Plataforma de Venda de Jogos

Bem-vindo ao **Game Dame**, uma plataforma de e-commerce para compra de jogos digitais, desenvolvida para a trilha de Front-End do processo seletivo da Emakers Júnior. Este projeto foi desenvolvido em React e utiliza Vite como ferramenta de build. 

## 📜 Índice

- [Funcionalidades](#-funcionalidades)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Rodar o Projeto](#-como-rodar-o-projeto)
- [Autoria](#-autoria)

## ✨ Funcionalidades

O projeto implementa diversas funcionalidades essenciais para uma plataforma de e-commerce de jogos:

- **Autenticação de Usuário**: Telas de Login, Registro e Recuperação de Senha.
- **Navegação Intuitiva**:
    - **NavBar Completa**: Com links para as principais seções do site.
    - **Menu Sanduíche Responsivo**: Garante uma ótima experiência em dispositivos móveis.
- **Página Principal**: Apresenta os jogos em destaque e os últimos lançamentos através de carrosséis interativos.
- **Página de Populares**: Exibe os jogos mais populares com descrições detalhadas.
- **Página de Jogo**: Detalhes específicos de um jogo, como descrição, preço, e opções de compra.
- **Página de Conta**: Onde o usuário pode ver seus dados e os jogos que já adquiriu.
- **Componentes Reutilizáveis**: Como `Input`, `Footer`, e `Carrossel`, garantindo consistência e manutenibilidade.
- **Design Responsivo**: O layout se adapta ao desktop e mobile.

## 📁 Estrutura de Pastas

O projeto está organizado da seguinte forma para facilitar a manutenção e escalabilidade:

```
/
├── public/
├── src/
│   ├── assets/              # Imagens, ícones e outros recursos estáticos
│   ├── componentes2/        # Componentes reutilizáveis (NavBar, Footer, Carrossel, etc.)
│   ├── pages/               # Componentes de página (Login, Principal, Conta, etc.)
│   ├── App.css              # Estilos globais da aplicação
│   ├── App.jsx              # Configuração principal de rotas
│   ├── main.jsx             # Ponto de entrada da aplicação React
│   └── index.css            # Estilos base e reset
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

- **`src/componentes2`**: Contém os componentes que são usados em várias páginas, como a barra de navegação (`NavBar.jsx`), o rodapé (`Footer.jsx`) e os carrosséis (`Carrossel1.jsx`, `Carrossel2.jsx`).
- **`src/pages`**: Cada arquivo aqui representa uma página completa da aplicação, como `Login.jsx` ou `Principal.jsx`. Eles organizam os componentes para formar as telas que o usuário vê.

## 📋 Descrição das Telas

Aqui está um resumo de cada tela implementada no projeto e sua respectiva função.

*   **`Login`**: Página inicial para usuários existentes. Permite o acesso à plataforma através de e-mail e senha e oferece links para registro e recuperação de conta.

*   **`Registrar`**: Formulário para que novos usuários possam criar uma conta, fornecendo informações como nome, e-mail, CPF e senha.

*   **`Recuperar`**: Permite que usuários que esqueceram a senha solicitem a redefinição. O fluxo (simulado) se iniciaria com o envio de um e--mail de recuperação.

*   **`Principal`**: A página principal da aplicação. Apresenta os jogos em destaque e as promoções em um carrossel grande e os últimos lançamentos em um carrossel menor.

*   **`Populares`**: Exibe uma lista detalhada dos jogos mais populares da plataforma, com imagens, descrições completas e sua classificação de popularidade.

*   **`Jogo`**: Página de detalhes de um produto específico. Mostra informações completas sobre um jogo, como imagem, descrição, preço, percentual de desconto e botões para adicioná-lo ao carrinho ou solicitar reembolso.

*   **`Conta`**: Perfil do usuário. Exibe os dados do usuário logado (nome, e-mail, CPF) e uma galeria com os jogos que ele já adquiriu. Oferece também opções para alterar dados e excluir a conta.

*   **`Erro`**: Uma página de fallback amigável exibida quando o usuário tenta acessar uma rota inexistente ou uma funcionalidade que ainda não foi implementada. Inclui um botão para retornar à página anterior.

## 🚀 Tecnologias Utilizadas

- **[React](https://reactjs.org/ )**: Biblioteca JavaScript para a construção da interface de usuário.
- **[Vite](https://vitejs.dev/ )**: Ferramenta de build moderna que oferece um ambiente de desenvolvimento rápido.
- **[React Router DOM](https://reactrouter.com/ )**: Para gerenciamento de rotas e navegação entre as páginas.
- **[Swiper.js](https://swiperjs.com/ )**: Para a criação de carrosséis interativos e responsivos.
- **CSS & Media Queries**: Para estilização e responsividade.

## ⚙️ Como Rodar o Projeto

Para executar este projeto localmente, siga os passos abaixo. Você precisa ter o [Node.js](https://nodejs.org/ ) (que inclui o `npm`) instalado.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/ninanovikoffr/Projeto-Emakers.git
    cd Projeto-Emakers
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  **Abra no navegador:**
    Abra seu navegador e acesse [http://localhost:5173](http://localhost:5173 ) (a porta pode variar, verifique o terminal).

## ✒️ Autoria

Este projeto foi desenvolvido por **Nina Novikoff** como parte do processo de trainee da Emakers Júnior.

---
