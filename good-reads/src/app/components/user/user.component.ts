import { Component, Input, OnInit } from '@angular/core';
import { User, UserBooks } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  constructor() {}

  @Input('userInfo') user:User = {
    name:'',
    city:''
  }
  
  @Input('bookInfo') book:UserBooks = {
    status:'',
    rating:'',
    bookId:{
      Cover:'',
      name : ''
    }
  }

  ngOnInit(): void {
  }
}
