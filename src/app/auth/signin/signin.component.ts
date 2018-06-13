import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  onSubmit(form :NgForm){
    console.log("Form Submitted!", form);
    this.authService.signin(form.value.username, 
                form.value.password);
  }

  postUserData(){
    this.dataService.postUserData();
  }
  getUserData(){
    this.dataService.getUserData();
  } 
  constructor(private authService : AuthService,
              private dataService : DataService) { }

  ngOnInit() {
  }

}
