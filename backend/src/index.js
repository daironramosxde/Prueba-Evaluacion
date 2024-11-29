// index.js
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import conectarBD from "./config/dbConfig.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

// Configurar __dirname para módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();

app.use(cors());


app.use(express.json());
app.use("/api", usuarioRoutes);


let corsOptions = {
    origin: '*',
    methods: "GET, POST, OPTIONS, PUT, DELETE",
    optionsSuccessStatus: 200,
};

// Ruta de bienvenida
app.get("/", (req, res) => {
    res.send("<h1>Bienvenido al API WEB de Áreas y Recursos</h1>");
});

// Conectar a la BD y escuchar en el puerto
conectarBD();
const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
