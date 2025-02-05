import mongoose from "mongoose";
import { autorSchema } from "./autores.js";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    título: { type: String, required: true },
    preco: { type: Number, required: true },
    editora: { type: String, required: true },
    autor: autorSchema,
    favoritado: { type: Boolean, default: false }
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema)

export default livro;
export {
    livroSchema
}