const Fornecedor_DAO = require('../bd/DAO/fornecedorDAO')

const fornecedor = (app, bdFornecedor) =>{
    const fornecedor_DAO = new Fornecedor_DAO(bdFornecedor);
    app.get('/fornecedores', async (req, res) => {
        try {
            const resFornecedores = await fornecedor_DAO.select_all_fornecedores();
            res.status(200).json(resFornecedores)
        } catch (error) {
            res.status(404).json({ error })
        }
    })
}
module.exports = fornecedor