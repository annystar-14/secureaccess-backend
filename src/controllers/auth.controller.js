const {loginUseCase } = require("../application/usecases/login.usecase");

async function login(req, res) {
    try {
        const { username, password } = req.body || {};

        if (
            typeof username !== "string" ||
            typeof password !== "string" ||
            !username.trim() ||
            !password
        ) {
            return res.status(400).json({
                message: "Usuario y contraseña son obligatorios"
            });
        }

        const resultado = await loginUseCase(
            username.trim(),
            password
        );

        if (!resultado) {
            return res.status(401).json({
                message: "Credenciales inválidas"
            });
        }

        return res.status(200).json({
            message: "Inicio de sesión exitoso",
            ...resultado
        });

    } catch (error) {
        console.error("Error de autenticación:", error.message);

        return res.status(500).json({
            message: "Error interno del servidor"
        });
    }
}

module.exports = { login };