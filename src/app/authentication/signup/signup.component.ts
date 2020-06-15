import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from './../../services/user.model';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ ]
})

export class SignupComponent {
  state: string = '';
  authError: any;
  user: User;
  loginContainer = true;
  logo: string = "assets/images/LogoTagline.jpg"


  constructor(private auth: AuthService, private router: Router) {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    })
  }
  loginTemplate() {
    this.loginContainer = !this.loginContainer;
  }
  onSubmit(form: NgForm) {

    this.auth.createUser(form.value);

    alert("SignUp Sucessfull! Please login with your credentials to continue.");
    console.log(this.user);
    this.auth.addUserToFirebase(this.user);
  }

  login(frm) {
    this.auth.login(frm.value.email, frm.value.password);
    this.router.navigate(['./home']);
  }

}
