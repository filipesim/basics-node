import express from 'express'
import db from './config/dbConnect.js'
import routes from './routes/index.js'

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
  console.log('Conexão com o banco feita com sucesso')
})

// Criar uma instância do Express
const app = express()

// Para devolver respostas em JSON
app.use(express.json())

// Para obter as rotas criadas
routes(app)

export default app