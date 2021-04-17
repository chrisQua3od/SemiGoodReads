import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Book } from '../models/book';


import { Router } from '@angular/router'
import { StarRatingComponent } from 'ng-starrating';
import { AuthService } from 'src/app/services/auth.service';
import { User } from './../models/user';

import { FormBuilder ,Validators } from '@angular/forms';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  userId: any
  user:User={
    _id:'',
    fname:'',
    lname:'',
    photo:''
  }
  
  bookStatus = {
    bookId: '',
    status: ''
  }
 
  constructor(
    private router: Router,
    private myService: UsersService,
    private myActivatedRoute: ActivatedRoute,
    private authService: AuthService,
    private fb:FormBuilder ,
    private userService: UsersService) { }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }


  books: Book = {
    _id: '',
    name: '',
    cover: '',
    categoryId: '',
    sumary: '',
    status: '',
    countAvg: 0,
    sumAvg: 0,
    author: {
      _id: ''
      , fname: '', lname: ''
      , books: [{
        _id: '',
        cover: '',
        name: ''
      }], dateOfBirth: "", photo: ''
    },
    reviews: [{ body: '', user:{
      _id:'',
      fname:'',
      lname:'',
      photo:''

    }}]
  }

  subscriber: any

  ngOnInit(): void {
    this.subscriber = this.myService.getBookById(this.myActivatedRoute.snapshot.params.id)
      .subscribe((book: any) => {
        console.log(book)
        this.books = book
      }, (err) => {
        console.log(err)
      })
    this.userId = this.authService.getId();
  }
  onRate($event: {
    oldValue: number;
    newValue: number;
    starRating: StarRatingComponent;
  }) {
  }
  ReviewForm=this.fb.group({
  review:['',[Validators.required]]
})
onSubmit() {
  // this.ReviewForm.review = this.review?.value
console.log(this.ReviewForm.get("review")?.valid )
}

  
  addReview(review: string ) {
    
    
    this.myService.addReview(this.userId, { bookId: this.books._id, review }  ).subscribe(
      res => console.log(res),
    );
  }
  changeStatus(e: any) {
    console.log(e.target.value, this.books._id);
    this.bookStatus.bookId = this.books._id
    this.bookStatus.status = e.target.value
   
    this.userService.addBook(this.userId, this.bookStatus).subscribe(res => console.log(res));
  }
}
