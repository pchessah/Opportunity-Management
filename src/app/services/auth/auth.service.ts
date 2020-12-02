import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public afAuth: AngularFireAuth, public router: Router) { }

   // Sign up with email/password
   SignUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result: any) => {
        window.alert("You have been successfully registered!");
        this.router.navigate(["/log-in"]);
        console.log(result.user)
      }).catch((error: any) => {
        window.alert(error.message)
      })
  }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert("You have been successfully logged in!");
         this.router.navigate(["/home"]);
      }).catch((error: any) => {
        window.alert(error.message)
      })
  }
}
