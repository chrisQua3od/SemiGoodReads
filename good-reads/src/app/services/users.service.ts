import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../components/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private client: HttpClient) {
    console.log('service ctor')
  }
  readonly baseURL: string = "http://localhost:8000/categories";
  readonly userBooks: string = "http://localhost:8000/users/606623d776e86ac9ad8902fd/books";
  
  getUsers() {
  return this.client.get(this.baseURL,{observe:'response'})
  }

  getUserBooks() {
    return this.client.get(this.userBooks,{observe:'response'})
  }
  
  getUserById(id: number) {
    return this.client.get(`${this.baseURL}/${id}`)
  }

  deleteUser(id: number){
    return this.client.delete(`${this.baseURL}/${id}`)
  }

  addUser(user:User){
    return this.client.post(this.baseURL,user)
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
