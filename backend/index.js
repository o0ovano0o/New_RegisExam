const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const pg = require('pg');
const cors = require('cors');
const cron = require('node-cron');
const pgSession = require('connect-pg-simple')(session);

require('dotenv').config();
const { validateAppAPI } = require('./src/middlewares/validateAPIAuthentication');

const reminderSendMail = require('./src/common/sendEmailMonitor');

app.use(
    cors({
        credentials: true,
        allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        origin: [
            'http://localhost:8080',
        ],
    })
);

app.use(express.static('./uploads'));
app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }));
app.use(bodyParser.json({ limit: '10mb' }));

const pgconnectPool = new pg.Pool({
    user: 'postgres',
    password: 'nhom05',
    host: '104.248.149.21',
    port: 31388,
    database: 'DatabaseNhom5',
});

const sess_cfg = {
    store: new pgSession({
        pool: pgconnectPool,
        tableName: 'session',
    }),
    secret: '6rhrD11GJlJt',
    resave: false,
    saveUninitialized: false,
    maxAge: 24 * 60 * 60 * 1000,
};

if (app.get('env') === 'production') {
    app.set('trust proxy', 1);
    sess_cfg.cookie = {
        sameSite: 'none',
        secure: true,
    };
}

app.use(session(sess_cfg));

app.get('/api/me', validateAppAPI, async (req, res) => {

    res.json({
        id: req.session.user_id,
    });
});

cron.schedule('* * * * *', reminderSendMail);

const PUPLIC_APIS = [
    'login',
    'register'
];

const APP_APIS = [
    'exam',
    'listsubject',
    'home',
    'student',
    'admin',
    'classes',
    'subject',
    'print',
    'result'
];

/* eslint-disable global-require */
PUPLIC_APIS.forEach((apiPath) =>
    app.use(require(`./src/routes/public/${apiPath}`))
);
APP_APIS.forEach((apiPath) => app.use(require(`./src/routes/app/${apiPath}`)));

// module.exports = app;
const server = app.listen(process.env.PORT || 3000, () =>
    console.log(`Your app is listening on port ${server.address().port}`)
);