var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bucketList_db"
});

connection.connect(function(err){
    if (err) {
        console.error("error connecting to database:" + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
})

//Export connection for ORM 
module.exports = connection;