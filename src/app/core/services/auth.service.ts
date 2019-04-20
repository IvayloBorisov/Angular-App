import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const registerUrl = "http://localhost:5000/auth/register";
const loginUrl =  "http://localhost:5000/auth/login";


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  

  constructor( private http: HttpClient, private router: Router) { }

  register(body) {
    return this.http.post(registerUrl, body);
  }

  login(body) {
    return this.http.post(loginUrl, body);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  getToken() {
    let token = localStorage.getItem('token');
    return token;
  }

  isAdmin() {
    let role = localStorage.getItem('isAdmin');
    
    if(role === "true") {
      return true;
    } 
  }
}
