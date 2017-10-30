import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, this.emailValid()]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {validator: this.matchingFields('password', 'confirmPassword')});
   }

  ngOnInit() {
  }

  onSubmit = () =>{
    console.log('form errors: ', this.form.errors);
    console.log("This form is valid: ", this.form.valid);
    console.log("onSubmit: ", this.form.value );
  }

  isInvalidForm(control){
    return this.form.controls[control].invalid && this.form.controls[control].touched
  }
  matchingFields = (field1, field2)=>{
    return form =>{
      if(form.controls[field1].value !== form.controls[field2].value){
        return {mismatchedField: true}
      }
    }
  }
  emailValid = ()=>{
    return control =>{
      let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(control.value) ? null : {invalidEmail: true}; 
    }
  }
}
