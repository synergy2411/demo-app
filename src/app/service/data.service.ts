import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mocks';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user';
import { AuthService } from './auth.service';

@Injectable()
export class DataService{
    counter : number = 0;
    constructor(private http : Http, 
                private authService : AuthService){}

    getUserData(){
        this.http.get("https://sg2-demo.firebaseio.com/userdata.json?auth="+this.authService.getToken())
                .map(response=>{
                    console.log(response);
                    return <User[]>response.json()
                }).subscribe((users)=>console.log(users));

       // return USER_DATA;
    }

    //.map(function(response){
       // return <User[]> response.json().userdata
    //})
}