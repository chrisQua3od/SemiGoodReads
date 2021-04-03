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
    photo: '' ,
    fname: '',
    lname: ''
  }


  ngOnInit(): void {
  }
}
