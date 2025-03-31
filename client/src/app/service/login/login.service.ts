import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../../environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loggedIn?: boolean;
  
  constructor(private httpClient: HttpClient) { 
    this.checkLogin().subscribe((res) => {
      this.loggedIn = res;
      console.log(`Is already logged in ${res}`)
    });
  }

  checkLogin() {
    return this.httpClient.get<boolean>(`${enviroment.urlBackend}/auth/check`);
  }

  doLogin(password: string) {
    return new Observable<boolean>((subscriber) => {
      this.httpClient.post<boolean>(`${enviroment.urlBackend}/auth`, {password: password}, {withCredentials: true}).subscribe((res) => {
        this.loggedIn = res;
        subscriber.next(res);
      });
    });
    
  }

  doLogout() {
    return new Observable<boolean>((subscriber) => {
      this.httpClient.post<boolean>(`${enviroment.urlBackend}/auth/logout`, undefined, {withCredentials: true}).subscribe((res) => {
        this.loggedIn = false;
        subscriber.next(this.loggedIn);
      });
    });
  }
}
