import {
  AfterContentChecked,
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
import { AdminPanelService } from '../admin-panel.service';

@Component({
  selector: 'app-category-panel',
  templateUrl: './category-panel.component.html',
  styleUrls: ['./category-panel.component.css'],
})
export class CategoryPanelComponent implements OnInit, AfterContentChecked {
  categories: any = [];
  editCategory: any;
  constructor(private categoryService: CategoryService, private adminPanelSrevice: AdminPanelService) {

  }
  ngAfterContentChecked() {
    // this.categories = this.adminPanelSrevice.getCategories();
  }
  ngOnInit(): void {
    this.adminPanelSrevice.getCategories().then((res: any) => {
      this.categories = res;
    })
  }
  deleteCategory(category: any) {
    this.categoryService.deleteCategory(category._id).subscribe((data) => {
      console.log(data);
    });
  }
  updateCategory(category: any) {
    this.editCategory = category;
  }
}
