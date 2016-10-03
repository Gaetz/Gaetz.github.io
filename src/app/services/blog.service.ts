import { Injectable } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FirebaseListObservable } from 'angularfire2';

import 'rxjs/add/observable/of';

import { Category } from '../models/category.model';

@Injectable()
export class BlogService  {

  categories: FirebaseListObservable<Category[]>;

  constructor(private firebase: FirebaseService) {
    this.categories = this.firebase.getList('/categories');
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
