import livro from "../models/livros.js";

class LivroController {
    static async listarLivros(req, res) {

        try {
            const livrosList = await livro.find({});
            res.status(200).json(livrosList)
        } catch (error) {
            res.status(500).json({ msg: `${error.message} - falha ao buscar livros` })
        }

    }
    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body)
            res.status(201).json({ msg: "Criado com sucesso", livro: novoLivro })
        } catch (error) {
            res.status(500).json({ msg: `${error.message} - falha ao criar livro` })
        }
    }
    static async listarLivroPorId(req, res) {

        try {
            const id = req.params.id
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado)
        } catch (error) {
            res.status(500).json({ msg: `${error.message} - falha ao buscar livro` })
        }

    }
    static async editarLivro(req, res) {

        try {
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ msg: `Livro editado com sucesso` })
        } catch (error) {
            res.status(500).json({ msg: `${error.message} - falha ao editar livro` })
        }

    }
    static async deletarLivro(req, res) {

        try {
            const id = req.params.id
            await livro.findByIdAndDelete(id, req.body);
            res.status(200).json({ msg: "Livro deletado!"})
        } catch (error) {
            res.status(500).json({ msg: `${error.message} - falha ao deletar livro` })
        }

    }

};

export default LivroController