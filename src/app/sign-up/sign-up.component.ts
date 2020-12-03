import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      accountName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(10)]],
      password2: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  saveNewUser(): void {
    this.authService.SignUp(
      this.signUpForm.value.email,
      this.signUpForm.value.password
    );
    this.userService.createUser({
      name: this.signUpForm.value.userName,
      accountName: this.signUpForm.value.accountName,
      email: this.signUpForm.value.email,
    });
  }
}
