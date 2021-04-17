import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Author, Category, User, UserBooks } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
    './users.component.css'
  ]
})

export class UsersComponent implements OnInit,OnDestroy{

  users:Array<User> = [] //Done
  books:Array<UserBooks> = [] //Done
  categories:Array<Category> =[] //Done
  authors:Array<Author> =[] //Error

  constructor(private myService:UsersService) { }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe()
  }

  subscriber:any;
  ngOnInit(): void {
    this.subscriber = this.myService.getUserBooks()
      .subscribe((response:any)=>{
        console.log(response)
        this.books = response.body
        console.log(this.categories);
      },
      (err)=>{
        console.log(err)
      }  
    )
  }
}