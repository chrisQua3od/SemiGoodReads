import { Component, OnInit,Input } from '@angular/core';
import { PaginationService } from 'src/app/services/pagination.service'

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
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
