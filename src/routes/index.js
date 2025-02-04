import express from 'express'
import livros from './livrosRouter.js'
import autores from './autorRouter.js'

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("Curso de node.js")
    })

    app.use(express.json(), livros, autores)
}

export default routes