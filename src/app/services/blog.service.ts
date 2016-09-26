import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable()
export class BlogService {

  constructor() { }

  listCategories(): Array<Category> {
    return [{ name: 'Informatique' }, { name: 'Economie' }, { name: 'Jeux vidéos' }];
  }
}
