import { Component, Input, OnInit } from '@angular/core';
import {Author, Category, User, UserBooks } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
    './user.component.css'
  ]
})

export class UserComponent implements OnInit {

  constructor() {}

  @Input('userInfo') user:User = {
    _id:'',
    fname:'',
    lname:'',
    photo:''
  }

  @Input('authInfo') author:Author = {
    _id:'',
    fname:'',
    lname:'',
    photo:'',
    dateOfBirth:'',
    books:[
      {
        _id:'',
        name:'',
        cover:''
      }
    ]
  }
  

  @Input('catInfo') category:Category = {
    _id:'',
    name:'',
    books:[
        {
          _id:'',
            name:'',
            cover:''
        }
      ]
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
