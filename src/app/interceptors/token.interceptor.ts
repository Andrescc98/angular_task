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
  private headerName: string = 'X-CSRF-TOKEN';

  constructor(private tokenServices: HttpXsrfTokenExtractor) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    
    const token = this.tokenServices.getToken();

    if (request.method === 'GET' || request.method === 'HEAD') {
      request = request.clone({
        withCredentials: true,
      });
      return next.handle(request);
    }

    if (token !== null && !request.headers.has(this.headerName)) {
      request = request.clone({
        withCredentials: true,
        headers: request.headers.set(this.headerName, token),
      });

      return next.handle(request);
    }
  }
}
