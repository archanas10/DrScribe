import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user$ = this.afAuth.authState.pipe(switchMap(user => {
      if (user) {
        return this.afs.doc<User>('users/${user.uid}').valueChanges();
      } else {
        return of(null);
      }
    }));
  }

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  user$: Observable<any>;
  http: any;
  newUser: any;
  addUserToFirebase(value: any) {
    throw new Error("Method not implemented.");
  }
  getUserState() {
    return this.afAuth.authState;
  }
  login( email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if(userCredential) {
          this.router.navigate(['./home']);
        }
      })
    const authData = {
      email: email,
      password: password
    }
    console.log(authData)
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      username: user.firstName,
      email: user.email,
      phoneNo: user.phoneNo,
      password: user.password
    }
    return userRef.set(data, { merge: true }); //existing data will not get erased

  }

    createUser(user) {
      console.log(user);
      this.afAuth.createUserWithEmailAndPassword( user.email, user.password)
        .then( userCredential => {
          this.newUser = user;
          console.log(userCredential);
          userCredential.user.updateProfile( {
            displayName: user.firstName + ' ' + user.lastName
          });

          this.insertUserData(userCredential)
            .then(() => {
              this.router.navigate(['./home']);
            });
        })
        .catch( error => {
          this.eventAuthError.next(error);
        });
    }

  insertUserData(userCredential: auth.UserCredential) {
    return this.afs.doc(`Users/${userCredential.user.uid}`).set({
      username: this.newUser.username,
      email: this.newUser.email,
      phoneNo: this.newUser.phoneNo,
      role: 'network user'
    })
  }

  logout() {
    this.router.navigate(['/signup']);
    return this.afAuth.signOut();

  }

  }

