import session from "express-session";
import conectSessionSequelize from "connect-session-sequelize";
import connection from "../config/sequelize-config.js";

const sequelizeStore = conectSessionSequelize(session.Store);

const sessionStore = new sequelizeStore({db: connection});

const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
})

sessionStore.sync({force: false});

export {sessionMiddleware, sessionStore };