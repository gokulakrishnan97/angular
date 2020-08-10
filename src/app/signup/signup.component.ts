import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InputValidators }  from './validators'; 

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', 
    [Validators.required,
    InputValidators.canContainSpace]
    ),
    password: new FormControl('', Validators.required)
  });

  get username(){
    return this.form.get('username');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
