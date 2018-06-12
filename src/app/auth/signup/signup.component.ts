import { Component, OnInit } from '@angular/core';
import { FormControl, 
  FormGroup, 
  FormBuilder, 
  Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username = new FormControl('',[
    Validators.required,
    Validators.minLength(5),

  ]);
  password = new FormControl('', [
    Validators.required,
    this.checkExclamation
  ]);

  checkExclamation(input : FormControl){
    console.log(input);
      const hasExclamation = input.value.indexOf('!') >= 0;
      return hasExclamation ? null : { needExclamation : true}
  }

  registerForm : FormGroup;

  constructor(private fb : FormBuilder,
              private authService : AuthService){
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password
    })
  }

  onRegister(){
    alert("Registered!");
    console.log(this.registerForm);
    this.authService.singup(this.registerForm.value.username,
            this.registerForm.value.password);
  }
}
