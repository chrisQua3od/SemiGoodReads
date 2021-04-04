import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = "http://localhost:8000/register ";

  constructor(private http:HttpClient) { }

  registerUser(user:any) {
    return this.http.post<any>(this.registerUrl, user)
  }

  getCategories() {
    return this.http.get<any>(this.registerUrl)
  }

  getToken() {
    console.log("hjasjkhdjashdjkhasj");
    
    return localStorage.getItem('token')
  }

}
