import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  BASE_URL = 'http://localhost:1234/auth';
  NAME_KEY = 'name';
  TOKEN_KEY = 'token';

  constructor(
    private http: HttpClient,
    private router: Router) { }
  
  get name(){
    return localStorage.getItem(this.NAME_KEY);
  }

  get isAuthenticated(){
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  register = (user)=>{
    delete user['confirmPassword'];
    this.http.post(this.BASE_URL+ '/register', user).subscribe(res =>{
      var authenticated = res;
      if(!authenticated){
        return;
      }
      localStorage.setItem(this.TOKEN_KEY, authenticated['result']);
      localStorage.setItem(this.NAME_KEY, authenticated['firstName']);
      this.router.navigate(['/']);
      console.log('token: ', authenticated['result']);
      console.log('name: ', authenticated['firstName']);
    });
  }
}
