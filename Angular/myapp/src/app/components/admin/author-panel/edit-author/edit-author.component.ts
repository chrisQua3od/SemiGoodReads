import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css'],
})
export class EditAuthorComponent implements OnInit, OnChanges {
  editAuthorForm!: FormGroup;
  @Input() updatedAuthor: any;
  constructor(private authorServie: AuthorService) {}
  ngOnInit(): void {}
  ngOnChanges() {
    this.editAuthorForm = new FormGroup({
      fname: new FormControl(this.updatedAuthor?.fname, [Validators.required]),
      lname: new FormControl(this.updatedAuthor?.lname, [Validators.required]),
      photo: new FormControl(this.updatedAuthor?.photo),
      dateOfBirth: new FormControl(this.updatedAuthor?.dateOfBirth, [
        Validators.required,
      ]),
    });
  }
  editAuthor() {
    this.authorServie
      .updateAuthor(this.updatedAuthor._id, this.editAuthorForm.value)
      .subscribe((res) => console.log(res));
  }
}
