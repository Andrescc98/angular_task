import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  data: any = {
    name: '',
    email: '',
    password: '',
    password_confirmed: '',
  };

  constructor(
    private userService: UserService,
    private tokenServise: TokenService
  ) {}

  ngOnInit(): void {}

  register(event: any) {
    event.preventDefault();

    this.tokenServise.getToken().subscribe((response) => {
      this.userService.register(this.data).subscribe(
        (res) => console.log(res),
        (err) => console.log(err.error)
      );
    }
    );
  }
}
