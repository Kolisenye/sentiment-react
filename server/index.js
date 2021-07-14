const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());

// Route for login
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        return res.send({ loginStatus: true });
      } else {
        res.send({ error: "Wrong username/password combination!" });
      }
    }
  );
});

// Route for register
app.post("/register", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;
  db.query(
    "INSERT INTO users (email, password, firstname, lastname) VALUES (?,?,?,?)",
    [email, password, firstname, lastname],
    (err, result) => {
      console.log(err);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
