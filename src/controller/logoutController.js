export const logout = (req, res) => {
    req.session.destroy((err) => {
        if(err) {
            return res.send('Erro ao sair');
        }

        res.clearCookie('connect.sid');
        res.redirect('/');
    })
}