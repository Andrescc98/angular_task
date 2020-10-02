import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { LoadService } from 'src/app/services/load.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading:boolean=false;

  data:any={
    email:"",
    password:"",
  };

  constructor(
    private tokenService:TokenService,
    private userService:UserService,
    private loadService:LoadService,
    private route:Router
  ) { }

  ngOnInit(): void {
  }

  login(event:any){
    event.preventDefault();
    this.loading=true;

    this.tokenService.getToken().subscribe(()=>{
      this.userService.login(this.data).subscribe(
        (res:any)=>{
          this.loading=false;
          this.route.navigate(["/"])
        },
        (err:any)=>{          
          this.loading=false;
          console.log(err.error.errors);
        }
      )
    })
  }


}
