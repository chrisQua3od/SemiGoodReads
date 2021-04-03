import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User, UserBooks } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})

export class UsersComponent implements OnInit,OnDestroy{

  users:Array<User> = []
  books:Array<UserBooks> = []

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
        console.log(this.books);
      },
      (err)=>{
        console.log(err)
      }  
    )
  }
}