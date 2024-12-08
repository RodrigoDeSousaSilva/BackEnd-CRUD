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

Criar Usuário <br>
* URL: /createUser <br>
* Método: POST <br>
* Corpo da Requisição: <br>
{ <br>
  "name": "string", <br>
  "age": number, <br>
  "email": "string", <br>
  "password": "string" <br>
} <br>

## Login de Usuário
* URL: /loginUser
* Método: POST
* Corpo da Requisição: <br>
{ <br>
  "email": "string", <br>
  "password": "string" <br>
}

## Atualizar Usuário
* URL: /updateUser
* Método: PUT
* Corpo da Requisição <br>
  { <br> 
  "id": "number", <br>
  "name": "string", ? <br>
  "age": number, ? <br>
  "email": "string" ? <br>
  "password": "string" ? <br>
} <br>

## Deletar Usuário
* URL: /deleteUser
* Método: DELETE
* Corpo da Requisição: <br>
{ <br>
  "id": "number" <br>
  "email": "string", <br>
  "password": "string" <br>
}

## Scripts Disponíveis
* npm run dev: Inicia o servidor em modo de desenvolvimento usando Sucrase.
<h2>Estrutura do Projeto</h2> <br>
prisma/ <br>
├── migrations/ <br>
│   ├── 202412021252_migration/ <br>
│   │   └── migration.sql <br>
│   └── 202412031813_migration/ <br>
│       └── migration.sql <br>
├── schema.prisma <br>
src/ <br>
├── controller/ <br>
│   └── index.js <br>
├── repository/ <br>
│   └── index.js <br>
├── routes/ <br>
│   ├── index.js <br>
│   └── user.js <br>
├── service/ <br>
│   └── prisma.js <br>
├── validate/ <br>
│   └── index.js <br>
└── server.js <br>
