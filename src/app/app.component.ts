import { Component } from '@angular/core';
import {  AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = true;
  title = 'DrScribe';

  itemValue = '';
  userdetails: Observable<any[]>;
  checkIsUserLogged: firebase.User;


  constructor(public db: AngularFireDatabase, public auth: AuthService) {
    this.userdetails = db.list('userdetails').valueChanges();
    this.auth.getUserState()
      .subscribe(checkIsUserLogged => {
        this.checkIsUserLogged = checkIsUserLogged;
      })
  }

  onSubmit() {
    this.db.list('userdetails').push({ name: this.itemValue});
    this.itemValue = '';
  }
}
