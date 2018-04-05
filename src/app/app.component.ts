import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
// import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList, } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items:  AngularFireList<any>;
  itemshow : Observable<any[]>;
  name: any;
  msgVal = '';
  constructor(public af: AngularFireDatabase, public afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.items = af.list('messages',ref => ref.limitToLast(4));
    afAuth.authState.subscribe((auth)=> {
      this.name = auth;
      this.itemshow = this.items.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
    });
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    // this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  chatsend(theirMessage: string) {
    this.items.push({messages: theirMessage, name: this.name['displayName']});
    this.msgVal='';
  }
  logout(){
    this.afAuth.auth.signOut();
  }
}
