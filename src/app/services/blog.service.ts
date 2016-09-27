import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Category } from '../models/category.model';

@Injectable()
export class BlogService {

  constructor() { }

  listCategories(): Observable<Array<Category>> {
    return Observable.of([{ name: 'Informatique' }, { name: 'Economie' }, { name: 'Jeux vidéo' }]);
  }
}
