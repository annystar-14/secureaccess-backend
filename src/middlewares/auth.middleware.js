
const jwt = require("jsonwebtoken");

function verificarToken(req, res, next) {
    const authorization = req.headers.authorization;

    if (!authorization?.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "Token requerido"
        });
    }

    const token = authorization.slice(7);

    try {
        const payload = jwt.verify(
            token,
            process.env.JWT_SECRET,
            {
                algorithms: ["HS256"],
                issuer: "zerotrust-api",
                audience: "zerotrust-web"
            }
        );

        req.usuario = {
            id: payload.sub,
            username: payload.username
        };

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Token inválido o expirado"
        });
    }
}

module.exports = { verificarToken };
