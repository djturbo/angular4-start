import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatMenuModule, 
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatSnackBarModule} from '@angular/material';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { WebService } from './services/web.service';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MessageBoardComponent } from './components/message-board/message-board.component';
import { NewMessageComponent } from './components/new-message/new-message.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

const routes = [
  {
    path: '',
    component: HomeComponent
  },
  /*{
    path: 'messages',
    component: MessageBoardComponent
  },*/
  {
    path: 'messages/:name',
    component: MessageBoardComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MessageBoardComponent,
    NewMessageComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatMenuModule, 
    MatCardModule, 
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ WebService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
