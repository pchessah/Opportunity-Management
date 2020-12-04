import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import {
  AngularFirestore,

} from '@angular/fire/firestore'
import * as firebase from 'firebase'
import { first } from 'rxjs/operators'


@Injectable({
  providedIn: 'root',
})
export class UserService {
  loggedInUser: any

  constructor(
    private firestore: AngularFirestore,
    public afAuth: AngularFireAuth,
  ) {}

  getCurrentUserState() {
    return this.afAuth.authState.pipe(first())
  }

  getCurrentUser() {
    firebase.default.auth().onAuthStateChanged(user => {
      if(user){
        console.log(user.displayName);
      } else {
        console.log("failed");
      }
    })
  }

  createUser(user: any) {
    return this.firestore.collection('users').add(user)
  }
}
