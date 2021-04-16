import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from '../../../../services/authors.service';
import { BooksService } from '../../../../services/books.service';
import { CategoryService } from '../../../../services/categories.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit, OnChanges {
  editBookForm!: FormGroup;
  categories: any;
  authors: any;
  constructor(
    private bookService: BooksService,
    private categoryService: CategoryService,
    private authorSerice: AuthorService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res.body;
    });
    this.authorSerice
      .getAuthors()
      .subscribe((res) => (this.authors = res.body));
  }
  ngOnChanges() {
    this.editBookForm = new FormGroup({
      name: new FormControl(this.updatedBook?.name, [Validators.required]),
      categoryId: new FormControl(this.updatedBook?.categoryId, [
        Validators.required,
      ]),
      author: new FormControl(this.updatedBook?.author, [Validators.required]),
      photo: new FormControl(this.updatedBook?.cover),
      sumary:new FormControl(),
    });
  }
  editBook() {
    this.bookService
      .updateBook(this.updatedBook._id, this.editBookForm.value)
      .subscribe((res) => console.log(res));
  }
  @Input() updatedBook!: any;
}
