const Fornecedor_DAO = require('../bd/DAO/fornecedorDAO')
const FornecedorNew = require("../models/fornecedor-model")

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

    app.post('/fornecedores', async (req, res) => {
        const body = req.body
        console.log(body)
        try {
            const novoFornecedor = new FornecedorNew(body.NOME, body.RAZAO_SOCIAL, body.CNPJ, body.SEGMENTO, body.CEP, body.RUA, body.NUMERO, body.COMPLEMENTO, body.TELEFONE, body.EMAIL)
            console.log('novoFornecedor', novoFornecedor.cep)
            if(novoFornecedor.nome === 'error' || novoFornecedor.razaoSocial === 'error', novoFornecedor.cnpj, novoFornecedor.cep === 'error', novoFornecedor.segmento === 'error', novoFornecedor.numero === 'error', novoFornecedor.email === 'error', novoFornecedor.complemento === 'error'){
               
                res.status(422).json({ message:`erro ao cadastrar fornecedor`})
            }else{
                
                const respNovoPedido = await fornecedor_DAO.insert_fornecedor(novoFornecedor);
                res.status(200).json(respNovoPedido)
               
            }
        } catch (error) {
            res.status(404).json({ error:"errorssss" })
        }
    })

    app.put('/fornecedores/:id', async (req, res) => {
        const pedido = req.params.id
        const body = req.body
        try {
            const pedido = req.params.pedido
            const respCaixaPedido = await caixa_Dao.select_caixa_pedido(pedido);
            const confPedido = new ConfirmaID(respCaixaPedido.pedidos.length)
            console.log(respCaixaPedido.pedidos.length)
            if (confPedido.id === -1) {
                res.send("Item não encontrado")
            } else {
                const novoPagamento = new Pagamento(body.PEDIDO, body.VALOR)
                if (novoPagamento.pedido === 0) {
                    res.send("Campo pedido é obrigatorio")
                } else if (novoPagamento.valor === -1) {
                    res.send("Campo Valor é obrigatorio")
                } else {
                    console.log(novoPagamento)
                    const respNovoPedido = await caixa_Dao.update_caixa_pedido(pedido, novoPagamento);
                    res.status(200).json({ "pedido": novoPagamento, "message": "alterado conm sucesso!!" })
                }
            }

        } catch (error) {
            res.status(404).json({ error })
        }

    })
}
module.exports = fornecedor