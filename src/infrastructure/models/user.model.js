const { DataTypes } = require("sequelize");

const sequelize = require("../database/connection");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },

    password_hash: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },

    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: "usuarios",
    timestamps: false
});

module.exports = User;