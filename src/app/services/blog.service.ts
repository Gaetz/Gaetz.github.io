import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import 'rxjs/add/observable/of';

import { Category } from '../models/category.model';

@Injectable()
export class BlogService  {

  categories: FirebaseListObservable<Category[]>;

  constructor(private af: AngularFire) {
    this.categories = this.af.database.list('/categories');
  }

  // Categories

  listCategories(): FirebaseListObservable<Category[]> {
    return this.categories;
  }

  addCategory(category: Category) {
    this.categories.push(category);
  }

  updateCategory(key, category: Category) {
    this.categories.update(key, category);
  }

  removeCategory(key) {
    this.categories.remove(key);
  }
}
