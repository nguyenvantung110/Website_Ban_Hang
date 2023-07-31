import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    debugger;
    let jwtToken = localStorage.getItem('jwt');
    if(jwtToken){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${jwtToken}`
        }
      })
    }
    return next.handle(request);
  }
}
