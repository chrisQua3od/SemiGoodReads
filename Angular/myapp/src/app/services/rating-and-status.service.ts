import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatingAndStatusService {

  private loginUrl = "http://localhost:8000/login ";
  constructor(private http:HttpClient) { }

  changeRating(newRate:any){
    console.log(newRate);
    
    // this.http.post<any>(this.loginUrl , newRate)
  }

  changeStatus(status:any){
    console.log(status)
  }
}
