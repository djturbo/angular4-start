import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class WebService {

  constructor(private http: HttpClient) { }

  getMessages(onSuccess, onError){
    this.http.get('http://localhost:1234/api/messages').subscribe(data =>{
      onSuccess(data);
    }, err =>{
      onError(err);
    });
  }

}
