import { Component } from '@angular/core';
import { User } from './model/user';
import { USER_DATA } from './data/mocks';
import { TranslateService } from '@ngx-translate/core';

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
  users : User[];
  ngOnInit(){
    this.users = USER_DATA;
  }
}
