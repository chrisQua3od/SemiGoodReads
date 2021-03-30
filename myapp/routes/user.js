const express = require("express")
const userModel = require('../models/user')
const userRouter = express.Router();
const UserController = require('../controllers/users')


userRouter.get("/:id", UserController.getBooks);
userRouter.post("/", UserController.saveNewUser);
userRouter.get("/:id/read", UserController.getReadBooks);
userRouter.get("/:id/wantToRead", UserController.getWantToReadBooks);
userRouter.get("/:id/currentlyReading", UserController.getCurrentlyReadingBooks);
userRouter.get("/", UserController.getUsers);

module.exports = userRouter;