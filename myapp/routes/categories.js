const express = require("express")
const categoriesModel = require('../models/categories')
const categoriesRouter = express.Router();
const categoriesController = require('../controllers/categories')
categoriesRouter.post("/", async (req, res) => {

    const categoriesInstance = new categoriesModel({
        Name: req.body.Name,
        CategoryId: req.body.CategoryId,
        books: req.body.books

    })

    const category = await categoriesInstance.save()
    try {
        console.log("instance saves", category)
        res.json(category)
    }
    catch (err) {
        console.log(err)
    }

})
    .get("/", async (req, res) => {
        try {
            res.send(categoriesController.listCategories())
        }
        catch {
            res.send("error")
        }
        // const category = await categoriesModel.find({})
        // try {
        //     console.log(category);
        //     res.json(category)
        // }
        // catch (err) {
        //     console.log(err)
        // }
    })
module.exports = categoriesRouter;