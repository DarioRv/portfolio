import { Component } from '@angular/core';
import firebase from "firebase/compat/app"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  ngOnInit(): void{
    firebase.initializeApp({
      apiKey: "AIzaSyB9Xe6ttEuF-Em8YkQVz1sVDigDMp05EJ4",
      authDomain: "portfolio-ef291.firebaseapp.com",
    })
  }
}
