var mongoose = require("mongoose");

var mongoDB = "mongodb://127.0.0.1/blogApp";

if (
  mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
) {
  console.log("Connected to DB");
}

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
