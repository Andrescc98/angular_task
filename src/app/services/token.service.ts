import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HostService } from './host.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private http:HttpClient,
    private host:HostService
  ) { }

  getToken():any{
    return this.http.get(`${this.host.path}sanctum/csrf-cookie`);
  }
}
