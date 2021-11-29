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
    (err) ? console.log(`Error connecting to ${process.env._HOST}`) : console.log(`Connected to ${process.env._HOST}`)
});

module.exports = connection;