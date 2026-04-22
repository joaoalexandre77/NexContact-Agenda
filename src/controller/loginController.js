import { where } from 'sequelize';
import userModel from '../model/userModel.js';
import { comparePassword } from '../services/bcrypt.js';

export const renderLogin = (req, res ) => {
    res.render('index');
}

export const authLogin = (req, res) => {
    async function auth() {
        const {txtEmail, txtSenha} = req.body;
        const user = await userModel.findOne({
            where: {
                email: txtEmail
            }
        })
        if(!user) {
            return res.send('Usuario nao encontrado');
        }

        const isValidPassword = await comparePassword(txtSenha, user.senha);



        if(!isValidPassword) {
            return res.send('Senha incorreta');
        }

        req.session.userId = user.id;

        res.redirect('/home')
    }
    auth();
}