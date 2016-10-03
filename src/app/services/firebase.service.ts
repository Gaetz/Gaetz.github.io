import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FirebaseService {

  items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) { }

  getList(uri: string): FirebaseListObservable<any[]> {
    return this.af.database.list(uri);
  }

}
