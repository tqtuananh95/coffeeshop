var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'mrk_coffee',
    user: 'root',
    password: ''
});

module.exports = connection;