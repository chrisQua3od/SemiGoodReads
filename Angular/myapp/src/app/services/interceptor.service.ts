import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  intercept(req:any, next:any) {
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone(
      {
        setHeaders:{
          Authorization: `Bearer ${authService.getToken()}` 
        }
      }
    )
    return next.handle(tokenizedReq)
    // console.log(authService.getToken());
    
  }
  constructor(private injector:Injector) { }
}
