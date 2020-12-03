import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore'
import { Router } from '@angular/router'
import * as firebase from 'firebase'


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedInUser: any
  accountName: any

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    private firestore: AngularFirestore,
  ) {}

  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result: any) => {
        window.alert('You have been successfully registered!')
        this.router.navigate(['/log-in'])
        console.log(result.user)
      })
      .catch((error: any) => {
        window.alert(error.message)
      })
  }

  // Sign in with email/password
  logIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result: any) => {
        window.alert('You have been successfully logged in!')
        this.router.navigate(['/home'])
      })
      .catch((error: any) => {
        window.alert(error.message)
      })
  }

  getCurrentUser(): any {
    firebase.default.auth().onAuthStateChanged(async (user) => {
      this.loggedInUser = user?.email
      const query =  await this.firestore.firestore
        .collection('users')
        .where('email', '==', this.loggedInUser)
        .get()
       
      if (!query.empty) {
        const snapshot = query.docs[0]
        const data = snapshot.data()       
        this.accountName = data.accountName;
      }
    })  
  }

  SignIn(email: string, password: string) {
    this.logIn(email, password)
    this.getCurrentUser()
  }
}
