import connection from "../config/sequelize-config.js";
import Sequelize from "sequelize";

const User = connection.define('User',{
    nome : {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },

    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

User.sync({force: false});

export default User;