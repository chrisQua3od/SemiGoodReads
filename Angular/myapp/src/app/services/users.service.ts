import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../components/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private client: HttpClient) {
    console.log('service ctor')
  }

  readonly baseURL: string = "http://localhost:8000/users";
  readonly userBooks: string = "http://localhost:8000/users/606623d776e86ac9ad8902fd/books";
  readonly catURL: string = "http://localhost:8000/categories";
  readonly authURL: string = "http://localhost:8000/authors";
  readonly bookURL: string = "http://localhost:8000/books";

  getUsers() {
    return this.client.get(this.baseURL, { observe: 'response' })
  }

  getAuthors() {
    return this.client.get(this.authURL, { observe: 'response' })
  }

  getCategories() {
    return this.client.get(this.catURL, { observe: 'response' })
  }

  getBooks() {
    return this.client.get(this.bookURL, { observe: 'response' })
  }

  getBookById(id: number) {
    return this.client.get(`${this.bookURL}/${id}`)
  }

  getUserBooks() {
    return this.client.get(this.userBooks, { observe: 'response' })
  }


  getUserById(id: number) {
    return this.client.get(`${this.baseURL}/${id}`)
  }

  getAuthorById(id: string) {
    return this.client.get(`${this.authURL}/${id}`)
  }

  getCategoryById(id: string) {
    return this.client.get(`${this.catURL}/${id}`)
  }


  deleteUser(id: number) {
    return this.client.delete(`${this.baseURL}/${id}`)
  }

  addUser(user: User) {
    return this.client.post(this.baseURL, user)
  }
  addReview(userId: string, body: Object) {
    return this.client.post(`${this.baseURL}/${userId}/add-review`, body)
  }
  editRating(userId: string, rating: Object) {
    return this.client.patch(`${this.baseURL}/${userId}/edit-rating`, rating)
  }
  editStatus(userId: string, status: Object) {
    return this.client.patch(`${this.baseURL}/${userId}/edit-status`, status)
  }
  addBook(userId: string, book: Object) {
    return this.client.post(`${this.baseURL}/${userId}/add-book`, book)
  }
}


// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class StudentsService {

//   constructor(private client: HttpClient) {
//     console.log('service ctor')
//     this.myObservable = new Observable((observer) => {
//       console.log("observable started")
//       let value = 0;
//       let handler = setInterval(() => {
//         if (value < 10) {
//           observer.next(value)
//           value++;
//         }
//         else{
//           observer.error('value exceeds 10 ')
//         }
//       }, 1000)
//     })
//   }

//   myObservable: Observable<number>;

//   readonly baseURL: string = "http://localhost:3000/students";
//   getStudents() {
//     //fetch list of students
//     // debugger;
//     // let response = this.client.get(this.baseURL)
//     return this.myObservable
//   }

//   getStudentById(id: number) {
//     //fetch student by id
//   }

// }
