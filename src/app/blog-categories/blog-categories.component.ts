import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';

@Component({
  selector: 'gb-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.css']
})
export class BlogCategoriesComponent implements OnInit {

  categories: Array<Category> = [{ name: 'Informatique' }, { name: 'Economie' }, { name: 'Jeux vidéos' }];

  constructor() { 
  }

  ngOnInit() {
  }

}
