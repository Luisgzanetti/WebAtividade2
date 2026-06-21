# Atividade 2 Web

## Como rodar o projeto

### Pré-requisitos
- Node.js instalado
- npm instalado

### Clonar o repositório
Abra o seu terminal e execute o seguinte comando para clonar o repositório:
```bash
git clone https://github.com/Luisgzanetti/WebAtividade2.git
```

### Instalar dependências

#### Frontend
Navegue até a pasta frontend do projeto e execute o comando para instalar as dependências:
```bash
cd WebAtividade2/frontend
npm install
```

#### Backend
Navegue até a pasta backend do projeto e execute o comando para instalar as dependências:
```bash
cd WebAtividade2/backend
npm install
```

### Executar o projeto

Para que o projeto funcione como esperado, certifique-se de que tanto o servidor frontend quanto o backend estejam rodando.

#### Frontend
Navegue até a pasta frontend do projeto e execute o comando para iniciar o servidor:
```bash
cd WebAtividade2/frontend
npm run dev
```
Depois, basta acessar a porta por meio de um navegador.

#### Backend
Navegue até a pasta backend do projeto e execute o comando para iniciar o servidor:
```bash
cd WebAtividade2/backend
npm run dev
```

## Detalhamento do Projeto

### Tela de login (LoginPage)
É a primeira tela do projeto, por questões de simplicidade, não é necessário criar ou logar com uma conta. Basta clicar para entrar como administrador da página ou usuário. Ao logar como admin, é levado para a página de adminstração, o usuário vai para a página de compra de produtos.

### Tela de adminstração (AdminPage)
Aqui é onde o usuário logado como admin pode gerenciar os produtos da página. É possível criar, editar e deletar produtos, assim como visualizar os produtos existentes. 
Ao clicar em criar, abre-se um modal para criar um produto. Ao clicar em editar, abre-se um modal para editar um produto. Ao clicar em deletar, abre-se um modal para deletar um produto.

### Tela de usuário (Home)
Aqui é onde o usuário logado pode comprar os produtos. É possível ver os produtos existentes e comprar um produto. A funcionalidade de compra não foi implementada, conforme especificado.

### Banco de Dados
Para o banco de dados, foi usado sqlite no modo memória, o que reinicia o banco quando o servidor é reiniciado, o banco cria automaticamente algumas poções de teste quando é inicializado.

### Tecnologias Utilizadas
- Frontend: React, Vite, TypeScript, Tailwind CSS
- Backend: Express, Sequelize, SQLite, TypeScript