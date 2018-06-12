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
    SimpleChanges,
    ViewEncapsulation} from '@angular/core';
import { User } from '../model/user';

@Component({
    selector : 'app-user',
    //template : `<h1>User Component Loaded!!!</h1>`
    templateUrl : './user.component.html',
    // styles :  [``]
    styleUrls : [`./user.component.css`],
    encapsulation : ViewEncapsulation.Emulated
})
export class UserComponent {
    @Input('xyz') title : string;
    @Input('users') users : User[];
    @Output('childEvent') childEvent = new EventEmitter<string>();
    myColor = "aqua";
    allClasses = { 
        feature : true, 
        myClass : false 
    }

    onkeyup(value){
        this.childEvent.emit(value);
    }
    firstName : string = "Bill";
    moreInfo(user){
        this.allClasses.feature = false;
        this.allClasses.myClass = true;

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