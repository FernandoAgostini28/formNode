const express = require('express');
const app = express();
const cors = require('cors')
const fornecedor  = require('./controllers/fornecedor-controller');
const bdFornecedor = require('./bd/sqlite-bd'); 



app.use(cors());
app.use(express.json())
app.use((req, res, next) => {
const body = req.body
next()
})


fornecedor(app, bdFornecedor)

module.exports = app;
