export const isGuest = (req, res, next) => {
    if(req.session.userId) {
        console.log(req.session);
        return res.redirect('/home');
    }
    next();
}