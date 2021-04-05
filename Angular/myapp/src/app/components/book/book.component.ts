import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/user';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styles: [
  ]
})
export class BookComponent implements OnInit {


  constructor() {}

  @Input('bookInfo') book:Book = {
    _id:'',
   name:'',
   cover:'',
   categoryId:''
  }


  ngOnInit(): void {

  }
}
