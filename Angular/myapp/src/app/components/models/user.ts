export interface User {
    _id: string
    fname: string
    lname: string
    photo: string
}

export interface Category {
    _id: string
    name: string
    books: [
        {
            _id: string
            name: string
            cover: string
        }
    ]
}

export interface Book {
    _id: string
    name: string
    cover: string
    categoryId: string
}

export interface Author {
    _id: string
    photo: String,
    fname: String,
    dateOfBirth: string,
    lname: String,
    books: [
        {
            _id: string
            name: string
            cover: string
        }
    ]
}

export interface UserBooks {
    status: string
    rating: string
    bookId: {
        Cover: string
        name: string
    }
}