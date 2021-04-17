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
  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.addAuthorForm = new FormGroup({
      photo: new FormControl(''),
      fname: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]+")]),
      lname: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]+")]),
      dateOfBirth: new FormControl(null, [Validators.required]),
    });
  }
  get formControls() {
    return this.addAuthorForm.controls
  }
  addAuthor() {
    this.authorService
      .addAuthor(this.addAuthorForm.value)
      .subscribe((res) => console.log(res));
  }
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('load', (evt) => {
        if (evt.loaded === evt.total)
          this.addAuthorForm.patchValue({
            photo: reader.result
          });
      });
    }
  }

}
