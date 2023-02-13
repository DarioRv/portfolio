import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Swal from 'sweetalert2';

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
            Swal.fire({
              title: 'Has iniciado sesión',
              icon: 'success',
              confirmButtonText: 'OK'
            });
          }
        )
      }
    ).catch(err => {
      Swal.fire({
        title: 'Error!',
        text: 'No has podido autenticarte',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  }
  getIdToken(){
    return localStorage.getItem("token");
  }
  isLogin(){
    return localStorage.getItem("token") != undefined;
  }
  logout(){
    firebase.auth().signOut().then( () => {
      Swal.fire({
        title: 'Has salido de tu sesión',
        text: 'La pagina se recargará en 3 segundos',
        icon: 'info',
        confirmButtonText: 'OK'
      });
      setTimeout (() => {
        this.router.navigate(["/"]);
        localStorage.removeItem("token");
        window.location.reload();
      }, 3000)
    });
  }
}
