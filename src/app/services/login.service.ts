import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router){}

  login(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            this.router.navigate([""]);
            localStorage.setItem("token", token);
            console.log("Te has loggeado");
          }
        )
      }
    ).catch(err => console.log("ERROR!"));
  }
  getIdToken(){
    return localStorage.getItem("token");
  }
  isLogin(){
    return localStorage.getItem("token") != undefined;
  }
  logout(){
    firebase.auth().signOut().then( () => {
      this.router.navigate(["/"]);
      localStorage.removeItem("token");
      window.location.reload();
    });
    console.log("Has salido de tu sesion");
  }
}
