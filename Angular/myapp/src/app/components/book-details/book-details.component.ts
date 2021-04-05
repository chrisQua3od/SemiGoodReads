import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Book } from '../models/user';
import {Router} from '@angular/router'

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styles: [
  ],
})
export class BookDetailsComponent implements OnInit ,OnDestroy{

  constructor(private router: Router,private myService:UsersService,
              private myActivatedRoute:ActivatedRoute) { }
  ngOnDestroy(): void {
    console.log('destroy')
    this.subscriber.unsubscribe();
  }

  books:Book = {
    _id:'',
    name:'',
    cover:''
  }
  subscriber:any

  ngOnInit(): void {
    this.subscriber = this.myService.getBookById(this.myActivatedRoute.snapshot.params.id)
    .subscribe((book:any)=>{
      console.log(book)
      this.books = book
    },(err)=>{
      console.log(err)
    })
  }
}
