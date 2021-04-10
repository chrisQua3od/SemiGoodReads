import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AuthorService } from 'src/app/services/authors.service';
import { Author } from '../models/author';


@Component({
  ///selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})

export class AuthorsComponent implements OnInit, OnDestroy {
  authors: Array<Author> = []
  totalRecords: string = ''
  page: number = 1
  itemsPerPage: number = 5;
  constructor(private myService: AuthorService) { }


  subscriber: any;

  ngOnDestroy(): void {
    this.subscriber.unsubscribe()
  }

  ngOnInit(): void {
    this.goToPage();
  }
  goToPage() {
    this.subscriber = this.myService.getAuthors(this.page.toString(), this.itemsPerPage)
      .subscribe((response: any) => {
        this.authors = response.body.authors
        this.totalRecords = response.body.numberOfProducts;
      },
        (err) => {
          console.log(err)
        }
      )
  }
}
