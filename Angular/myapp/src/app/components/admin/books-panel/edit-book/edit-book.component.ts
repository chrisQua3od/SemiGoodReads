import { AfterContentChecked, Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';
import { AdminPanelService } from '../../admin-panel.service';

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
    private adminPanelService: AdminPanelService,
  ) { }

  ngOnInit(): void {
    this.adminPanelService.getCategories().then((res: any) => {
      this.categories = res;
    })
    this.adminPanelService.getAuthors().then((res: any) => {
      this.authors = res.authors;
    })
  }
  ngOnChanges() {
    this.editBookForm = new FormGroup({
      name: new FormControl(this.updatedBook?.name, [Validators.required]),
      categoryId: new FormControl(this.updatedBook?.categoryId, [
        Validators.required,
      ]),
      author: new FormControl(this.updatedBook?.author, [Validators.required]),
      photo: new FormControl(this.updatedBook?.cover),
    });
  }
  editBook() {
    this.bookService.updateBook(this.updatedBook._id, this.editBookForm.value)
      .subscribe((res) => console.log(res));
  }
  @Input() updatedBook!: any;
}
