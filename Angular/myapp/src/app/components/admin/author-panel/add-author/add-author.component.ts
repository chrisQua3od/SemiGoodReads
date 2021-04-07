import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css'],
})
export class AddAuthorComponent implements OnInit {
  addAuthorForm!: FormGroup;
  constructor(private authorService: AuthorService) {}

  ngOnInit(): void {
    this.addAuthorForm = new FormGroup({
      photo: new FormControl(''),
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl(null, [Validators.required]),
    });
  }
  addAuthor() {
    this.authorService
      .addAuthor(this.addAuthorForm.value)
      .subscribe((res) => console.log(res));
  }
}
