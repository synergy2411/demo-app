import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-animated',
  templateUrl: './animated.component.html',
  styleUrls: ['./animated.component.css'],
  animations : [
    trigger("divState", [
      state("normal",style({
        backgroundColor : 'red',
        transform : 'translateX(0)'
      })),
      state('highlight', style({
        backgroundColor : 'aqua',
        transform : 'translateX(100px)'
      })),
      transition("normal <=> highlight", animate(500)),
      
    ])
  ]
})
export class AnimatedComponent implements OnInit {

  state = "normal";
  
  onAnimate(){
    this.state = this.state == 'normal' ? 'highlight' : 'normal'
  }
  constructor() { }


  ngOnInit() {
  }

}
