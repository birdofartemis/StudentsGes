const express = require('express');
const getRouter = express.Router();
const connection = require('../dbConnection');

function getUser(email, password){
getRouter.get('/', function(req, res) {
    const query = `SELECT * FROM users 
    WHERE email = ${email} 
    AND password = ${password}
    LIMIT 1`;

    connection.query(query, 
        (err) => {
            throw err;
        },
    
        (result) => {
            return res.json(result);
        });
    })};

module.exports = getUser;