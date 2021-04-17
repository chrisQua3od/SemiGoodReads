import { Component, Input, OnInit } from '@angular/core';
import { Author} from '../models/author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styles: [
  ]
})
export class AuthorComponent implements OnInit {


  constructor() {}

  @Input('authorInfo') author:Author = {
    _id:'',
    photo: '' ,
    fname: '',
    lname: '',
    dateOfBirth:'',
    books :[
      {
        _id:'',
        name:'',
        cover:''
      }
    ]
  }


  ngOnInit(): void {
    console.log(this.author)
  }
}
