import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-panel',
  templateUrl: './books-panel.component.html',
  styleUrls: ['./books-panel.component.css'],
})
export class BooksPanelComponent implements OnInit {
  books: any;
  editBook: any;
  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  deleteBook(book: any) {
    this.booksService.deleteBook(book._id).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
  updatedBook(book: any) {
    this.editBook = book;
  }
}
