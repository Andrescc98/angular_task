import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  loading_page:boolean=true;

  constructor() { }

  its_ready_load():void{
    this.loading_page=false
  }
}
