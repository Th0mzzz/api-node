import "dotenv/config";
import app from "./src/app.js";
const PORT = 8000;
app.listen(PORT, () => {
    console.log('Servidor escutando na porta' + PORT)
    console.log(`http://localhost:${PORT}`)
});