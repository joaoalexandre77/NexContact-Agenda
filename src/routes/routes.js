import express from 'express';
import { authLogin, renderLogin } from "../controller/loginController.js";
import { getCadastro, postCadastro } from '../controller/cadastroController.js';
import { getHome } from '../controller/homeController.js';
import { isLogado } from '../middlewares/issessionMiddleware.js';
import { isGuest } from '../middlewares/isGuestMiddleware.js';
import { logout } from '../controller/logoutController.js';

const router = express.Router();

router.get('/', isGuest, renderLogin);
router.post('/login', authLogin);

router.get('/cadastro', isGuest ,getCadastro);
router.post('/cadastro/cadastrar', postCadastro);

router.get('/home', isLogado, getHome);

router.get('/sair', logout);

export default router;