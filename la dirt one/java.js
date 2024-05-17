const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "id22180990_richard42069",
    database: "mysql",
    password: "KLMklm4805!",
    multipleStatements: true,
})


mysqlConnection.connect((err) => {
    if (!err) {
        console.log("Connected");
    } else {
        console.log("Connection failed");
    }
});

module.export = mysqlConnection;

    function handleClick() {
        alert('FUNCIONA');

    }

document.addEventListener('DOMContentLoaded', function() {
    var izq = document.getElementsByClassName('left');
    for (var i = 0; i < izq.length; i++) {
        izq[i].addEventListener('click', handleClick);
    }
})