import Sequelize from "sequelize";

const connection = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.BD_DATABASE,
    timezone:'-03:00'
});

export default connection;