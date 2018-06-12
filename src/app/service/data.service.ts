import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mocks';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user';

@Injectable()
export class DataService{
    counter : number = 0;
    constructor(private http : Http){}

    getUserData(){
        return this.http.get("assets/data.json")
                .map(response=><User[]>response.json().userdata)

       // return USER_DATA;
    }

    //.map(function(response){
       // return <User[]> response.json().userdata
    //})
}