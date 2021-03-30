const UserModel = require('../models/users')


//Save new User
async function saveNewUser(req, res) {
    const userInstance = new UserModel({
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
}

async function getUsers(req, res) {
    try {
        res.status(200).send(UserModel.find({}))
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//list all books for user
async function getBooks(req, res) {
    try {
        const userData = await UserModel.findById(req.params.id)
        res.status(200).send(userData.library)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

// list books with read status
async function getReadBooks(req, res) {
    try {
        const readBooks = await getBooksByStatus(req.params.id, "read")
        res.status(200).send(readBooks)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function getCurrentlyReadingBooks(req, res) {
    try {
        const readBooks = await getBooksByStatus(req.params.id, "current reading")
        res.status(200).send(readBooks)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function getWantToReadBooks(req, res) {
    try {
        const readBooks = await getBooksByStatus(req.params.id, "want to read")
        res.status(200).send(readBooks)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function getBooksByStatus(userId, status) {
    const allBooks = await UserModel.findOne({ _id: userId }).select({ library: 1, _id: 0 })
    const readBooks = allBooks.library.filter((book) => book.status === status)
    return readBooks
}

module.exports = {
    getBooks,
    getReadBooks,
    saveNewUser,
    getUsers,
    getCurrentlyReadingBooks,
    getWantToReadBooks
}