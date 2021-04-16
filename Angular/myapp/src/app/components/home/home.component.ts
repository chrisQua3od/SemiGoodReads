import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HomeService } from 'src/app/services/home.service';
import { PaginationService } from 'src/app/services/pagination.service';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: Array<any> = [];
  totalRecords: string = '';
  page: number = 1;
  currentSection: string = '';
  bookCurrentState: string = '';
  userId: any = '';
  rating: any;

  constructor(
    private paginate: PaginationService,
    private auth: AuthService,
    private home: HomeService
  ) {
    this.data = new Array<any>();
  }

  ngOnInit(): void {
    // console.log("hoooooooooooome")
    // this.paginate.getData().subscribe((data)=>{
    //   this.data = data.results
    //   this.totalRecords = data.results.length
    //   this.currentSection = 'All'
    //   console.log(this.data)
    // })
    this.userId = this.auth.getId();
    this.home.getAllBooks('606623d776e86ac9ad8902fd').subscribe(
      (res) => {
        this.data = res;
        this.currentSection = 'All';
        console.log(res);
        console.log(this.data);
      },
      (err) => console.log(err)
    );
  }

  getCurrentBooks() {
    // this.paginate.getCurrentlyReading().subscribe((data)=>{
    //   this.data = data.results
    //   this.totalRecords = data.results.length
    //   this.currentSection = "Currently Reading"
    //   console.log(this.data)
    // })
    this.userId = this.auth.getId();
    this.home.getCurrentlyReading(this.userId).subscribe(
      (res) => {
        this.data = res;
        this.currentSection = 'All';
      },
      (err) => console.log(err)
    );
  }

  getWantToReadBooks() {
    // this.paginate.getWantToRead().subscribe((data)=>{
    //   this.data = data.results
    //   this.totalRecords = data.results.length
    //   this.currentSection = "Want To Read"
    //   console.log(this.data)
    // })
    this.userId = this.auth.getId();
    this.home.getWantToRead('606623d776e86ac9ad8902fd').subscribe(
      (res) => {
        this.data = res;
        this.currentSection = 'All';
      },
      (err) => console.log(err)
    );
  }

  getReadBooks() {
    // this.paginate.getRead().subscribe((data)=>{
    //   this.data = data.results
    //   this.totalRecords = data.results.length
    //   this.currentSection = "Read"
    //   console.log(this.data)
    // })
    this.userId = this.auth.getId();
    this.home.getRead('606623d776e86ac9ad8902fd').subscribe(
      (res) => {
        this.data = res;
        this.currentSection = 'All';
      },
      (err) => console.log(err)
    );
  }

  onRate($event: {
    oldValue: number;
    newValue: number;
    starRating: StarRatingComponent;
  }) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);

    this.rating = `${$event.newValue}`;
    console.log(this.rating);
  }

  @Input() allBookslist: Array<{
    img: string;
    authName: string;
    avgRate: number;
    myRate: number;
  }> = [];
}
