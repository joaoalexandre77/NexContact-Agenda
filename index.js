import express, { urlencoded } from 'express';
import 'dotenv/config';
import router from './src/routes/routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { authConnectionDataBase } from './src/config/database.js';
import { sessionMiddleware } from './src/middlewares/sessionMiddleware.js';
import { securityHelmet } from './src/middlewares/helmetMiddleware.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'src', 'public')));

app.use(urlencoded({extended: false}));

app.use(sessionMiddleware);

authConnectionDataBase();

app.use(securityHelmet);

app.use('/', router);

const port = 8080;
app.listen(port, (e) => {
    if(!e) console.log(`Servidor inicializado http://localhost:${port}`);
});