import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }


  form:FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })

  validation(form:FormGroup){
    const btn = document.querySelector('.button');
    console.log(form.status);
    
    if(form.status == 'INVALID'){
      btn?.setAttribute('disabled', '')
    }else{
      btn?.removeAttribute('disabled')
    }
  }

  ngOnInit(): void {

  }

}
