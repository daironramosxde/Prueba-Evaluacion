import express from "express";
import {
    obtenerUsuarios,
    crearUsuario,
    consultarUsuario,
    actualizarUsuario,
    eliminarUsuario
} from "../controller/usuarioConttroller.js";

const router = express.Router();

router.get("/usuarios", obtenerUsuarios);

router.post("/usuarios", crearUsuario);

router.get("/usuarios/:id", consultarUsuario);

router.put("/usuarios/:id", actualizarUsuario);

router.delete("/usuarios/:id", eliminarUsuario);


export default router;