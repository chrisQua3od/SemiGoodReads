var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  fname: { type: String, required: true, maxlength: 100 },
  lname: { type: String, required: true, maxlength: 100 },
  date : Date
});

userSchema.statics.FindAll = function () {
  return this.find({});
};

module.exports = mongoose.model("aya", userSchema);
