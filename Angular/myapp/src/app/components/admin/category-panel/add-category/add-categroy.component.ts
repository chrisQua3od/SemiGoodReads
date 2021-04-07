import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
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
      .addCategory(this.addForm.value)
      .subscribe((data) => console.log(data));
  }
  @Input() headers: any;
}
