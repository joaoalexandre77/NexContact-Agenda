import connection from "./sequelize-config.js";

async function authConnectionDataBase() {
    try {
        await connection.authenticate();
        console.log('Conexão Estabelecida com o banco');
    } catch (error) {
        console.error(error);
    }
}

export {authConnectionDataBase};