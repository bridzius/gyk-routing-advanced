import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authToken = 'auth';

  get isLoggedIn() {
    return sessionStorage.getItem(this.authToken) !== null;
  }

  login() {
    sessionStorage.setItem(this.authToken, 'true');
  }

  logout() {
    sessionStorage.removeItem(this.authToken);
  }
}
