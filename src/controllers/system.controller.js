//esta funcion me esta recibiendo el req y el res y me esta devolviendo un json con el estado del backend
const verificarEstado = (req, res) => {
    res.status(200).json({
        status: "ok",
        message: "Backend funcionando correctamente"
    });
};

module.exports = { verificarEstado };