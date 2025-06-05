import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSignal = signal(false);

  constructor() { }

  get isLoggedIn() {
    return this.isLoggedInSignal;
  }

  login() {
    this.isLoggedInSignal.set(true);
  }

  logout() {
    this.isLoggedInSignal.set(false);
  }

  // Example: set logged in from token presence
  checkToken() {
    const token = localStorage.getItem('token');
    this.isLoggedInSignal.set(!!token);
  }
}
