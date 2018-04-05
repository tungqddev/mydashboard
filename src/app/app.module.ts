import { AngularFirestore } from 'angularfire2/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

//Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCF2WNLWKyIFbP9miDGReji7CbLkc_787k",
  authDomain: "mydashboard-5b31f.firebaseapp.com",
  databaseURL: "https://mydashboard-5b31f.firebaseio.com",
  projectId: "mydashboard-5b31f",
  storageBucket: "mydashboard-5b31f.appspot.com",
  messagingSenderId: "175656638845"
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AngularFireDatabase,
    AngularFireAuth,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
