import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  path:string="http://localhost:8000/";
  constructor() { }
}
