class FornecedorDAO {
    constructor(bdFornecedor) {
        this._bdFornecedor = bdFornecedor
    }
    select_all_fornecedores() {
        return new Promise((resolve, reject) => {
            this._bdFornecedor.all('SELECT * FROM FORNECEDOR', (err, linhas) => {
                if (err) {
                    reject(({ "mensagem": err.message, "error": true }))
                } else {
                    resolve({
                        "fornecedores": linhas,
                        "count": linhas.length,
                        "error": false
                    })
                }
            })
        })
    }
    insert_fornecedor(novoFornecedor) {
        return new Promise((resolve, reject) => {
            this._bdFornecedor.run(`
            INSERT INTO FORNECEDOR (NOME, RAZAO_SOCIAL, CNPJ, SEGMENTO, CEP, RUA, NUMERO, COMPLEMENTO, TELEFONE, EMAIL)
           VALUES 
           (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `, [novoFornecedor.nome, novoFornecedor.razaoSocial, novoFornecedor.cnpj, novoFornecedor.segmento, novoFornecedor.cep, novoFornecedor.rua, novoFornecedor.numero, novoFornecedor.complemento, novoFornecedor.telefone, novoFornecedor.email ], (error) => {
                if (error) {
                    reject({
                        "fornecedor": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "fornecedor": novoFornecedor,
                        "erro": false
                    })
                }
            })
        })
    }
    select_fornecedor_id(id){
        return new Promise((resolve, reject) => {
            this._bdFornecedor.all(`SELECT * FROM FORNECEDOR where ID = ${id}`, (err, linhas) => {
                if (err) {
                    reject(({ "mensagem": err.message, "error": true }))
                } else {
                    resolve({
                        "fornecedores": linhas,
                        "count": linhas.length,
                        "error": false
                    })
                }
            })
        })
    }

    update_fornecedor(id, novoFornecedor) {
        return new Promise((resolve, reject) => {
            this._bdFornecedor.run(`
            UPDATE FORNECEDOR SET (NOME, RAZAO_SOCIAL, CNPJ, SEGMENTO, CEP, RUA, NUMERO, COMPLEMENTO, TELEFONE, EMAIL) =
            (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            where ID =
           "${id}"
            `, [novoFornecedor.nome, novoFornecedor.razaoSocial, novoFornecedor.cnpj, novoFornecedor.segmento, novoFornecedor.cep, novoFornecedor.rua, novoFornecedor.numero, novoFornecedor.complemento, novoFornecedor.telefone, novoFornecedor.email ], (error) => {
                if (error) {
                    reject({
                        "fornecedores": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "fornecedores": novoFornecedor,
                        "message":  "alterado com sucesso!",
                        "erro": false
                    })
                }
            })
        })
    }

    remove_fornecedor(id) {
        return new Promise((resolve, reject) => {
            this._bdFornecedor.run(`
            DELETE FROM FORNECEDOR 
           where ID =
           ${id}
            `, (error) => {
                if (error) {
                    reject({
                        "fornecedor": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "message": "fornecedor removido com sucesso!",
                        "erro": false
                    })
                }
            })
        })
    }

}

module.exports = FornecedorDAO