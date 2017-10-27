import { Component, ViewChild } from '@angular/core';
import { MessageBoardComponent } from './components/message-board/message-board.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularJs 2 App';
  @ViewChild(MessageBoardComponent)messages : MessageBoardComponent;
  onPosted(message){
    console.log('AppComponent :: onPosted message: ', message);
    this.messages.messages.push(message);
  }
}
