import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';
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

  get tokenHeader(){
    var headers = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem(this.TOKEN_KEY)});
    return headers;
  }

  register = (user)=>{
    delete user['confirmPassword'];
    this.http.post(this.BASE_URL+ '/register', user).subscribe(res =>{
      this.authenticate(res);
    });
  }

  logout = () =>{
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.NAME_KEY);
  }

  login = (payload, onSuccess, onError) =>{
    console.log("authService :: login :: payload: ", payload);
    this.http.post(this.BASE_URL + '/login', payload).subscribe(res =>{
      if(res['success'] !== undefined && res['success'] === false){
          return false;
      }
      this.authenticate(res);
      onSuccess(res);
    }, err =>{
      onError(err);
    });
  }

  authenticate = (res) =>{
    var authenticated = res;
    if(!authenticated){
      return;
    }
    localStorage.setItem(this.TOKEN_KEY, authenticated['result']);
    localStorage.setItem(this.NAME_KEY, authenticated['firstName']);
    this.router.navigate(['/']);
    console.log('token: ', authenticated['result']);
    console.log('name: ', authenticated['firstName']);
  }
}
