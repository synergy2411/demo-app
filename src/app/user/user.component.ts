import { Component } from '@angular/core';

@Component({
    selector : 'app-user',
    //template : `<h1>User Component Loaded!!!</h1>`
    templateUrl : './user.component.html'
})
export class UserComponent{
    firstName : string = "Bill";
    moreInfo(user){
        alert(`${user.firstName} is working with ${user.company} !! `);
    }
    user = {
        firstName : "Bill",
        lastName : "Gates",
        company : "Microsoft",
        income : 50000,
        dob : new Date("Dec 21, 1965"),
        isWorking : true,
        image : "assets/images/bill.jpg",
        vote : 120
    }
}