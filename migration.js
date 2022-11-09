// start: node migration.js up --migrate-all
var mysql = require('mysql');
var migration = require('mysql-migrations');

var connection = mysql.createPool({
  connectionLimit : 10,
  host: 'localhost',
  database: 'mrk_coffee',
  user: 'root',
  password: ''
});

migration.init(connection, __dirname + '/migrations', function() {
  console.log("finished running migrations");
});