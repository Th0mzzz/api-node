import { autor } from "../models/autores.js";

class AutoresController {
    static async listarAutores(req, res) {

        try {
            const autoresList = await autor.find({});
            res.status(200).json(autoresList)
        } catch (error) {
            res.status(500).json({ msg: `${error.message} - falha ao buscar autores` })
        }

    }
    static async cadastrarAutor(req, res) {
        try {
            const newAutor = await autor.create(req.body)
            res.status(201).json({ msg: "Criado com sucesso", autor: newAutor })
        } catch (error) {
            res.status(500).json({ msg: `${error.message} - falha ao criar autor` })
        }
    }
    static async listarAutorPorId(req, res) {

        try {
            const id = req.params.id
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado)
        } catch (error) {
            res.status(500).json({ msg: `${error.message} - falha ao buscar autor` })
        }

    }
    static async editarAutor(req, res) {

        try {
            const id = req.params.id
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ msg: `Autor editado com sucesso` })
        } catch (error) {
            res.status(500).json({ msg: `${error.message} - falha ao editar autor` })
        }

    }
    static async deletarAutor(req, res) {

        try {
            const id = req.params.id
            await livro.findByIdAndDelete(id, req.body);
            res.status(200).json({ msg: "Autor deletado!" })
        } catch (error) {
            res.status(500).json({ msg: `${error.message} - falha ao deletar autor` })
        }

    }

};

export default AutoresController