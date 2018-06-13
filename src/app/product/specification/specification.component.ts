import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {

  constructor(private router : Router) { }
  gotoHome(){
    this.router.navigate(['signin']);
  }
  ngOnInit() {
  }

}
