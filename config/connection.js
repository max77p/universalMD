var mysql = require('mysql');

var connection=mysql.createConnection({
    port:3306,
    host:"dyud5fa2qycz1o3v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user:"fd97dww0535fqvgg",
    password:"f4h7pr0fufyv5gne",
    database:"vqerxsvmih1vcm6m",
    multipleStatements:true
});

// Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  // Export connection for our ORM to use.
module.exports = connection;