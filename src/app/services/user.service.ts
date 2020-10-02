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

  setItem(data:any):void{
    sessionStorage.setItem("name", data.name);
    sessionStorage.setItem("email", data.email)
    sessionStorage.setItem("image", data.image)
  }

  getItem():object{
    const user_data={
      name:sessionStorage.getItem("name"),
      email:sessionStorage.getItem("email"),
      image:sessionStorage.getItem("image")
    }
    return user_data;
  }

  clear():void{
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email")
    sessionStorage.removeItem("image")
  }
}
