const express = require("express")
const bookModel = require('../models/books')
const bookRouter = express.Router();


bookRouter.post("/", async (req, res) => {

    const bookInstance = new bookModel({
        Cover: req.body.cover,
        name: req.body.name,
        AvgRate: req.body.avg
    })

    const book = await bookInstance.save()
    try {

        console.log("instance saves", book)
        res.json(book)
    }
    catch (err) {
        console.log(err)
    }

})
.get("/", async(req, res) => {
    const book = await bookModel.find({})
    try {
        console.log(book);
        res.json(book)
    }
    catch (err) {
        console.log(err)
    }
    console.log("Done");
})

module.exports = bookRouter;