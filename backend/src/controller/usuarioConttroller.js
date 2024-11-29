import Usuario from "../models/usuarioModel.js";

//obtener usuario
export const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los usuarios",
            error: error.message,
        })
    }
};

//Crear usuario
export const crearUsuario = async (req, res) => {
    try {
        const nuevoUsuario = new Usuario(req.body);
        await nuevoUsuario.save();
        res.status(201).json({
            message: "Usuario creado exitosamente",
            usuario: nuevoUsuario,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el usuario",
            error: error.message,
    })
    }
};

export const consultarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if(!usuario) {
            res.status(404).json({
                message: "Usuario no encontrado",
        })};
        res.status(200).json({
            message: "Usuario encontrado",
        })
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el usuario",
            error: error.message,
        });
    }
};

export const actualizarUsuario = async (req, res) => {
    try {
        const usuarioActualizado = await Usuario.findByIdAndUpdate(
            req.params.id, req.body, {new: true, runValidators: true});
        if(!usuarioActualizado) {
            res.status(404).json({
                message: "Usuario no encontrado",
        })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el usuario",
            error: error.message,
        })
    }
}

export const eliminarUsuario = async (req, res) => {
    try {
       const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);
        if(!usuarioEliminado) {
            res.status(404).json({
                message: "Usuario no encontrado",
        })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el usuario",
            error: error.message,
        })
    }
}