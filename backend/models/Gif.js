const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");


const Gif = sequelize.define('gif', {
    url: DataTypes.STRING(255),
    howFunny: DataTypes.INTEGER,
}, {
    timestamps: false,
    default: {
        allowNull: false
    }
})

module.exports = Gif;