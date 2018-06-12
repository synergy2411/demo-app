import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css'],
  providers : [DataService]
})
export class PipeDemoComponent implements OnInit {

  increase(){
    this.dataService.counter++;
  }
  constructor(public dataService : DataService){}

  filteredText = '';
  todos = [{
    label : "Some Work",
    status : 'done'
  },{
    label : "Some Work",
    status : 'pending'
  },{
    label : "Some Work",
    status : 'done'
  },{
    label : "Some Work",
    status : 'pending'
  }]
  
  addnewTodo(){
    this.todos.push({label : "New Work", status : "pending"});
  }


  contact_no : number = 987654321;

  myData = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("Data Package!"), 2800);
  })

  ngOnInit() {
  }

}
