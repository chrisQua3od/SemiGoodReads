import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Author } from '../models/author';
import {Router} from '@angular/router'

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styles: [
  ],
})
export class AuthorDetailsComponent implements OnInit ,OnDestroy{

  constructor(private router: Router,private myService:UsersService,
              private myActivatedRoute:ActivatedRoute) { }
  ngOnDestroy(): void {
    console.log('destroy')
    this.subscriber.unsubscribe();
  }

  author:Author = {
    _id:'',
    fname:'',
    lname:'',
    photo:'',
    dateOfBirth:'',
    books :[
      {
        _id:'',
        name:'',
        cover:''
      }
    ]
  }
  subscriber:any

  ngOnInit(): void {
    this.subscriber = this.myService.getAuthorById(this.myActivatedRoute.snapshot.params.id)
    .subscribe((auth:any)=>{
      console.log(auth)
      this.author = auth
    },(err)=>{
      console.log(err)
    })
  }
}
