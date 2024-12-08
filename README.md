# CRUD de Usuários

Este é um projeto de **CRUD (Create, Read, Update, Delete)** de usuários desenvolvido com **JavaScript**. Ele utiliza **MySQL** como banco de dados, gerenciado com o **Prisma ORM**, e o framework **Express** para lidar com as rotas. O projeto também inclui validação com a biblioteca **Yup** e criptografia de senhas com **bcrypt**.

## Funcionalidades
- **Criação de usuários** com validação de dados e armazenamento seguro das senhas.
- **Autenticação de usuários** com verificação de senha.
- **Atualização de dados de usuários**.
- **Exclusão de usuários** do banco de dados.

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução para JavaScript.
- **Express**: Framework para criar a API REST.
- **Prisma ORM**: Gerenciamento do banco de dados MySQL.
- **Yup**: Validação de dados.
- **bcrypt**: Criptografia de senhas.
- **Sucrase**: Ferramenta para simplificar o uso de sintaxes modernas no Node.js.

## Pré-requisitos
- **Node.js** e **npm** instalados.
- MySQL configurado e rodando.
- Prisma CLI para configurar o banco de dados.

## Instalação
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/crud-usuarios.git
   cd crud-usuarios

## 2. Instale as dependências:
  npm install

## 3. Configure o Prisma:
* Edite o arquivo prisma/schema.prisma para apontar para o seu banco de dados MySQL.
* Execute as migrações para criar o banco de dados:
    npx prisma migrate dev

## 4. Inicie o servidor:
  npm run dev

## Rotas da API
As rotas disponíveis são:

Criar Usuário
* URL: /createUser
* Método: POST
* Corpo da Requisição:
{
  "name": "string",
  "age": number,
  "email": "string",
  "password": "string"
}

## Login de Usuário
* URL: /loginUser
* Método: POST
* Corpo da Requisição:
{
  "email": "string",
  "password": "string"
}

## Atualizar Usuário
* URL: /updateUser
* Método: PUT
* Corpo da Requisição
  {
  "id": "number",
  "name": "string", ?
  "age": number, ?
  "email": "string" ?
  "password": "string" ?
}

## Deletar Usuário
* URL: /deleteUser
* Método: DELETE
* Corpo da Requisição:
{
  "id": "number"
  "email": "string",
  "password": "string"
}


markdown
Copiar código
# CRUD de Usuários

Este é um projeto de **CRUD (Create, Read, Update, Delete)** de usuários desenvolvido com **JavaScript**. Ele utiliza **MySQL** como banco de dados, gerenciado com o **Prisma ORM**, e o framework **Express** para lidar com as rotas. O projeto também inclui validação com a biblioteca **Yup** e criptografia de senhas com **bcrypt**.

## Funcionalidades
- **Criação de usuários** com validação de dados e armazenamento seguro das senhas.
- **Autenticação de usuários** com verificação de senha.
- **Atualização de dados de usuários**.
- **Exclusão de usuários** do banco de dados.

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução para JavaScript.
- **Express**: Framework para criar a API REST.
- **Prisma ORM**: Gerenciamento do banco de dados MySQL.
- **Yup**: Validação de dados.
- **bcrypt**: Criptografia de senhas.
- **Sucrase**: Ferramenta para simplificar o uso de sintaxes modernas no Node.js.

## Pré-requisitos
- **Node.js** e **npm** instalados.
- MySQL configurado e rodando.
- Prisma CLI para configurar o banco de dados.

## Instalação
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/crud-usuarios.git
   cd crud-usuarios
Instale as dependências:

bash
Copiar código
npm install
Configure o Prisma:

Edite o arquivo prisma/schema.prisma para apontar para o seu banco de dados MySQL.
Execute as migrações para criar o banco de dados:
bash
Copiar código
npx prisma migrate dev
Inicie o servidor:

bash
Copiar código
npm run dev
Rotas da API
As rotas disponíveis são:

Criar Usuário
URL: /createUser
Método: POST
Corpo da Requisição:
json
Copiar código
{
  "name": "string",
  "email": "string",
  "password": "string"
}
Login de Usuário
URL: /loginUser
Método: POST
Corpo da Requisição:
json
Copiar código
{
  "email": "string",
  "password": "string"
}
Atualizar Usuário
URL: /updateUser
Método: PUT
Corpo da Requisição:
json
Copiar código
{
  "id": "number",
  "name": "string",
  "email": "string"
}
Deletar Usuário
URL: /deleteUser
Método: DELETE
Corpo da Requisição:
json
Copiar código
{
  "id": "number"
}
## Scripts Disponíveis
* npm run dev: Inicia o servidor em modo de desenvolvimento usando Sucrase.
<h2>Estrutura do Projeto</h2>
src/
├── controller/
│   ├── createUser.js
│   ├── authenticateUser.js
│   ├── updateUser.js
│   └── deleteUser.js
├── routes/
│   └── userRoutes.js
├── server.js
└── prisma/
    └── schema.prisma
