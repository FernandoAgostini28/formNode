
 require('dotenv').config()
const app = require('./app')
const port  = process.env.DB_PORT
app.listen(port, () =>{
    console.log(`servidor rodando: http://localhost:${port}`)
  })