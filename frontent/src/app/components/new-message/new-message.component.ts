import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { WebService } from '../../services/web.service';

@Component({
  selector: 'new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {
  @Output() onPosted : EventEmitter<any> = new EventEmitter();

  constructor(private webService : WebService) { }
  TAG = 'NewMessageComponent';
  ngOnInit() {
  }

  owner = "test"; 
  message = {
    owner: "",
    text: ""
  }
  post(){
    console.log(this.message.owner, " ", this.message.text);
    this.webService.postMessage(this.message, this.onSuccessPostMessage, this.onErrorPostMessage);
  }
  private onSuccessPostMessage = (data) => {
    console.log('NewMessageComponent :: onSuccessPostMessage: ',data)
    this.onPosted.emit(this.message);
  }
  private onErrorPostMessage = (error) =>{
    console.log('NewMessageComponent :: onErrorPostMessage: ',error)
  }
}
