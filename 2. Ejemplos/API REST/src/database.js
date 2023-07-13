const mysql = require("mysql2");

const connection = mysql.createConnection(
    {
        host         : "localhost",
        user         : "root",
        password     : "codenotch",
        database     : "angular"
    });

connection.connect(function(error){
    if(error){
       console.log(error);
    }else{
       console.log('Conexion correcta.');
    }
 });

 module.exports = connection;