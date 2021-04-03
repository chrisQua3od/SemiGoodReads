import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    const url = "http://localhost:8000/authors"
    return this.http.get<any>(url)
  }
}
