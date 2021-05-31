const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "dashboard_login",
    password: "",
});
connection.connect();

module.exports = connection;