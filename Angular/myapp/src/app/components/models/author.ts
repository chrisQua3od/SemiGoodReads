export interface Author {
    _id:string,
    photo: String ,
    fname: String,
    lname: String,
    dateOfBirth:string,
    books :[
        {
            _id:string
            name:string
            cover:string
        }
    ]
}
