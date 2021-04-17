import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HomeService } from 'src/app/services/home.service';
import { PaginationService } from 'src/app/services/pagination.service';
import { StarRatingComponent } from 'ng-starrating';
import { RatingAndStatusService } from 'src/app/services/rating-and-status.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

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

  newRate = {
    userId: '',
    bookId: '',
    rating: ''
  }

  bookStatus = {
    userId: '',
    bookId: '',
    status: ''
  }

  constructor(
    private paginate: PaginationService,
    private auth: AuthService,
    private home: HomeService,
    private ratingandstatus: RatingAndStatusService,
    private router: Router,
    private userService: UsersService
  ) {
    this.data = new Array<any>();
  }

  ngOnInit(): void {

    this.userId = this.auth.getId();
    this.home.getAllBooks(this.userId).subscribe(
      (res) => {
        this.data = res;
        this.currentSection = 'All';
        console.log(res);
        console.log(this.data);
      },
      (err) => {
        if (err.status === 403)
          this.router.navigate(['/login']);
      }
    );
  }

  getCurrentBooks() {

    this.userId = this.auth.getId();
    this.home.getCurrentlyReading(this.userId).subscribe(
      (res) => {
        this.data = res;
        this.currentSection = 'Currently Reading';
      },
      (err) => console.log(err)
    );
  }

  getWantToReadBooks() {

    this.userId = this.auth.getId();
    this.home.getWantToRead(this.userId).subscribe(
      (res) => {
        this.data = res;
        this.currentSection = 'Want To Read';
      },
      (err) => console.log(err)
    );
  }

  getReadBooks() {

    this.userId = this.auth.getId();
    this.home.getRead(this.userId).subscribe(
      (res) => {
        this.data = res;
        this.currentSection = 'Read';
      },
      (err) => console.log(err)
    );
  }

  onRate($event: {
    oldValue: number;
    newValue: number;
    starRating: StarRatingComponent;
  }, book: any) {

    this.newRate.rating = `${$event.newValue}`;
    this.newRate.bookId = book.bookId._id

    this.userService.editRating(this.userId, this.newRate).subscribe(res => console.log(res));

  }

  changeStatus(e: any, book: any) {
    console.log(e.target.value, book.bookId?._id);
    this.bookStatus.bookId = book.bookId?._id
    this.bookStatus.status = e.target.value
    this.userService.editStatus(this.userId, this.bookStatus).subscribe(res => console.log(res));
  }

  @Input() allBookslist: Array<{
    img: string;
    authName: string;
    avgRate: number;
    myRate: number;
  }> = [];
}
