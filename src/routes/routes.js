import express from 'express';
import { renderLogin } from "../controller/loginController.js";
import { getCadastro, postCadastro } from '../controller/cadastroController.js';

const router = express.Router();

router.get('/', renderLogin);

router.get('/cadastro', getCadastro);
router.post('/cadastro/cadastrar', postCadastro);

export default router;