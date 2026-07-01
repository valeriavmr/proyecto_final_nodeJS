import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";

const PORT = 3020;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});