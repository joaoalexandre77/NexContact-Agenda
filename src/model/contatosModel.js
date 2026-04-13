import connection from "../config/sequelize-config.js";
import Sequelize from "sequelize";
import User from "./userModel.js";

const Contato = connection.define('contato', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
     userId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  }
});

User.hasMany(Contato, {
    foreignKey: 'userId'
});

Contato.belongsTo(User, {
    foreignKey: 'userId'
})

Contato.sync({force: false});

export default Contato;