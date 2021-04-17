import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registerUrl = "http://localhost:8000/register ";
  private loginUrl = "http://localhost:8000/login ";
  constructor(private http:HttpClient) { }


  registerUser(user: any) {
    return this.http.post<any>(this.registerUrl, user);
  }

  loginUser(user:any) {
    return this.http.post<any>(this.loginUrl, user)
  }
  getCategories() {
    return this.http.get<any>(this.registerUrl);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getId(){
    return localStorage.getItem('id')
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

}
