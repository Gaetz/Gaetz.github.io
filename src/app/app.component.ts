import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'gb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: FirebaseListObservable<any[]>;
  title = 'Gaëtan Blaise-Cazalet';

  constructor(af: AngularFire) {
    this.items = af.database.list('items');
  }

}
