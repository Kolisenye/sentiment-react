const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

// Route for login
app.post("/api/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const emailColumn = db.query("SELECT * FROM users WHERE email = ?", email);
  const passwordColumn = db.query(
    "SELECT * FROM users WHERE password = ?",
    password
  );

  if (emailColumn && passwordColumn) {
    res.send({ loginStatus: true });
  } else {
    res.send({ loginStatus: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
