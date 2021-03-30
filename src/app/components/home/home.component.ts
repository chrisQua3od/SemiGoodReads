import { Component, Input, OnInit } from '@angular/core';
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
  constructor(private paginate:PaginationService) {
    this.data = new Array<any>()
   }

  ngOnInit(): void {
    this.paginate.getData().subscribe((data)=>{
      this.data = data.results
      this.totalRecords = data.results.length
      console.log(this.data)
    })
  }
  @Input() allBookslist:Array<{img:string,authName:string,avgRate:number,myRate:number}> = []
}
