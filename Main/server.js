// Require packages
const express = require('express');
const mysql = require('mysql2');

const app = express(); // Require the Express module and assign to variable
const port = 3000;

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: ''
});

db.connect((err) => {
    if (err) throw err; // Display error when cannot connect to db. 
    console.log("Connection established!");
});