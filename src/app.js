import express from 'express'
import dbConnect from './config/dbConnect.js';
import routes from './routes/index.js';
import cors from 'cors'
const conn = await dbConnect();
conn.on("error", (erro) => {
    console.error("Erro com a conexão", erro)
})

conn.once("open", () => {
    console.log("conexao estabelecida com sucesso!");
})
const app = express();
app.use(cors({ origin: "*" }))
routes(app)

export default app;