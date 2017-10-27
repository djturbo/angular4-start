import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class WebService {

  constructor(private http: HttpClient) { }
  BASE_URL = 'http://localhost:1234/api';
  getMessages(onSuccess, onError){
    this.http.get(this.BASE_URL +'/messages').subscribe(data =>{
      onSuccess(data);
    }, err =>{
      onError(err);
    });
  }
  postMessage(message, onSuccess, onError){
    this.http.post(this.BASE_URL +'/message', message).subscribe(data =>{
      onSuccess(data);
    }, err =>{
      onError(err);
    });
  }

}
