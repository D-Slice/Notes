import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    form : FormGroup = new FormGroup({
      first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      age: new FormControl(null, [Validators.required, Validators.min(18), Validators.max(99), Validators.maxLength(1)]),
      password: new FormControl(null, [Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/), Validators.required]),
      // Password must be between 6-16 characters, has at least a number, and at least a special character
      confirmPassword: new FormControl(null, [Validators.required])
    })
    
  constructor() { }

  ngOnInit(): void {

  }
  validation(form:FormGroup){
    const btn = document.querySelector('.button')
    if(form.status == 'VALID' && this.confirmPassword.valueOf() == this.password.valueOf()){
      btn?.removeAttribute('disabled');
    }else{
      btn?.setAttribute('disabled', '');
    }
    
  }
  password:string = ''
  confirmPassword:string = ''
}
