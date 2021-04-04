import { Component, OnInit,Input,OnDestroy } from '@angular/core';
import { PaginationService } from 'src/app/services/pagination.service';
import { AuthorService } from 'src/app/services/authors.service';
import { Author } from '../models/author';


@Component({
  ///selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})

export class AuthorsComponent implements OnInit,OnDestroy {
  // data:Array<any>=[]
  // totalRecords:string = ''
  // page:number=1
  authors:Array<Author> = []
  totalRecords:string = ''
  page:number=1
  constructor(private myService:AuthorService) { }


  subscriber:any;

  ngOnDestroy(): void {
    this.subscriber.unsubscribe()
  }

  ngOnInit(): void {
    this.subscriber = this.myService.getAuthors()
      .subscribe((response:any)=>{
        console.log(response)
        this.authors= response.body
        this.totalRecords=response.results.length;
        console.log(this.authors)
      },
      (err)=>{
        console.log(err)
      }  
    )
  }
 // @Input() allBookslist:Array<{img:string,authName:string,avgRate:number,myRate:number}> = []

}
