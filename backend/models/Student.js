const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");


const Student = sequelize.define('student', {
    name: DataTypes.STRING(100),
    age: DataTypes.INTEGER,
}, {
    timestamps: false,
    default: {
        allowNull: false
    }
})

module.exports = Student;