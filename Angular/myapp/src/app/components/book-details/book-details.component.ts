import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Book } from '../models/book';
import { Router } from '@angular/router'
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private myService: UsersService,
    private myActivatedRoute: ActivatedRoute) { }
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
    reviews: [{ body: '' }]
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
  }
  onRate($event: {
    oldValue: number;
    newValue: number;
    starRating: StarRatingComponent;
  }) {
  }
  addReview(review: string) {
    console.log(review)
    console.log(this.books._id)
    this.myService.addReview("606c45a8b5ad8a61d91ad16e", { bookId: this.books._id, review }).subscribe(
      res => console.log(res),
    );
  }
}
