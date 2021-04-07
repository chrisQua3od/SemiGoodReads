import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchForm = new FormGroup({
    searchVal: new FormControl(''),
  });
  books:Array<Book> = []
  filteredList :Array <Book> = this.books;

  constructor(private myService:BooksService) { }

  ngOnInit(): void {
  }
  get search() {
    return this.searchForm.get('searchVal');
  }


  subscriber:any

  onSubmit() {
    console.log("boooooooook")

    this.subscriber = this.myService.getBooks()
    .subscribe((book:any)=>{
      console.log(book)
      this.books = book
        this.filteredList= this.books.filter((item)=>{
          return item.name.includes(this.search?.value)
        })    
    },(err:any)=>{
      console.log(err)
    })
  }


}
