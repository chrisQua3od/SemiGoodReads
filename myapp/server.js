const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const loginRouter = require('./routes/login')
var jwt = require('jsonwebtoken');
const test = require("./routes/test");
const categories = require("./routes/categories");
const author = require("./routes/authors");
const books = require("./routes/books");
const users = require("./routes/users");
const bodyParser = require("body-parser");
// require("./dbConnection/db");
 require("./dbConnection/mongo_connect");

  app.use((req,res,next)=>{
  console.log(new Date(), req.url, req.method)
  next()

})

const authent = ((req,res,next)=>{
  const bearerHeader = req.headers['authorization'];
  console.log("hello")
  if(typeof bearerHeader !== 'undefined') 
  {
    console.log("hhhhhhh")
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];

      jwt.verify(bearerToken, 'secretkeyaya123', (err, authData) => {
          if(err) 
          {
              res.sendStatus(403);
          } 
          else 
          {
              console.log("aya") 
              next();
          }
      })
  } 
  else{
  console.log("jjjjjjjjjjjj")
}});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/login", loginRouter)
app.use("/test", test);
app.use("/categories", categories);
app.use("/authors", author);
app.use("/books", books);
app.use("/users",authent, users);

app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`App server is running and listening on port ${PORT}`);
});