import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './../components/models/admin';

@Injectable({
    providedIn: 'root'
  })
  export class AdminService {
  
    constructor(private client: HttpClient) {
      console.log('service ctor')
    }
    readonly baseURL: string = "http://localhost:8000/admin";
    
    
   
    
    getAdminByName(admin: Admin) {
      return this.client.post(`${this.baseURL}/${admin.adminName}`,admin)
    }
    addAdmin(admin:Admin){
        return this.client.post(this.baseURL,admin)
      }
  
  }