const { Sequelize } = require("sequelize");
const dotenv = require('dotenv');
dotenv.config()

const db = process.env.database;
const user = process.env.user;
const pw = process.env.password;
const host = process.env.host;

const sequelize = new Sequelize(db,user,pw, {
    host: host,
    dialect: 'postgres',
    dialectOptions: {
        ssl: true,
    },
    logging: false
})

async function testConnect() {
    try {
        sequelize.authenticate();
        console.log('connected to online database!');
    } catch (err) {
        console.log('did not connect to online', err);
    }
}

module.exports = {sequelize, testConnect}