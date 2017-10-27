import { Component, OnInit } from '@angular/core';
import { WebService } from '../../services/web.service';

@Component({
  selector: 'new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {

  constructor(private webService : WebService) { }

  ngOnInit() {
  }

  owner = "test"; 
  message = {
    owner: "",
    text: ""
  }
  post(){
    console.log(this.message.owner, " ", this.message.text);
  }
}
