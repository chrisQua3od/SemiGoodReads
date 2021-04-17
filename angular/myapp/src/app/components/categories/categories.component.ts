import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit,Input,OnDestroy } from '@angular/core';
import { PaginationService } from 'src/app/services/pagination.service';
import { CategoryService } from 'src/app/services/categories.service';
import { Category } from '../models/user';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit,OnDestroy {

  categories:Array<Category> = []
  totalRecords:string = ''
  page:number=1
  constructor(private myService:CategoryService) { }


  subscriber:any;

  ngOnDestroy(): void {
    this.subscriber.unsubscribe()
  }

  ngOnInit(): void {
    this.subscriber = this.myService.getCategories()
      .subscribe((response:any)=>{
        console.log(response)
        this.categories= response.body
        this.totalRecords=response.results.length;
        console.log(this.categories)
      },
      (err)=>{
        console.log(err)
      }  
    )
  }
 

}



