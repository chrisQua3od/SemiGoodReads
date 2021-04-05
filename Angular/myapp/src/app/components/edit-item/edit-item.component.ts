import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
})
export class EditItemComponent implements OnInit {
  editForm: FormGroup;
  @Input() category: any;
  constructor(private categoryService: CategoryService) {
    this.editForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }

  ngOnInit(): void {}
  editCategory() {
    console.log(this.category);
    if (this.editForm.value.name) {
      this.categoryService
        .editCategory(this.category._id, {
          name: this.editForm.value.name,
        })
        .subscribe((data) => console.log(data));
    }
  }
}
