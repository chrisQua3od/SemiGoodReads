import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  baseUrl = 'http://localhost:8000/users/';
  constructor(private http: HttpClient) { }

  getAllBooks(userId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${userId}/books`);
  }

  getCurrentlyReading(userId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${userId}/currently-reading`);
  }

  getWantToRead(userId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${userId}/want-to-read`);
  }

  getRead(userId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${userId}/read`);
  }
}
// `${this.baseUrl}/${userId}`
