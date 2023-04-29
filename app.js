const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();
const dbconnect = require('./config/database');
//const i18nExpress = require("i18n-express"); // <-- require the module
const { I18n } = require('i18n');
var session = require('express-session')

// Express session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 60000 },
    messages: {},
    locale: ''
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));
const i18n = new I18n({
    locales: ['en', 'vi'],
    directory: path.join(__dirname, 'i18n'),
    defaultLocale: 'vi'
});

// app.use(i18nExpress({
//     translationsPath: path.join(__dirname, 'i18n'), // <--- use here. Specify translations files path.
//     siteLangs: ["en","vi"],
//     defaultLocale: 'vi',
//     textsVarName: 'translation'
// }));

app.use(i18n.init);

app.use(function (req, res, next) {
    var locale = 'vi';
    req.setLocale(locale);
    res.locals.language = locale;
    req.session.locale = locale;
    next();
});

// allow MANUAL locale selection
app.get("/*/lang/:locale", function (req, res) {
    // remember the user's chosen language
    req.session.locale = req.params.locale;
    req.setLocale(req.session.locale);
    //res.locals.language = locale;
    // go back to referrer OR root (/)
    var url = req.url.substring(0,req.url.length - 8);
    res.redirect(url);
});

// Set routes
const home_page = require('./routers/home');
const imageRouter = require('./routers/upload-image');
const designHomePageRouter = require('./routers/design-home-page');
const menuPageRouter = require('./routers/menu-page');
app.use('/', home_page);
app.use('/home', home_page);
app.use('/upload', imageRouter);
app.use('/admin', designHomePageRouter);
app.use('/menu', menuPageRouter);

let router = express.Router();
app.use(router);
// Start the server
const port = 3000;
app.listen(port, function() {
    console.log('Server started on port' + port);
    dbconnect.connect(function(err) {
        if(err) throw err;
        console.log('Database connected!');
    });
});