import { Component } from '@angular/core';
import firebase from "firebase/compat/app"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private readonly firebaseApiKey = 'AIzaSyB1iNDbdbnMBc5pPzfC0mZhf-BsUlF8R1w';
  private readonly firebaseAuthDomain = 'portfolio-b6f85.firebaseapp.com';

  ngOnInit(): void{
    firebase.initializeApp({
      apiKey: this.firebaseApiKey,
      authDomain: this.firebaseAuthDomain,
    })
  }
}
