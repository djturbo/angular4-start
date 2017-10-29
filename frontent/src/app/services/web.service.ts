import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WebService {

  constructor(private http: HttpClient) { }
  BASE_URL = 'http://localhost:1234/api';
  getMessages(onSuccess, onError, user){
    user = (user) ? '/' +user : '';
    this.http.get(this.BASE_URL +'/messages' +user).subscribe(data =>{
      onSuccess(data);
    }, err =>{
      onError(err);
    });
  }

  getMessage(name : string): Observable<any>{
    return this.http.get(this.BASE_URL +'/messages');
  }

  postMessage(message, onSuccess, onError){
    this.http.post(this.BASE_URL +'/message', message).subscribe(data =>{
      onSuccess(data);
    }, err =>{
      onError(err);
    });
  }


}
