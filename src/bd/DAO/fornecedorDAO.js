class FornecedorDAO {
    constructor(bdFornecedor) {
        this._bdFornecedor = bdFornecedor
    }
    select_all_fornecedores() {
        return new Promise((resolve, reject) => {
            this._bdFornecedor.all('SELECT * FROM FORNECEDOR', (err, linhas) => {
                console.log('deu')
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
        console.log(novoFornecedor)
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
            this._bdCaixa.all(`SELECT * FROM CAIXA where ID = ${id}`, (err, linhas) => {
                if (err) {
                    reject(({ "mensagem": err.message, "error": true }))
                } else {
                    resolve({
                        "pedidos": linhas,
                        "count": linhas.length,
                        "error": false
                    })
                }
            })
        })
    }

}

module.exports = FornecedorDAO