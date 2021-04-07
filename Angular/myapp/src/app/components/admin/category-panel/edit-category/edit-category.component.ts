import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditItemComponent implements OnInit, OnChanges {
  editForm!: FormGroup;
  @Input() category: any;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {}
  ngOnChanges() {
    this.editForm = new FormGroup({
      name: new FormControl(this.category?.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }
  get editFormControl() {
    return this.editForm.controls;
  }
  editCategory() {
    if (this.editForm.value.name) {
      this.categoryService
        .editCategory(this.category._id,this.editForm.value)
        .subscribe((data) => console.log(data));
    }
  }
}
