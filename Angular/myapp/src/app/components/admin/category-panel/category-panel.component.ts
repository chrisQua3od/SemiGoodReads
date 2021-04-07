import {
  asNativeElements,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/categories.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-panel',
  templateUrl: './category-panel.component.html',
  styleUrls: ['./category-panel.component.css'],
})
export class CategoryPanelComponent implements OnInit {
  categories: any = [];
  editCategory: any;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data.body;
    });
  }
  deleteCategory(category: any) {
    console.log(category._id);
    this.categoryService.deleteCategory(category._id).subscribe((data) => {
      console.log(data);
    });
  }
  updateCategory(category: any) {
    this.editCategory = category;
  }
}
