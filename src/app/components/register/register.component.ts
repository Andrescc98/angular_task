import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { TokenService } from 'src/app/services/token.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userRegister = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    password_confirmed: ['', Validators.required],
  });

  constructor(
    private userService: UserService,
    private tokenServise: TokenService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  register(event: any) {
    event.preventDefault();

    this.tokenServise.getToken().subscribe((response) => {
      this.userService.register(this.userRegister.value).subscribe(
        (res) => console.log(res),
        (err) => console.log(err.error)
      );
    });
  }
}
