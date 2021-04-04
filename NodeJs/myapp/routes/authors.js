const express = require("express")
const authorModel = require('../models/author')
const authorRouter = express.Router();


authorRouter.post("/", async (req, res) => {

    const authorInstance = new authorModel({
        ID: req.body.ID,
        photo: req.body.photo,
        fname: req.body.fname,
        lname: req.body.lname,
        dateOfBirth: req.body.dateOfBirth
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
    .get("/", async (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

        const author = await authorModel.find({}).populate("books").exec();
        try {
            console.log(author);
            res.json(author)
        }
        catch (err) {
            console.log(err)
        }
    }).get("/:id", async (req, res) => {
        const { id } = req.params
        try {
            const author = await authorModel.findById(id).populate("books").exec();
            res.json(author)
        }
        catch (err) {
            console.log(err);
        }

    }).delete("/:id", async (req, res) => {
        const result = await authorModel.findByIdAndRemove({ _id: req.params.id }, { ID: req.body.ID, photo: req.body.photo, fname: req.body.fname, lname: req.body.lname, dateOfBirth: req.body.dateOfBirth })
        try {
            res.json(result);

        }
        catch (err) {
            console.log(err);
        }

    }).patch("/:id", async (req, res) => {

        const { id } = req.params;
        const author = req.body
        const updatedUAuthor = {
            ...(author.ID ? { ID: author.ID } : {}),
            ...(author.photo ? { photo: author.photo } : {}),
            ...(author.fname ? { fname: author.fname } : {}),
            ...(author.lname ? { lname: author.lname } : {}),
            ...(author.dateOfBirth ? { dateOfBirth: author.dateOfBirth } : {}),
        }

        try {
            const authorA = await authorModel.findOneAndUpdate({ _id: id }, updatedUAuthor)
            res.json(authorA)

        } catch (error) {
            return console.log("Error : failed to update author with id: " + id);
        }
    })


module.exports = authorRouter;