import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    rol: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rol",
        required: true,
    }
});

export default mongoose.model("Usuario", usuarioSchema);