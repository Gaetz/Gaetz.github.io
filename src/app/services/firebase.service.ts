import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Category } from '../models/category.model';


@Injectable()
export class FirebaseService {

  items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) { }

  getList(uri: string): FirebaseListObservable<any[]> {
    return this.af.database.list(uri);
  }

}
