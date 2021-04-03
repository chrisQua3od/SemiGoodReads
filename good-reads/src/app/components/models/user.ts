export interface User {
    name:string
    city:string
}

export interface UserBooks{
    status:string
    rating: string
    bookId : {
        Cover:string
        name: string
    }
}