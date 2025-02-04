import express from 'express'
import AutoresController from '../controllers/autores.js';


const router = express.Router();

router.get("/autores", AutoresController.listarAutores);
router.get("/autores/:id", AutoresController.listarAutorPorId);
router.post("/autores", AutoresController.cadastrarAutor);
router.put("/autores/:id", AutoresController.editarAutor);
router.delete("/autores/:id", AutoresController.deletarAutor);

export default router