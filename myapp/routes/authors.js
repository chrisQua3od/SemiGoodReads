const express = require("express")
const authorModel = require('../models/author')
const authorRouter = express.Router();


authorRouter.post("/", async (req, res) => {

    const authorInstance = new authorModel({
        ID: req.body.id,
        photo: req.body.photo,
        fname: req.body.fname,
        lname: req.body.lname,
        dateOfBirth : req.body.date
    })

    const author = await authorInstance.save()
    try {
        console.log("instance saves", author)
        res.json(author)
    }
    catch (err) {
        console.log(err)
    }
})
.get("/", async(req, res) => {
    const author = await authorModel.find({})
    try {
        console.log(author);
        res.json(author)
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = authorRouter;