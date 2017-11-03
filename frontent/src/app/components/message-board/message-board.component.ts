import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { WebService } from '../../services/web.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.scss']
})
export class MessageBoardComponent implements OnInit {


  constructor(
    private webService: WebService,
    private route: ActivatedRoute) { }

    TAG = 'MessageBoardComponent';

  ngOnInit() {
    /* Observa por el parámetro name */
    console.log("this.route.snapshot.params.name: ",this.route.snapshot.params.name);
    this.route.paramMap.subscribe(
      (parmas) => {
        console.log("MessageBoardComponent :: name param: ", parmas.get('name'));
        let user = parmas.get('name');
        this.webService.getMessages(this.onSuccess, this.onError, user);
      },
      (err) => {
        console.error(err);
      });
      this.webService.getUser().subscribe(user =>{
        console.log(this.TAG, ' :: getUser ', user);
      }, error =>{
        console.log(this.TAG, ' :: getUser ',error);
      });
  }
  onSuccess = (data) => {
    console.log('onSuccess data: ', data);
    this.messages = data;
  }
  onError = (error) => {
    console.log('onError error: ', error);
  }
  messages = [];

}
