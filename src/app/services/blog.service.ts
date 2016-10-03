import { Injectable, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Category } from '../models/category.model';

@Injectable()
export class BlogService  {

  constructor(private firebase: FirebaseService) {
    this.categories = this.firebase.getList('/categories')
   }

  // Categories
  categories: FirebaseListObservable<Category[]>;

  syncCategories(): void {
  }

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
