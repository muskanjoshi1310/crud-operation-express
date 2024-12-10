import mysql from "mysql2";


const connection = mysql.createPool({
    host: "localhost",      
    user: "root",           
    password: "12345",      
    database:"web"   
   
});


export default connection;
