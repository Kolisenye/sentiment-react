const db = require("../config/db");

db.connect((err) => {
  if (err) throw err;

  //create database
  //   db.query("CREATE DATABASE users", (err, result) => {
  //     if (err) throw err;
  //   });

  // table users
  db.query("DROP TABLE IF EXISTS users", (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  db.query(
    "CREATE TABLE users (firstname VARCHAR(255)," +
      "lastname VARCHAR(255)," +
      "email VARCHAR(255)," +
      "password VARCHAR(255)" +
      ")",
    (err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );
});
