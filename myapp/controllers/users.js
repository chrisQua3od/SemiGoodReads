const UserModel = require('../models/user')

//list all books for user
async function getBooks(userId) {
    const userData = await UserModel.findById(userId)

    return userData.library
}
// list books with read status
async function getBooksByStatus(userId, status) {
    const allBooks = await UserModel.findOne({ _id: userId }).select({ library: 1, _id: 0 })
    const readBooks = allBooks.library.filter((book) => book.status === status)
    console.log(readBooks);
    return readBooks
}

module.exports = {
    getBooks,
    getBooksByStatus
}