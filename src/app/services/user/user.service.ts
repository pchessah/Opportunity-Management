import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {IUser} from '../../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private firestore: AngularFirestore) { }

  getUsers(){
    return this.firestore.collection("users").snapshotChanges()
  }

  createUser(user: IUser){
    return this.firestore.collection('users').add(user);
  }




}
