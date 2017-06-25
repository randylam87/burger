const path = require('path');
const mysql = require('mysql');

connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burger_db",
    port: 3306
});

connection.connect((err)=>{
    if(err){
        console.err(`Error connecting: ${err.staack}`);
        return
    }
    console.log(`Connected as id: ${connection.threadID}`)
});

module.exports = connection;