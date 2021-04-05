import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  addForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {}
  addCategory() {
    console.log(this.addForm.value.name);
    this.categoryService
      .addCategory({ name: this.addForm.value.name })
      .subscribe((data) => console.log(data));
  }
}
