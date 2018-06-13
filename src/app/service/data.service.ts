import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mocks';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user';
import { AuthService } from './auth.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService{
    counter : number = 0;
    constructor(private http : Http, 
                private httpClient : HttpClient,
                private authService : AuthService){}

    postUserData(){
        this.httpClient.post("https://sg2-demo.firebaseio.com/somedata.json",{
            body : {data : "Some More Data"}
        },{
            params : new HttpParams().set("auth", this.authService.getToken())
        })
        .subscribe(response=>console.log(response));
    }
    getUserData(){
        return this.httpClient.get<User[]>("https://sg2-demo.firebaseio.com/userdata.json")
               // .subscribe(data=>console.log(data));

        // this.http.get("https://sg2-demo.firebaseio.com/userdata.json?auth="+this.authService.getToken())
        //         .map(response=>{
        //             console.log(response);
        //             return <User[]>response.json()
        //         }).subscribe((users)=>console.log(users));

       // return USER_DATA;
    }

    //.map(function(response){
       // return <User[]> response.json().userdata
    //})
}