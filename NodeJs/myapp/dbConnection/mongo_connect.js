var mongoose = require("mongoose");

<<<<<<< HEAD
const atlasUri="mongodb+srv://semiGoodReadings:book1234@semigoodreadings.jkudq.mongodb.net/semiGoodReadings?retryWrites=true&w=majority";
=======
// const atlasUri = "mongodb+srv://semiGoodReadings:book1234@semigoodreadings.jkudq.mongodb.net/semiGoodReadings?retryWrites=true&w=majority";
const atlasUri = 'mongodb+srv://semiGoodReadings:book1234@semigoodreadings.jkudq.mongodb.net/semiGoodReadings?retryWrites=true&w=majority'
>>>>>>> a6cdc413b466c1d95e31a3ffc295d7ad640f31a7
//var mongoDB = "mongodb://127.0.0.1/blogApp";

//mongoose.
mongoose.connect(atlasUri, { useNewUrlParser: true, useUnifiedTopology: true })
<<<<<<< HEAD
.then((result)=>console.log("atlaaas"))
.catch((err)=>console.log("errrrrrrrrrrrrrrrrrrrrrrr\n",err));

// if (
//   mongoose.connect(atlasUri, { useNewUrlParser: true, useUnifiedTopology: true })
// ) {
//   console.log("Connected to DB atlaaaaaas");
// }

=======
  .then((result) => console.log("atlaaas"))
  .catch((err) => console.log("errrrrrrrrrrrrrrrrrrrrrrr\n", err));


// var mongoose = require("mongoose");

// var mongoDB = "mongodb://127.0.0.1/blogApp";

// if (
//   mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
// ) {
//   console.log("Connected to DB");
// }

>>>>>>> a6cdc413b466c1d95e31a3ffc295d7ad640f31a7
// var db = mongoose.connection;

// db.on("error", console.error.bind(console, "MongoDB connection error:"));
