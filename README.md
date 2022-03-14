# Projeto Back Fornecedores

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3003].

### Framework
Nodejs

### Banco de dados
SQLite 3

 TABLE "FORNECEDOR" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(100),
    "RAZAO_SOCIAL" varchar(150),
    "CNPJ" varchar(30),
    "SEGMENTO" varchar(100),
    "CEP" varchar(30),
    "RUA" varchar(200),
    "NUMERO" INTEGER,
    "COMPLEMENTO" varchar(30),
    "TELEFONE" varchar(30),
    "EMAIL" varchar(100)
  )

### Dispnível  no Heroku
https://back-reacjs.herokuapp.com/

### End-points 
GET /fornecdores
GET /fornecedores/<id>
POST /fornecdores
PUT /fornecedores/editar/<id>
DELETE /fornecedores/deletar/<id>





