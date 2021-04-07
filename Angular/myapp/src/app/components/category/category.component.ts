import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../models/user';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: [
  ]
})
export class CategoryComponent implements OnInit {


  constructor() {}

  @Input('categoryInfo') category:Category = {
    _id:'',
   name:'',
   books : [
     {
       _id:'',
      name:'',
      cover:''
     }
   ]
  }


  ngOnInit(): void {

  }
}
