import { where } from "sequelize";
import Contato from "../model/contatosModel.js";

const getHome = (req, res) => {
    Contato.findAll({
        where:  {
            userId: req.session.userId
        }
    }).then(response => {
        console.log(response);
        res.render('home', {
            contatos: response
        });
    }).catch(err => {
        console.log(err)
    })
    
}

export {getHome};