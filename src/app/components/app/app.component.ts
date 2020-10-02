import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoadService } from 'src/app/services/load.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(
    private userService:UserService,
    public loadService:LoadService,
    private route:Router
  ){

  }

  ngOnInit(): void {
    this.isAuth();
  }

  isAuth(){
    this.userService.isAuth().subscribe(
      ()=>{        
        this.loadService.its_ready_load();
      },

      (err)=>{
        if(err.status !== 401){
          console.log(err);
        }
        this.loadService.its_ready_load();
      }
    )
  }

}
