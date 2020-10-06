import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { LoadService } from 'src/app/services/load.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  form = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private tokenService: TokenService,
    private userService: UserService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  login(event: any) {
    event.preventDefault();
    this.loading = true;

    this.tokenService.getToken().subscribe(() => {
      this.userService.login(this.form.value).subscribe(
        (res: any) => {
          this.loading = false;
          this.route.navigate(['/']);
        },
        (err: any) => {
          this.loading = false;
          console.log(err.error.errors);
        }
      );
    });
  }
}
