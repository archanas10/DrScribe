import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  router: any;
  logo: string = "assets/images/logo.jpg"
  user: firebase.User;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getUserState()
      .subscribe(user => {
        this.user = user;
      })
  }

  logout() {
    this.auth.logout();
  }

}
