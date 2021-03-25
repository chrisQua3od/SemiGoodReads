const express = require("express")
const userModel = require('../models/user')
const userRouter = express.Router();
const UserController = require('../controllers/users')

userRouter
    .get("/:id", async (req, res) => {
        const userBooks = await UserController.getBooks(req.params.id);
        res.send(userBooks)
        // const user = await userModel.find({})
        // try {
        //     console.log(user);
        //     res.json(user)
        // }
        // catch (err) {
        //     console.log(err)
        // }
    })
    .post("/", async (req, res) => {
        const userInstance = new userModel({
            photo: req.body.photo,
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: req.body.password,
            library: req.body.library
        })

        const user = await userInstance.save()
        try {
            console.log("instance saves", user)
            res.json(user)
        }
        catch (err) {
            console.log(err)
        }
    }).get("/:id/read", async (req, res) => {
        // const userBooks = UserController.getBooks(req.params.id);
        const readBooks = await UserController.getBooksByStatus(req.params.id, "current reading")
        res.send(readBooks)
        // const user = await userModel.find({})
        // try {
        //     console.log(user);
        //     res.json(user)
        // }
        // catch (err) {
        //     console.log(err)
        // }
    })

module.exports = userRouter;