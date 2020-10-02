import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from "rxjs/operators";

import { UserService } from '../services/user.service';
import { LoadService } from '../services/load.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private user

  constructor(
    private userService:UserService,
    private loadService:LoadService,
    private route:Router
  ){
    this.user = this.userService.getItem();
  }

  canActivate(): Observable<boolean> | boolean {

    return this.userService.getUser().pipe(
      map((res)=>{
        this.userService.setItem(res);
        this.loadService.its_ready_load();
        return true;
      }),

      catchError((err)=>{
        if(err.status !== 401){
          console.log(err);
        }
        this.loadService.its_ready_load();
        return of(this.route.createUrlTree(["/login"]));
      })
    )

  }
  
}
