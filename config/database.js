var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'coffeeshop',
    user: 'root',
    password: ''
});

module.exports = connection;