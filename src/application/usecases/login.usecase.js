
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const { buscarPorUsername} = require("../../infrastructure/repositories/user.repository");

async function loginUseCase(username, password) {

    // Busca el usuario en mi bd mediante mi mapeo
    const usuario = await buscarPorUsername(username);
    if (!usuario || !usuario.activo) 
    {
        return null;
    }

    const passwordValida = await argon2.verify
    (
        usuario.password_hash,
        password
    );

    if (!passwordValida) 
    {
        return null;
    }

    // 4. Generacion del token
    const token = jwt.sign(
        {
            sub: String(usuario.id),
            username: usuario.username
        },
        process.env.JWT_SECRET,
        {
            algorithm: "HS256",
            expiresIn: "15m",
            issuer: "zerotrust-api",
            audience: "zerotrust-web"
        }
    );
//devuelvo el token y los datos del usuario
    return {
        token,
        usuario: {
            id: usuario.id,
            username: usuario.username
        }
    };
}

module.exports = { loginUseCase };
