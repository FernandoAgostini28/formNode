const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'database.db')
const db = new sqlite3.Database(caminhoArq);

//==== Fornecedor
const FORNECEDOR_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FORNECEDOR" (
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
  );`;

const ADD_FORNECEDOR_DATA = `
INSERT INTO FORNECEDOR (ID, NOME, RAZAO_SOCIAL, CNPJ, SEGMENTO, CEP, RUA, NUMERO, COMPLEMENTO, TELEFONE, EMAIL)
VALUES 
(1, 'Fornecedor-1', 'Fornecedor-1 S/A', '00.000.000/0000-00', 'ROUPAS','80800-000', 'Rua 01', 502, 'casa-1', '41-0000-0000', 'fornecedor@gmail.com'),
(2, 'Fornecedor-2', 'Fornecedor-2 S/A', '00.000.000/0000-00', 'AUTOPEÇAS','80800-001', 'Rua 02', 503, 'casa-2', '41-0000-0000', 'fornecedor@gmail.com'),
(3, 'Fornecedor-3', 'Fornecedor-3 S/A', '00.000.000/0000-00', 'ALIMENTOS','80800-002', 'Rua 03', 504, 'casa-3', '41-0000-0000', 'fornecedor@gmail.com')
`

function criaTabelaFornecedor() {
    db.run(FORNECEDOR_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de fornecedor");
    });
}


function populaTabelaFornecedor() {
    db.run(ADD_FORNECEDOR_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de fornecedor");
    });
}


db.serialize( ()=> {
    criaTabelaFornecedor();
    populaTabelaFornecedor();
   
});