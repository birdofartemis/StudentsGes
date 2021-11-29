const mysql = require('mysql2');
require('dotenv').config({path: './private/.env'});

const connection = mysql.createConnection({
    host: process.env._HOST,
    user: process.env._USERNAME,
    password: process.env._PASSWORD,
    database: process.env._DATABASE,
    port: process.env._PORT
});

connection.connect(err => {
    (err) ? alert(`Error connecting to ${process.env._DATABASE}`) : console.log(`Connected to ${process.env._DATABASE}`)
});

module.exports = connection;