import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit,Input,OnDestroy } from '@angular/core';
import { PaginationService } from 'src/app/services/pagination.service';
import { UsersService } from 'src/app/services/users.service';
import { Book } from '../models/user';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit,OnDestroy {

    @Input() books:Array<Book> = []
  totalRecords:string = ''
  page:number=1
  constructor(private myService:UsersService) { }


  subscriber:any;

  ngOnDestroy(): void {
    this.subscriber.unsubscribe()
  }

  ngOnInit(): void {
    this.subscriber = this.myService.getBooks()
      .subscribe((response:any)=>{
        console.log(response)
        this.books= response.body
        this.totalRecords=response.results.length;
        console.log(this.books)
      },
      (err)=>{
        console.log(err)
      }  
    )
  }



}



