import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/services/authors.service';
import { BooksService } from 'src/app/services/books.service';
import { CategoryService } from 'src/app/services/categories.service';
import { AdminPanelService } from '../../admin-panel.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  editBookForm!: FormGroup;
  categories!: any;
  authors: any;
  addBookForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    categoryId: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    cover: new FormControl('', Validators.required),
  });
  constructor(
    private bookService: BooksService,
    private categoryService: CategoryService,
    private authorSerice: AuthorService,
    private adminPanelService: AdminPanelService
  ) { }

  ngOnInit(): void {
    this.adminPanelService.getCategories().then((res: any) => {
      this.categories = res;
    })
    this.adminPanelService.getAuthors().then((res: any) => {
      console.log(res);
      this.authors = res.authors;
    })
  }
  addBook() {
    console.log(this.addBookForm.value);
    this.bookService.addBook(this.addBookForm.value).subscribe((res) => {
      console.log(res);
    });
  }
}
