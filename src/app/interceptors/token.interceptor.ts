import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpXsrfTokenExtractor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private headerName: string = 'X-XSRF-TOKEN';

  constructor(private tokenServices: HttpXsrfTokenExtractor) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    


    if (request.method === 'GET' || request.method === 'HEAD') {
      request = request.clone({
        withCredentials: true,
      });
      return next.handle(request);
    }
    const token = this.tokenServices.getToken();
    console.log(token);
    
    if (token !== null && !request.headers.has(this.headerName)) {
      request = request.clone({
        withCredentials:true,
        headers: request.headers.set(this.headerName, token),
      });    
    }  

    return next.handle(request);
  }
}
