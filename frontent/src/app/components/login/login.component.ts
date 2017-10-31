import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, this.emailValid()]],
      password: ['', Validators.required]
    });
  }

  isInvalidForm(control) {
    return this.form.controls[control].invalid && this.form.controls[control].touched
  }

  emailValid = () => {
    return control => {
      let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(control.value) ? null : { invalidEmail: true };
    }
  }

  login = ()=>{
    if(this.form.isInvalidForm){
      return;
    }
    console.log("loginComponent :: login email: ", this.form.value.email);
    var payload = {email: this.form.value.email, password: this.form.value.password};
    this.authService.login(payload, this.onSuccessLogin, this.onErrorLogin);
  }
  onSuccessLogin = (data) => {
    console.log('success login: ', data);
  }
  onErrorLogin = (err) =>{
    console.log('Error login: ', err);
  }
  ngOnInit() {
  }

}
