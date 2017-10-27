import { Component, OnInit } from '@angular/core';
import { WebService } from '../../services/web.service';
@Component({
  selector: 'message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.scss']
})
export class MessageBoardComponent implements OnInit {

  constructor(private webService: WebService) { }

  async ngOnInit() {
    
    console.log('calling getMessage on ngOnInit from MessageBoardComponent ...');
    this.webService.getMessages(this.onSuccess, this.onError);
  }
  onSuccess = (data)=>{
    console.log('onSuccess data: ',data);
    this.messages = data;
  }
  onError = (error)=>{
    console.log('onError error: ', error);
  }
  messages = [];

}
