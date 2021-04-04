const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const test = require("./routes/test");
// =======
// const PORT = process.env.PORT || 7000;
// const test = require("./routes/test");
// >>>>>>> a6cdc413b466c1d95e31a3ffc295d7ad640f31a7
const categories = require("./routes/categories");
const author = require("./routes/authors");
const books = require("./routes/books");
const users = require("./routes/users");
const register = require('./routes/register')
const cors = require('cors')

const bodyParser = require("body-parser");

// require("./dbConnection/db");
require("./dbConnection/mongo_connect");

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use("/test", test);
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
