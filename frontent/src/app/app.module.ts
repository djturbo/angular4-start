import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatMenuModule, 
  MatCardModule,
  MatIconModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { WebService } from './services/web.service';
import { AppComponent } from './app.component';
import { MessageBoardComponent } from './components/message-board/message-board.component';
import { NewMessageComponent } from './components/new-message/new-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageBoardComponent,
    NewMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatMenuModule, 
    MatCardModule, 
    MatIconModule,
    HttpClientModule
  ],
  providers: [ WebService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
