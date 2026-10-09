const User = require("../models/user.model");
//funciones
async function buscarPorUsername(username) {
    //busca mi usuario por username
    const usuario = await User.findOne({
        where: { username },
        attributes: [ "id", "username", "password_hash", "activo"]
    });
    return usuario ? usuario.get({ plain: true }) : null;
}

module.exports = { buscarPorUsername};
