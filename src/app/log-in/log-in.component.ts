import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  logInForm: any;

  constructor( private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.logInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  logIn():void {
    this.authService.SignIn(this.logInForm.value.email, this.logInForm.value.password)
  }
}
