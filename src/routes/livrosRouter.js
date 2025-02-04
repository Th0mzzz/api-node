import express from 'express'
import LivroController from '../controllers/livros.js'

const router = express.Router();

router.get("/livros", LivroController.listarLivros);
router.get("/livros/:id", LivroController.listarLivroPorId);
router.post("/livros", LivroController.cadastrarLivro);
router.put("/livros/:id", LivroController.editarLivro);
router.delete("/livros/:id", LivroController.deletarLivro);

export default router