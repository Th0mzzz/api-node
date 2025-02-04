import express from 'express'
import dbConnect from './config/dbConnect.js';
import routes from './routes/index.js';
const conn = await dbConnect();
conn.on("error", (erro) => {
    console.error("Erro com a conexão", erro)
})

conn.once("open", () => {
    console.log("conexao estabelecida com sucesso!");
})
const app = express();
routes(app)

export default app;