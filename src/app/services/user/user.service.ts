import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore'
import * as firebase from 'firebase'
import { first, tap } from 'rxjs/operators'

import { IUser } from '../../interfaces/user'

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

    // this.getCurrentUserState().pipe(
    //   tap((user) => {
    //     if (user) {
    //       this.loggedInUser = user.displayName
    //       console.log(user.displayName)
    //     } else {
    //       console.log('failed')
    //     }
    //   }),
    // )
  }

  createUser(user: IUser) {
    return this.firestore.collection('users').add(user)
  }
}
