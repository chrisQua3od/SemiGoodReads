import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PaginationService } from 'src/app/services/pagination.service';
import { UsersService } from 'src/app/services/users.service';
import { Book } from '../models/user';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy {

  @Input() books: Array<Book> = []
  totalRecords: string = ''
  page: number = 1
  itemPerPage: number = 5;
  constructor(private myService: BooksService) { }


  subscriber: any;

  ngOnDestroy(): void {
    this.subscriber.unsubscribe()
  }

  ngOnInit(): void {
    this.goToPage();
  }

  goToPage() {
    this.subscriber = this.myService.getBooks(this.page, this.itemPerPage)
      .subscribe((response: any) => {
        console.log(response)
        this.books = response.books;
        this.totalRecords = response.totalRecords;
        console.log(this.books)
      },
        (err) => {
          console.log(err)
        }
      )
  }

}



