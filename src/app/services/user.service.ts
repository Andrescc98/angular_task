import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HostService } from './host.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userInfo;
  constructor(
    private http: HttpClient,
    private host: HostService
  ) {}

  register(data: any): any {
    return this.http.post(`${this.host.path}register`, data);
  }
}
