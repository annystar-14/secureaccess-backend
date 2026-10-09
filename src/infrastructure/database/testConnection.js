require("dotenv").config();

const sequelize = require("./connection");
const User = require("../models/user.model");

async function probarConexion() {
    try {
        await sequelize.authenticate();

        console.log("Conexión exitosa con el mapeador");

        const usuarios = await User.findAll({
            attributes: ["id", "username", "activo"]
        });

        console.log("Usuarios encontrados:", usuarios.length);

        console.log(
            usuarios.map(usuario => usuario.toJSON())
        );

    } catch (error) {
        console.error("Error:", error.message);

    } finally {
        await sequelize.close();
    }
}

probarConexion();