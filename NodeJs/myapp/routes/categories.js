const express = require("express")
const categoriesModel = require('../models/categories')
const categoriesRouter = express.Router();
const categoriesController = require('../controllers/categories')

categoriesRouter.post("/", async (req, res) => {

    const categoriesInstance = new categoriesModel({
        name: req.body.name,
        categoryId: req.body.categoryId,
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


    // <<<<<<< bassiouny
    //     .get("/", async (req, res) => {
    //         try {
    //             res.send(categoriesController.listCategories())
    //         }
    //         catch {
    //             res.send("error")
    //         }
    //         // const category = await categoriesModel.find({})
    //         // try {
    //         //     console.log(category);
    //         //     res.json(category)
    //         // }
    //         // catch (err) {
    //         //     console.log(err)
    //         // }
    //     })
    // =======
    .get("/", async (req, res) => {
        const category = await categoriesModel.find({}).populate("books").exec()
        try {
            console.log(category);
            res.json(category)
        }
        catch (err) {
            console.log(err)
        }
    })


    .get("/:id", async (request, response) => {
        const { id } = request.params
        try {
            const category = await categoriesModel.findById(id).populate("books").exec()
            response.json(category);
        } catch (error) {
            return console.log(error);
        }
    })

    .delete("/:id", async (request, response) => {
        const { id } = request.params
        try {
            const deletedcategory = await categoriesModel.deleteOne({ _id: id })
            response.send("categoriesModel Deleted Correctly")
        } catch (error) {
            return console.log(error);
        }
    })

    .patch("/:id", async (request, response) => {
        const { id } = request.params;
        const category = request.body
        const updatedcategory = {
            ...(category.name ? { name: category.name } : {}),
            ...(category.categoryId ? { categoryId: category.categoryId } : {})

        }

        try {
            const updatededcategory = await categoriesModel.findOneAndUpdate({ _id: id }, updatedcategory)
            response.json(updatededcategory)
        } catch (error) {
            return console.log(error);
        }
    })

module.exports = categoriesRouter;