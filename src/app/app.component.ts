import { Component } from '@angular/core';
import { User } from './model/user';
import { USER_DATA } from './data/mocks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  childEmittedEvent(data){
    this.title = data;
  }
  user : User;
  ngOnInit(){
    this.user = USER_DATA;
  }
}
