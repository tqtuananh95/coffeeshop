const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();
const dbconnect = require('./config/database');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// app.get('*', function(req, res) {
//     res.send('Hello word !');
// });

// Set routes
const home_page = require('./routers/home');
app.use('/', home_page);
app.use('/home', home_page);

// Start the server
const port = 3000;
app.listen(port, function() {
    console.log('Server started on port' + port);
    dbconnect.connect(function(err) {
        if(err) throw err;
        console.log('Database connected!');
    });
});