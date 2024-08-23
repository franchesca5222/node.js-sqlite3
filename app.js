const sqlite3 = require('sqlite3').verbose();
let sql;

//connect to DB
const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) =>{
    if (err) return console.error(err.message);
});

//create table

//sql = `CREATE TABLE users(id INTEGER PRIMARY KEY,first_name,last_name,username,password,email)`;
//db.run(sql);

//drop table
//db.run("DROP TABLE users");

//insert data
//sql = `INSERT INTO users (first_name,last_name,username,password,email) VALUES (?, ?, ?, ?, ?)`;
//db.run(sql, ["cesar","pochis","ikam_lm", "cesar@gmail.com"],(err)=>{
//if (err)return console.error(err.message);
//});

//update the data
sql = `UPDATE users SET first_name = ?, last_name = ?, username = ?  WHERE id = ?`;
db.run(sql,[ "franchesca", "Paredes", "franki19", 2], (err) => {
if (err) return console.error(err.message);
});

//DELETE data
//sql = `DELETE FROM users  WHERE id = ?`;
//db.run(sql, [1], (err) => {
//    if (err) return console.error (err.message);
//});


//query the data 
sql = `SELECT * FROM users`;
db.all(sql, [], (err, rows) => {
    if (err) return console.error(err.message);
    rows.forEach(row=>{
        console.log(row);
    });
});