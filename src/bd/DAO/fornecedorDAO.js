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
                        "fornecedore": linhas,
                        "count": linhas.length,
                        "error": false
                    })
                }
            })
        })
    }

}

module.exports = FornecedorDAO