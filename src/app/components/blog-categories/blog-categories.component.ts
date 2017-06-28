import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../../models/category.model';
import { BlogService } from '../../services/blog.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'gb-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.css']
})
export class BlogCategoriesComponent implements OnInit {

  categories: FirebaseListObservable<Category[]>;

  constructor(private blogService: BlogService, private router: Router) {
  }

  ngOnInit() {
    this.categories = this.blogService.listCategories();
  }

  selectCategory(categoryId: number) {
    this.router.navigate(['/blog/category', categoryId]);
  }
}
