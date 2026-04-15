import { where } from 'sequelize';
import userModel from '../model/userModel.js';

export const renderLogin = (req, res ) => {
    res.render('index');
}

export const authLogin = (req, res) => {
    async function auth() {
        const user = await userModel.findOne({
            where: {
                email: req.body.txtEmail,
                senha: req.body.txtSenha
            }
        })
        if(user) {
            req.session.userId = user.id;
            return res.redirect('/home');
        } else {
            res.send('Usuario nao encontrado');
        }
    }
    auth();
}