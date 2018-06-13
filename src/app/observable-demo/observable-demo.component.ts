import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent {
  data : any;
  newdata : any;
  myObs = Observable.create((observer)=>{
    setTimeout(()=>observer.next("First Package"), 1000);
    setTimeout(()=>observer.next("Second Package"), 2000);
    setTimeout(()=>observer.next("Third Package"), 4000);
    setTimeout(()=>observer.complete(), 6000);
    setTimeout(()=>observer.next("Fourth Package"), 7000);
  }).subscribe(
    (data)=>this.data = data,
    (err) =>console.log(err),
    ()=>console.log("Completed!")
  )


  numbers : number;
  constructor(){
    Observable.interval(1000).subscribe(data=>this.numbers = data);
  }

  stop(){
    this.data.unsubscribe();
  }


}
