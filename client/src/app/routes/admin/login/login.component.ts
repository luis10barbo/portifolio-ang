import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LoginService } from '../../../service/login/login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @ViewChild("passwordComponent") passwordComponent!: ElementRef<HTMLInputElement>;
  loggedIn?: boolean;
  password: string = "";

  setPassword(event: Event) {
    console.log((event.target as HTMLInputElement).value);
    this.password = (event.target as HTMLInputElement).value;
  }


  constructor(private loginService: LoginService) {
    this.loggedIn = loginService.loggedIn;
  } 
  doLogin() {
    this.loginService.doLogin(this.password).subscribe((res) => {
      this.loggedIn = res;
    });
  }
  doLogout() {
    this.loginService.doLogout().subscribe(() => {
      this.loggedIn = false;
    });
  }
}
