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
  MatSnackBarModule,
  MatToolbarModule} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { WebService } from './services/web.service';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MessageBoardComponent } from './components/message-board/message-board.component';
import { NewMessageComponent } from './components/new-message/new-message.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'messages',
    component: MessageBoardComponent
  },
  {
    path: 'messages/:name',
    component: MessageBoardComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MessageBoardComponent,
    NewMessageComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent
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
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    RouterModule.forRoot(routes),
    MatToolbarModule
  ],
  providers: [ 
    WebService,
    AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
