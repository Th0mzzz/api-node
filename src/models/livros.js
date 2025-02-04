import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    título: { type: String, required: true },
    preco: { type: Number, required: true },
    editora: { type: String, required: true },
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema)

export default livro;