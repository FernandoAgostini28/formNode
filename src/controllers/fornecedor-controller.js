const Fornecedor_DAO = require('../bd/DAO/fornecedorDAO')
const FornecedorNew = require("../models/fornecedor-model")

const fornecedor = (app, bdFornecedor) => {
    const fornecedor_DAO = new Fornecedor_DAO(bdFornecedor);
    app.get('/fornecedores', async (req, res) => {
        try {
            const resFornecedores = await fornecedor_DAO.select_all_fornecedores();
            res.status(200).json(resFornecedores)
        } catch (error) {
            res.status(404).json({ error })
        }
    })

    app.post('/fornecedores', async (req, res) => {
        const body = req.body
        // console.log(body)
        try {
            const novoFornecedor = new FornecedorNew(body.NOME, body.RAZAO_SOCIAL, body.CNPJ, body.SEGMENTO, body.CEP, body.RUA, body.NUMERO, body.COMPLEMENTO, body.TELEFONE, body.EMAIL)
            // console.log('novoFornecedor', novoFornecedor.cep)
            if (novoFornecedor.nome === 'error' || novoFornecedor.razaoSocial === 'error', novoFornecedor.cnpj, novoFornecedor.cep === 'error', novoFornecedor.segmento === 'error', novoFornecedor.numero === 'error', novoFornecedor.email === 'error', novoFornecedor.complemento === 'error') {

                res.status(422).json({ message: `erro ao cadastrar fornecedor` })
            } else {

                const respNovoPedido = await fornecedor_DAO.insert_fornecedor(novoFornecedor);
                res.status(200).json(respNovoPedido)

            }
        } catch (error) {
            res.status(404).json({ error: "errorssss" })
        }
    })

    app.put('/fornecedores/:id', async (req, res) => {
        const idFornecedor = req.params.id
        const body = req.body
        try {
            
            const respFornecedorid = await fornecedor_DAO.select_fornecedor_id(idFornecedor);
            if (respFornecedorid.count >= 1) {

                const editarFornecedor= new FornecedorNew(body.NOME, body.RAZAO_SOCIAL, body.CNPJ, body.SEGMENTO, body.CEP, body.RUA, body.NUMERO, body.COMPLEMENTO, body.TELEFONE, body.EMAIL)
                 console.log("editar",editarFornecedor)
                if (editarFornecedor.nome === 'error' || editarFornecedor.razaoSocial === 'error', editarFornecedor.cnpj, editarFornecedor.cep === 'error', editarFornecedor.segmento === 'error', editarFornecedor.numero === 'error', editarFornecedor.email === 'error', editarFornecedor.complemento === 'error') {
                    res.status(422).json({ message: `erro ao editar fornecedor` })
                } else {

                    const respNovoFornecedor = await fornecedor_DAO.update_fornecedor(idFornecedor, editarFornecedor);
                    res.status(200).json({ "fornecedor": respNovoFornecedor.nome, "message": "alterado conm sucesso!!" })
                }
            } else {
                res.status(422).json({ message: 'id não localizado' })
            }

        } catch (error) {
            res.status(404).json({ error })
        }

    })
}
module.exports = fornecedor