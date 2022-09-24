import app from './src/app.js'

// Define a porta, se houver, ou por padrão a 3000
const port = process.env.PORT ?? 3000

// Inicia o servidor e escuta a porta
app.listen(port, () => {
  console.log('Servidor iniciado')
})