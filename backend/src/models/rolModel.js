import mongoose from "mongoose";

const rolschema = new mongoose.Schema({
    descripcion: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Rol", rolschema);

