import { Author , User } from "./user";

export interface Book {
    _id: string
    name: string
    cover: string
    categoryId: string
    sumary: string
    status: string
    countAvg: number
    author: Author
    sumAvg: number
    reviews: [{ body: ''  , user: User}]
}