import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService{

    token : any;
    constructor(private router : Router){}
    singup(username : string, password : string){
        firebase.auth()
            .createUserWithEmailAndPassword(username, password)
            .then(response=>console.log(response))
            .catch(err=>console.log(err));
    }

    signin(username, password){
        firebase.auth()
            .signInWithEmailAndPassword(username, password)
            .then(response=>{
                this.router.navigate(['user']);
                console.log(response)
                firebase.auth().currentUser.getIdToken()
                    .then(token=> {
                        console.log(token);
                        this.token = token;
                        sessionStorage.setItem("token", token);
                    })
                    .catch(err=>console.log(err))
            })
            .catch(err=>console.log(err));
    }

    getToken(){
        firebase.auth().currentUser.getIdToken()
        .then(token=> {
            console.log(token);
            this.token = token;
            sessionStorage.setItem("token", token);
        })
        .catch(err=>console.log(err))

        return this.token;
    }

    isAuthenticated(){
        return this.token != null;
    }
}