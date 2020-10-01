import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HostService } from './host.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userInfo;
  constructor(
    private http: HttpClient,
    private host: HostService
  ) {}

  getUser():any{
    return this.http.get(`${this.host.path}api/user`);
  }

  register(data: any): any {
    return this.http.post(`${this.host.path}register`, data);
  }

  login(data:any):any{
    return this.http.post(`${this.host.path}login`, data);
  }

  isAuth():any{
    return this.http.get(`${this.host.path}api/is_auth`);
  }
}
