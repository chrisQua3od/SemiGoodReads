import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class RatingAndStatusService {

  private loginUrl = "http://localhost:8000/login ";
  constructor(private http: HttpClient, private usersService: UsersService) { }

  changeRating(newRate: any) {
    console.log(newRate);

    // this.http.post<any>(this.loginUrl , newRate)
  }

  changeStatus(status: any) {

  }
}
