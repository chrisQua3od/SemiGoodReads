export interface User {
    _id:string
    fname:string
    lname:string
    photo:string
}

export interface Category{
    name:string
}

export interface Author{
    _id:string
    fname:string
    lname:string
    dateOfBirth: string
    photo:string
}

export interface UserBooks{
    status:string
    rating: string
    bookId : {
        Cover:string
        name: string
    }
}