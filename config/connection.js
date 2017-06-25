
const mysql = require('mysql');

connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db",
    port: 3306
});

connection.connect((err)=>{
    if(err){
        console.error(`Error connecting: ${err.stack}`);
        return;
    }
    console.log(`Connected as id: ${connection.threadId}`)
});

module.exports = connection;