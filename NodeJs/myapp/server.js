const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const test = require("./routes/test");
const categories = require("./routes/categories");
const author = require("./routes/authors");
const books = require("./routes/books");
const users = require("./routes/users");

const bodyParser = require("body-parser");

// require("./dbConnection/db");
require("./dbConnection/mongo_connect");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/test", test);
app.use("/categories", categories);
app.use("/authors", author);
app.use("/books", books);
app.use("/users", users);

app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, (err) => {
  if (err) console.error("hhhhhhhhhhhhhhhh",err);
  console.log(`App server is running and listening on port ${PORT}`);
  
});