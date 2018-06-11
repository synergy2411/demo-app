import { Component, 
    Input, 
    Output, 
    EventEmitter, 
    OnChanges,
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy, 
    SimpleChanges} from '@angular/core';

@Component({
    selector : 'app-user',
    //template : `<h1>User Component Loaded!!!</h1>`
    templateUrl : './user.component.html'
})
export class UserComponent {
    @Input('xyz') title : string;
    @Input('user') user : any;
    @Output('childEvent') childEvent = new EventEmitter<string>();

    onkeyup(value){
        this.childEvent.emit(value);
    }
    firstName : string = "Bill";
    moreInfo(user){
        alert(`${user.firstName} is working with ${user.company} !! `);
    }

    constructor(){console.log("Constructor")}
    ngOnChanges(changes : SimpleChanges){
        console.log("ngOnChanges")
        console.log(changes);
    }
    ngOnInit(){console.log("ngOnInit")}
    ngAfterContentInit(){console.log("ngAfterContentInit")}
    ngAfterContentChecked(){console.log("ngAfterContentChecked")}
    ngDoCheck(){console.log("ngDoCheck")}
    ngAfterViewInit(){console.log("ngAfterViewInit")}
    ngAfterViewChecked(){console.log("ngAfterViewChecked")}
    ngOnDestroy(){console.log("ngOnDestroy")}
    
}