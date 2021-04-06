const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const loginRouter = require('./routes/login')
var jwt = require('jsonwebtoken');
const categories = require("./routes/categories");
const author = require("./routes/authors");
const books = require("./routes/books");
const users = require("./routes/users");
const register = require('./routes/register')
const config = require('./config')
const cors = require('cors')

const bodyParser = require("body-parser");
// require("./dbConnection/db");
require("./dbConnection/mongo_connect");

app.use((req, res, next) => {
  console.log(new Date(), req.url, req.method)
  next()

})

const authent = ((req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  console.log("hello")
  if (typeof bearerHeader !== 'undefined') {
    console.log("hhhhhhh")
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    jwt.verify(bearerToken, config.secret, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      }
      else {
        console.log("aya")
        next();
      }
    })
  }
  else {
    console.log("jjjjjjjjjjjj")
  }
});

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/login", loginRouter)
app.use("/categories", categories);
app.use("/authors", author);
app.use("/books", books);
app.use("/users", users);
app.use("/register", register);


app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});
app.use((req, res, next) => {
  console.error(err.stack);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  res.status(500).send("Something broke!");
});

app.listen(PORT, (err) => {
  if (err) console.error("hhhhhhhhhhhhhhhh", err);
  console.log(`App server is running and listening on port ${PORT}`);

});
