import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Category } from '../models/user';
import {Router} from '@angular/router'

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styles: [
  ],
})
export class CategoryDetailsComponent implements OnInit ,OnDestroy{

  constructor(private router: Router,private myService:UsersService,
              private myActivatedRoute:ActivatedRoute) { }
  ngOnDestroy(): void {
    console.log('destroy')
    this.subscriber.unsubscribe();
  }

  category:Category = {
    _id:'',
    name:'',
    books:[
      {
        _id:'',
          name:'',
          cover:''
      }
  ]
  }
  subscriber:any

  ngOnInit(): void {
    this.subscriber = this.myService.getCategoryById(this.myActivatedRoute.snapshot.params.id)
    .subscribe((cat:any)=>{
      console.log(cat)
      this.category = cat
    },(err)=>{
      console.log(err)
    })
  }
}
