import userModel from '../model/userModel.js';

const getCadastro = (req, res) => {
    res.render('cadastro');
}

const postCadastro = (req, res) => {
    console.log('Postado');

    const userName = req.body.txtNome;
    const email = req.body.txtEmail;
    const password = req.body.txtSenha;

    async function insertData() {
        try {
            await userModel.create({
                nome: userName,
                email: email,
                senha: password
            });
            res.redirect('/');
        } catch (error) {
            console.log(error);
        }
    }
    insertData();
    
}

export {getCadastro, postCadastro};