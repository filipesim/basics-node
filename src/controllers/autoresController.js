import autores from '../models/Autor.js'

class AutoresController {
  static listarAutores = (req, res) => {
    autores.find((err, autores) => {
      res.status(200).send(autores)
    })
  }

  static listarAutoresPorId = (req, res) => {
    const { id } = req.params

    autores.findById(id, (err, autores) => {
      if (!err) {
        res.status(200).send(autores)
      } else {
        res.status(400).send({message: `${err.message} - Autores não localizado.`})
      }
    })
  }

  static cadastrarAutores = (req, res) => {
    let autor = new autores(req.body)

    autor.save((err) => {
      if (!err) {
        res.status(201).send(autor.toJSON())
      } else {
        res.status(500).send({message: `${err.message} - Falha ao cadastrar o autor.`})
      }
    })
  }

  static atualizarAutores = (req, res) => {
    const { id } = req.params

    autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if (!err) {
        res.status(200).send({message: 'Autores atualizado com sucesso.'})
      } else {
        res.status(500).send({message: `${err.message} - Falha ao atualizar o autor.`})
      }
    })
  }

  static excluirAutores = (req, res) => {
    const { id } = req.params

    autores.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({message: 'Autores excluido com sucesso.'})
      } else {
        res.status(400).send({message: `${err.message} - Autores não localizado.`})
      }
    })
  }
}

export default AutoresController