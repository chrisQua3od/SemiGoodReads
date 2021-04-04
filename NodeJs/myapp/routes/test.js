// var express = require("express");
// const TestModel = require("../models/TestModel");
// var router = express.Router();
// let AMODEL = require("../models/TestModel");

// router.get("/", function (req, res) {
//   //res.send("done")
//   AMODEL.FindAll()
//     .then((doc) => {
//       console.log(doc);
//       res.send(doc);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send(err);
//     });
// })
//   .get("/", function (req, res) {
//     res.set({
//       'Access-control-Allow-Origin': '*'
//     });
//     return res.redirect("../afolder/index.html");
//   })
//   .post("/", (req, res) => {
//     let fullname = TestModel({
//       username: req.body.uname,
//       fname: req.body.fname,
//       lname: req.body.lname,
//     });
//     fullname
//       .save()
//       .then((doc) => {
//         console.log(doc);
//         res.send(doc);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.send(err);
//       });
//   })
//   .patch("/", (req, res) => {
//     AMODEL.findOneAndUpdate(
//       { fname: req.body.fname },
//       { fname: req.body.newfname },
//       { new: true, runValidators: true }
//     )
//       .then((doc) => {
//         console.log("Record Updated Successfully!");
//         res.send(doc);
//       })
//       .catch((err) => {
//         console.error(err);
//         res.send(err);
//       });
//   })
//   .delete("/", (req, res) => {
//     TestModel.findOneAndDelete({
//       username: req.body.uname,
//     })
//       .then((doc) => {
//         console.log("Record Deleted Successfully!");
//         res.send(doc);
//       })
//       .catch((err) => {
//         console.error(err);
//         res.send(err);
//       });
//   });

// module.exports = router;
