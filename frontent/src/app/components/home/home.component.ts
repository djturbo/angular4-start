import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageBoardComponent } from '../message-board/message-board.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MessageBoardComponent)messages : MessageBoardComponent;
  onPosted(message){
    console.log('AppComponent :: onPosted message: ', message);
    this.messages.messages.push(message);
  }
  constructor() { }

  ngOnInit() {
  }

}
