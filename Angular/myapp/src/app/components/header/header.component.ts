import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';

import { Book } from '../models/book';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchForm = new FormGroup({
    searchVal: new FormControl(''),
  });
  books:Array<Book> = []
  filteredList :Array <Book> = this.books;
  logoutIcon:boolean = true
  constructor(private myService:BooksService,private modalService: NgbModal,private router:Router,private auth:AuthService) { }

  ngOnInit(): void {
    this.logoutIcon = this.auth.loggedIn()

  }
  get search() {
    return this.searchForm.get('searchVal');
  }


  subscriber:any

  onSubmit() {
    console.log("boooooooook")

    this.subscriber = this.myService.getBooks()
    .subscribe((book:any)=>{
      console.log(book)
      this.books = book
        this.filteredList= this.books.filter((item)=>{
          return item.name.includes(this.search?.value)
        })    
    },(err:any)=>{
      console.log(err)
    })
  }
  closeResult = '';
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  logOut(){
    var conf = confirm('sure you want to leave')
    if(conf){
      localStorage.removeItem('id')
      localStorage.removeItem('token')
      this.router.navigateByUrl('/login')
    }else{
        //do nothing
    }
  }


}
