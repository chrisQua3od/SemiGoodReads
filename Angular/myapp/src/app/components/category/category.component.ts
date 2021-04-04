import { Component, Input, OnInit } from '@angular/core';
import { Category} from '../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: [
  ]
})
export class CategoryComponent implements OnInit {


  constructor() {}

  @Input('categoryInfo') category:Category = {
   name:''

  }


  ngOnInit(): void {

  }
}
