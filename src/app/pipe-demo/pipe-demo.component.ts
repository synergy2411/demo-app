import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
