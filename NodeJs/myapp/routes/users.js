const express = require("express")
const userModel = require('../models/users')
const userRouter = express.Router();
const UserController = require('../controllers/users')


///bassiony
userRouter.get("/:id/books", UserController.getBooks);
userRouter.get("/:id", UserController.getUser)
userRouter.post("/", UserController.saveNewUser);
userRouter.get("/:id/read", UserController.getReadBooks);
userRouter.get("/:id/wantToRead", UserController.getWantToReadBooks);
userRouter.get("/:id/currentlyReading", UserController.getCurrentlyReadingBooks);
userRouter.get("/", UserController.getUsers);
///bassiony

userRouter
    .get("/", async (req, res) => {
        const user = await userModel.find({}).populate('books').exec()
        try {
            console.log(user);
            res.json(user)
        }
        catch (err) {
            console.log(err)
        }
    })

// userRouter
// .get("/", async(req, res) => {
//     const user = await userModel.find({})
//     try {
//         console.log(user);
//         res.json(user)
//     }
//     catch (err) {
//         console.log(err)
//     }
// })
// .post("/",async(req,res)=>{
//     const userInstance = new userModel({
//         photo: req.body.photo,
//         fname: req.body.fname,
//         lname: req.body.lname,
//         email : req.body.email,
//         password: req.body.password,
//         library : req.body.library
//     })

//     const user = await userInstance.save()
//     try {
//         console.log("instance saves", user)
//         res.json(user)
//     }
//     catch (err) {
//         console.log(err)
//     }
// })

module.exports = userRouter;