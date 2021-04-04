import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PaginationService } from 'src/app/services/pagination.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:Array<any>=[]
  totalRecords:string = ''
  page:number=1
  currentSection:string = ''
  bookCurrentState:string = ''

  constructor(private paginate:PaginationService) {
    this.data = new Array<any>()
   }

  ngOnInit(): void {
    this.paginate.getData().subscribe((data)=>{
      this.data = data.results
      this.totalRecords = data.results.length
      this.currentSection = 'All'
      console.log(this.data)
    })
  }

  getCurrentBooks(){
    this.paginate.getCurrentlyReading().subscribe((data)=>{
      this.data = data.results
      this.totalRecords = data.results.length
      this.currentSection = "Currently Reading"
      console.log(this.data)
    })
  }

  getWantToReadBooks(){
    this.paginate.getWantToRead().subscribe((data)=>{
      this.data = data.results
      this.totalRecords = data.results.length
      this.currentSection = "Want To Read"
      console.log(this.data)
    })
  }

  getReadBooks(){
    this.paginate.getRead().subscribe((data)=>{
      this.data = data.results
      this.totalRecords = data.results.length
      this.currentSection = "Read"
      console.log(this.data)
    })
  }

  @Input() allBookslist:Array<{img:string,authName:string,avgRate:number,myRate:number}> = []
}
