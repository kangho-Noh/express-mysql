const dotenv = require("dotenv");
const mysql = require("mysql");
dotenv.config();

USER_ID = process.env.USER_ID;
PASSWORD = process.env.PASSWORD;

const connection = mysql.createConnection({
  host: "localhost",
  user: USER_ID,
  password: PASSWORD,
  database: "testdb",
});

connection.connect();

connection.query("select * from Users", (error, rows, fields) => {
  if (error) throw error;
  console.log("User info is: ", rows);
});

connection.end();
