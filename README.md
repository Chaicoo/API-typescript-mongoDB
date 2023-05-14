
# API typescript and mongoDB

API para cadastro de usuários utilizando typescript e mongoDB

## Instalação

Clone o projeto e acesse a pasta 🗂️

```bash
  git clone https://github.com/Chaicoo/API-typescript-mongoDB.git
  cd API-typescript-mongoDB

```

Instale as dependências 📦️

```bash
  npm install

  yarn install
```

Inicie o servidor 🚀️

```bash
  npm start

  yarn start
```

O servidor iniciará na porta: 3000🚪 - acesse <http://localhost:3000>

------

## Documentação da API

### Retorna todos os users como [array]

```http
  GET /users
```

```json
[
  {
    "_id": "60f0c9b0e3b9b5a4b8b0b0b0",
    "firstName": "Francisco",
    "lastName": "Lima",
    "email": "email@email.com",
    "password": "123456"
    },
]
```

### Adiciona um novo user

```http
  POST /users
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `firstName`      | `string`   | **Obrigatório**. Nome do usuário    |
| `lastName`      | `string`   | **Obrigatório**. Sobrenome do usuário    |
| `email`     | `string`   | **Obrigatório**. Email do usuário   |
| `password`  | `string`   | **Obrigatório**. Senha do usuário   |

### Deleta um user

```http
  DELETE /users/:id
```

| Parâmetro | Tipo     | Descrição                       |
| :-------- | :------- | :------------------------------ |
| `id`      | `string` | **Obrigatório**. Id do usuário a ser deletado |

### Atualiza um user

```http
  PATCH /users/:id
```

| Parâmetro | Tipo     | Descrição                       |
| :-------- | :------- | :------------------------------ |
| `id`      | `string` | **Obrigatório**. Id do usuário a ser atualizado |
| `firstName`      | `string`   | **Obrigatório**. Nome do usuário    |
| `lastName`      | `string`   | **Obrigatório**. Sobrenome do usuário    |
| `password`  | `string`   | **Obrigatório**. Senha do usuário   |

##Testes no Insomnia

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=API%20typescript%20and%20mongoDB&uri=https%3A%2F%2Fraw.githubusercontent.com%2FChaicoo%2FAPI-typescript-mongoDB%2Fmain%2FInsomnia_2023-05-14.json)

## Stack utilizada

* [TypeScript](https://www.typescriptlang.org/)
* [NodeJs](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [Express](https://expressjs.com/pt-br/)
