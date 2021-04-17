import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    const url = "https://randomuser.me/api/?results=40"
    return this.http.get<any>(url)
  }

  getCurrentlyReading():Observable<any>{
    console.log("current");
    
    const url = "https://randomuser.me/api/?results=40"
    return this.http.get<any>(url)
  }

  getWantToRead():Observable<any>{
    const url = "https://randomuser.me/api/?results=30"
    return this.http.get<any>(url)
  }

  getRead():Observable<any>{
    const url = "https://randomuser.me/api/?results=20"
    return this.http.get<any>(url)
  }
}
