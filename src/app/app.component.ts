import { Component } from '@angular/core';
import { User } from './model/user';
// import { USER_DATA } from './data/mocks';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public dataService : DataService){}
  
  increase(){
    this.dataService.counter++;
  }
  
  
  childEmittedEvent(data){
    this.title = data;
  }

  users : User[];
  ngOnInit(){
    //this.users = USER_DATA;
    //this.users = this.dataService.getUserData();
    this.dataService.getUserData()
      .subscribe(
        people=>this.users = people,      //Handle data
        (err)=>console.log(err),          //Error 
        ()=>console.log("Completed!!"));  //Complete function
  }
}
