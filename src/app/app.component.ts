import { Component } from '@angular/core';
import firebase from "firebase/compat/app"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private readonly firebaseApiKey = '';
  private readonly firebaseAuthDomain = '';

  ngOnInit(): void{
    firebase.initializeApp({
      apiKey: this.firebaseApiKey,
      authDomain: this.firebaseAuthDomain,
    })
  }
}
